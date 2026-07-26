import {
  Injectable,
} from '@nestjs/common';

import * as bcrypt from 'bcrypt';

import { PrismaService } from '../prisma.service';

import { CreateUserDto } from './dto/create-user.dto';


@Injectable()
export class UsersService {

  constructor(
    private prisma: PrismaService,
  ) {}


  async create(
    data: CreateUserDto,
  ) {

    const passwordHash =
      await bcrypt.hash(
        data.password,
        12,
      );


    return this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        passwordHash,
        role: data.role,
        organizationId: data.organizationId,
      },
    });

  }


  async findAll() {

    return this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

  }


  async findById(
    id: string,
  ) {

    return this.prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

  }

}
