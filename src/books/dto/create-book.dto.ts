import { IsString, IsOptional } from "class-validator";

export class CreateBookDto {

    @IsString()
    title: string;

    @IsString()
    author: string;

    @IsString()
    description: string;
}
