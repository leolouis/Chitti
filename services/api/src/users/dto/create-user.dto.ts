import {
  IsEmail,
  IsEnum,
  IsString,
  MinLength,
} from 'class-validator';


export enum UserRole {
  OWNER = 'OWNER',
  ADMIN = 'ADMIN',
  STAFF = 'STAFF',
  MEMBER = 'MEMBER',
}


export class CreateUserDto {

  @IsString()
  name: string;


  @IsEmail()
  email: string;


  @IsString()
  @MinLength(8)
  password: string;


  @IsEnum(UserRole)
  role: UserRole;


  @IsString()
  organizationId: string;

}
