import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";

@Controller("book")
export class BookController {
  public bookService: BookService = new BookService();
  //addbook
  @Post("/add")
  addBook(): string {
    return this.bookService.addBook();
  }
  // delete book
  @Delete("/delete")
  deleteBook(): string {
    return this.bookService.deleteBook();
  }
  // update book
  @Put("/update")
  updateBook(): string {
    return this.bookService.updateBook();
  }
  //find all book
  @Get("/findAll")
  findOne(): string {
    return this.bookService.findBooks();
  }
}
