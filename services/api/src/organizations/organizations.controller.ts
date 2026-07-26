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
    private organizationsService: OrganizationsService,
  ) {}


  @Post()
  create(
    @Body() body: CreateOrganizationDto,
  ) {

    return this.organizationsService.create(body);

  }


  @Get()
  findAll() {

    return this.organizationsService.findAll();

  }


  @Get(':id')
  findOne(
    @Param('id') id: string,
  ) {

    return this.organizationsService.findById(id);

  }

}
