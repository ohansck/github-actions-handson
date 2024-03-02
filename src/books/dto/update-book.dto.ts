import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { IsString, IsOptional } from 'class-validator';

export class UpdateBookDto extends PartialType(CreateBookDto) {
    @IsString()
    title?: string;

    @IsString()
    author?: string;

    @IsString()
    @IsOptional()
    description?: string;
}
