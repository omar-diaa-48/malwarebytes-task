
import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDriverDto {
	@IsString()
	@IsNotEmpty()
	username: string;
}

export class UpdateDriverDto extends PartialType(CreateDriverDto) { }