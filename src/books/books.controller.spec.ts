import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { UpdateResult } from 'typeorm';

describe('BooksController', () => {
  let controller: BooksController;
  let booksService: BooksService;

  const createBookDto: CreateBookDto = {
    title: 'BeerTech Africa',
    author: 'Beer Brothers',
    description: 'The story of BeerTech Africa',
  }

  const updateBookDto: UpdateBookDto = {
    title: 'BeerTech Africas',
    author: 'Beer Brothers',
    description: 'The story of BeerTech Africa',
  }

  const book = {
    id: 2,
    title: 'BeerTech Africa',
    author: 'Beer Brothers',
    description: 'The story of BeerTech Africa',
    dateAdded: new Date(),
    dateUpdated: new Date(),
  } as Book;

  const mockBooksService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [
        BooksService,
        {
          provide: BooksService,
          useValue: mockBooksService,
        },
      ],
    }).compile();

    controller = module.get<BooksController>(BooksController);
    booksService = module.get<BooksService>(BooksService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('create => should create a new book and return it', async () => {

      jest.spyOn(booksService, 'create').mockReturnValue(book as any);

      const result = await controller.create(createBookDto);

      expect(booksService.create).toHaveBeenCalled();
      expect(booksService.create).toHaveBeenCalledWith(createBookDto);

      expect(result).toEqual(book);
    });
  });

  describe('findOne', () => {
    it('find one book and return it', async () => {
      const oneBook = book;
      jest.spyOn(booksService, 'findOne').mockImplementation(async () => await oneBook);

      const result = await controller.findOne('7');

      expect(booksService.findOne).toHaveBeenCalled();
      expect(booksService.findOne).toHaveBeenCalledWith(7);

      expect(result).toEqual(oneBook);
    });
  });

  describe('findAll', () => {
    it('find all books and return them', async () => {
      const result = [book];
      jest.spyOn(booksService, 'findAll').mockImplementation(async () => await result);

      const allBooks = await controller.findAll();

      expect(booksService.findAll).toHaveBeenCalled();
      expect(booksService.findAll).toHaveBeenCalledWith();

      expect(allBooks).toEqual(result);
    });
  });

  describe('update', () => {
    it('update one book', async () => {
      const result: UpdateResult = {
        generatedMaps: [],
        raw: [],
        affected: 1
      }

      jest.spyOn(booksService, 'update').mockImplementation(async () => await result);

      const updateResult = await controller.update(book.id.toString(), updateBookDto);

      expect(booksService.update).toHaveBeenCalled();
      expect(booksService.update).toHaveBeenCalledWith(book.id, updateBookDto);

      expect(updateResult).toEqual(result);
    });
  });

  describe('delete', () => {
    it('delete one book', async () => {
      const oneBook = book;
      jest.spyOn(booksService, 'delete').mockImplementation(async () => await oneBook);

      const result = await controller.delete(book.id.toString());

      expect(booksService.delete).toHaveBeenCalled();
      expect(booksService.delete).toHaveBeenCalledWith(book.id);

      expect(result).toEqual(oneBook);
    });
  });
});
