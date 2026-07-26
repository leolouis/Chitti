import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { MembersService } from './members.service';

import { CreateMemberDto } from './dto/create-member.dto';


@Controller('members')
export class MembersController {

  constructor(
    private membersService: MembersService,
  ) {}


  @Post()
  create(
    @Body() body: CreateMemberDto,
  ) {

    return this.membersService.create(body);

  }


  @Get()
  findAll(
    @Query('organizationId') organizationId: string,
  ) {

    return this.membersService.findAll(
      organizationId,
    );

  }


  @Get(':id')
  findOne(
    @Param('id') id: string,
  ) {

    return this.membersService.findById(id);

  }


  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() body: Partial<CreateMemberDto>,
  ) {

    return this.membersService.update(
      id,
      body,
    );

  }


  @Delete(':id')
  remove(
    @Param('id') id: string,
  ) {

    return this.membersService.remove(id);

  }

}
