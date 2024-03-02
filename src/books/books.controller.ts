import { Controller, Get, Post, Body, Put, Param, Delete, ValidationPipe, UsePipes } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { UpdateResult } from 'typeorm';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) { }

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.booksService.create(createBookDto);
  }

  @Get()
  findAll(): Promise<Book[] | null> {
    return this.booksService.findAll();
  }

  @Get(':id')
  @UsePipes(ValidationPipe)
  findOne(@Param('id') id: string): Promise<Book> {
    return this.booksService.findOne(+id);
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto): Promise<UpdateResult> {
    return this.booksService.update(+id, updateBookDto);
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  delete(@Param('id') id: string) {
    return this.booksService.delete(+id);
  }
}
