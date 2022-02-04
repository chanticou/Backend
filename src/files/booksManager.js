const fs= require('fs')

/*
book={
    id:,
    name:'',
    author:'',
    publicationDate:,
    editorial:,
    resume:
}
*/


const pathBooks = './books.json'

class booksManager{

    createBook= async (book)=>{
       
        if(!book.author || !book.name) return {status:'error', message:'missing data'}

        try{
            if(fs.existsSync(pathBooks)){
                let data = await fs.promises.readFile(pathBooks, 'utf-8', null, 3)
                let books= JSON.parse(data)
                let id= books[books.length-1].id+1
                book.id=id
                books.push(book)
                await fs.promises.writeFile(pathBooks, JSON.stringify(books,null,3)) 
                return{status:'succes', newBook: books}

            }else{
                book.id=1
                await fs.promises.writeFile(pathBooks ,JSON.stringify([book],null,3))
                return {status:'succes', message:'1 Book created'}
            }
        }catch(error){
            console.log(error)
            return {status:'error', message:'error'}
        }
    }

    showAllBooks= async()=>{
        if(fs.existsSync(pathBooks)){
            let data = await fs.promises.readFile(pathBooks, 'utf-8', null, 3)
            return {
                status:'Succes, show all books',
                message: data
            }
        }else{
            return{
            status:'error',
            message:'error show books'
            }  
        }
    }

    showBook = async (id)=>{
        if(fs.existsSync(pathBooks)){
            let data = await fs.promises.readFile(pathBooks, 'utf-8', null, 3)
            let books = JSON.parse(data)

            let searchBook=books.find(book=> book.id === id)
            console.log(searchBook)
      
        }
    }


    updateBooks= async(updateBook, id)=>{
        if(fs.existsSync(pathBooks)){
            let data = await fs.promises.readFile(pathBooks, 'utf-8', null, 3)
            let books = JSON.parse(data)

            let updateBookMap= books.map(book=>{
                if(book.id === id){
                    return {status:'succes', message:updateBook}
                }else{
                    return{status:'succes', message:books}
                }
            })

            await fs.promises.writeFile(pathBooks, JSON.stringify(updateBookMap), null, 3)
            return{status:'succes', message:'Update Book'}
            
                // let updateNewBook = await fs.promises.writeFile(pathBooks, JSON.stringify(updateBook), null,)
            
                
        }
    }

}


module.exports=booksManager;