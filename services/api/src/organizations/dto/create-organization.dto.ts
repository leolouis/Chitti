import {
  IsEmail,
  IsOptional,
  IsString,
} from 'class-validator';


export class CreateOrganizationDto {

  @IsString()
  name: string;


  @IsOptional()
  @IsString()
  phone?: string;


  @IsOptional()
  @IsEmail()
  email?: string;


  @IsOptional()
  @IsString()
  address?: string;

}
