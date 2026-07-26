import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma.service';

import { CreateOrganizationDto } from './dto/create-organization.dto';


@Injectable()
export class OrganizationsService {

  constructor(
    private prisma: PrismaService,
  ) {}


  async create(
    data: CreateOrganizationDto,
  ) {

    return this.prisma.organization.create({
      data,
    });

  }


  async findAll() {

    return this.prisma.organization.findMany({
      include: {
        users: true,
      },
    });

  }


  async findById(
    id: string,
  ) {

    return this.prisma.organization.findUnique({
      where: {
        id,
      },
    });

  }

}
