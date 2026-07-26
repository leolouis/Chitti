import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma.service';

import { CreateOrganizationDto } from './dto/create-organization.dto';


@Injectable()
export class OrganizationsService {

  constructor(
    private readonly prisma: PrismaService,
  ) {}


  async create(
    data: CreateOrganizationDto,
  ) {

    const existingOrganization =
      await this.prisma.organization.findFirst({
        where: {
          OR: [
            {
              email: data.email,
            },
            {
              phone: data.phone,
            },
          ],
        },
      });


    if (existingOrganization) {
      throw new ConflictException(
        'Organization already exists',
      );
    }


    return this.prisma.organization.create({
      data,

      select: {
        id: true,
        name: true,
        phone: true,
        email: true,
        address: true,
        createdAt: true,
      },
    });

  }


  async findAll() {

    return this.prisma.organization.findMany({

      select: {
        id: true,
        name: true,
        phone: true,
        email: true,
        address: true,

        _count: {
          select: {
            users: true,
            members: true,
            groups: true,
          },
        },

        createdAt: true,
      },

    });

  }


  async findById(
    id: string,
  ) {

    const organization =
      await this.prisma.organization.findUnique({

        where: {
          id,
        },

        select: {
          id: true,
          name: true,
          phone: true,
          email: true,
          address: true,

          _count: {
            select: {
              users: true,
              members: true,
              groups: true,
            },
          },

          createdAt: true,
          updatedAt: true,
        },

      });


    if (!organization) {
      throw new NotFoundException(
        'Organization not found',
      );
    }


    return organization;

  }

}
