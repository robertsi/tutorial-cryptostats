import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserRequest {

  constructor(){
    this.email = "";
    this.password  = "";
  }
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
