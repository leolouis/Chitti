import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';

import * as bcrypt from 'bcrypt';

import { PrismaService } from '../prisma.service';

import { CreateUserDto } from './dto/create-user.dto';


@Injectable()
export class UsersService {

  constructor(
    private readonly prisma: PrismaService,
  ) {}


  async create(
    data: CreateUserDto,
  ) {

    const existingUser =
      await this.prisma.user.findUnique({
        where: {
          email: data.email,
        },
      });


    if (existingUser) {
      throw new ConflictException(
        'Email already registered',
      );
    }


    const organization =
      await this.prisma.organization.findUnique({
        where: {
          id: data.organizationId,
        },
      });


    if (!organization) {
      throw new NotFoundException(
        'Organization not found',
      );
    }


    const passwordHash =
      await bcrypt.hash(
        data.password,
        12,
      );


    const user =
      await this.prisma.user.create({
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          passwordHash,
          role: data.role,
          organizationId: data.organizationId,
        },

        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
          role: true,
          organizationId: true,
          createdAt: true,
        },
      });


    return user;
  }


  async findAll() {

    return this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        organizationId: true,
        createdAt: true,
      },
    });

  }


  async findById(
    id: string,
  ) {

    const user =
      await this.prisma.user.findUnique({
        where: {
          id,
        },

        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
          role: true,
          organizationId: true,
          createdAt: true,
        },
      });


    if (!user) {
      throw new NotFoundException(
        'User not found',
      );
    }


    return user;

  }

}
