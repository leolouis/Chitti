import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { PrismaService } from '../prisma.service';

import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

import { LoginDto } from './dto/login.dto';


@Injectable()
export class AuthService {

  constructor(
    private prisma: PrismaService,
  ) {}


  async login(data: LoginDto) {

    const user =
      await this.prisma.user.findUnique({
        where: {
          email: data.email,
        },
        include: {
          organization: true,
        },
      });


    if (!user) {
      throw new UnauthorizedException(
        'Invalid credentials',
      );
    }


    const passwordMatch =
      await bcrypt.compare(
        data.password,
        user.passwordHash,
      );


    if (!passwordMatch) {
      throw new UnauthorizedException(
        'Invalid credentials',
      );
    }


    const token =
      jwt.sign(
        {
          id: user.id,
          role: user.role,
          organizationId: user.organizationId,
        },
        process.env.JWT_SECRET!,
        {
          expiresIn:
            process.env.JWT_EXPIRES_IN || '15m',
        },
      );


    return {
      accessToken: token,

      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        organizationId: user.organizationId,
        organizationName: user.organization.name,
      },
    };
  }
}
