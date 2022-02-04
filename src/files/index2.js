const booksManager = require('./booksManager')


const bookObj = new booksManager()


let book = {
    id:'',
    name: 'One education',
    author:'Tara Westover',
    publicationDate: '15/6/2022',
    editorial: 'Lumen',
    resume:'lorem jahdlkNKDBA DJAHDJAHD jjdkhs jagdjsf jadhkanfa  hdagdjabjfbj'
}


bookObj.createBook(book).then(result=>console.log(result))

// bookObj.showBook(1).then(result=>console.log(result))

// bookObj.updateBooks(1, book).then(result=>console.log(result))