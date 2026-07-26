import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma.service';

import { CreateMemberDto } from './dto/create-member.dto';


@Injectable()
export class MembersService {

  constructor(
    private prisma: PrismaService,
  ) {}


  async create(
    data: CreateMemberDto,
  ) {

    return this.prisma.member.create({
      data,
    });

  }


  async findAll(
    organizationId: string,
  ) {

    return this.prisma.member.findMany({
      where: {
        organizationId,
      },

      orderBy: {
        createdAt: 'desc',
      },
    });

  }


  async findById(
    id: string,
  ) {

    return this.prisma.member.findUnique({
      where: {
        id,
      },
    });

  }


  async update(
    id: string,
    data: Partial<CreateMemberDto>,
  ) {

    return this.prisma.member.update({
      where: {
        id,
      },

      data,
    });

  }


  async remove(
    id: string,
  ) {

    return this.prisma.member.delete({
      where: {
        id,
      },
    });

  }

}
