import {
  IsEmail,
  IsOptional,
  IsString,
} from 'class-validator';


export class CreateMemberDto {

  @IsString()
  name: string;


  @IsString()
  phone: string;


  @IsOptional()
  @IsEmail()
  email?: string;


  @IsOptional()
  @IsString()
  address?: string;


  @IsString()
  organizationId: string;

}
