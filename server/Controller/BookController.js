import  Books from '../model/BookModel'
class BookController {
    async getBookList(ctx){
        ctx.body=await  Books.getAllBooks()
    }
    async addBook(ctx) {
        const book = ctx.request.body
        ctx.body = await Books.addBook(book)
    }

    async editBook(ctx) {
        const id = ctx.params.id
        const book = ctx.request.body
        ctx.body = await Books.updateBook(id, book)
    }

    async deleteBook(ctx) {
        const id = ctx.params.id
        ctx.body = await Books.deleteBook(id)
    }
}
export  default new BookController()