import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';

import { OrganizationsService } from './organizations.service';

import { CreateOrganizationDto } from './dto/create-organization.dto';


@Controller('organizations')
export class OrganizationsController {

  constructor(
    private readonly organizationsService: OrganizationsService,
  ) {}


  @Post()
  async create(
    @Body() body: CreateOrganizationDto,
  ) {
    return this.organizationsService.create(body);
  }


  @Get()
  async findAll() {
    return this.organizationsService.findAll();
  }


  @Get(':id')
  async findOne(
    @Param('id') id: string,
  ) {
    return this.organizationsService.findById(id);
  }

}
