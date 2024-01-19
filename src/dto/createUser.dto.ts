import { IsString } from 'class-validator';

export class createUserDto {
  @IsString()
  name: string;
  @IsString()
  surname: string;
}
