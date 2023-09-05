import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller("book")
export class BookController {
  //addbook
  @Post("/add")
  addBook(): string {
    return "this will add book";
  }
  // delete book
  @Delete("/delete")
  deleteBook(): string {
    return "this will delete book";
  }
  // update book
  @Put("/update")
  updateBook(): string {
    return "this will update book";
  }
  //find all book
  @Get("/findAll")
  findOne(): string {
    return "this will find book";
  }
  @Get("/findBookById/:bookId")
  findAllBook(@Param() params): string {
    console.log(params.bookId);
    return `this will find A book of id ${params.bookId}`;
  }
}
