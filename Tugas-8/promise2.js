var readBooksPromise = require('./promise.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 }
]

function readBooks(books) {
    var i = 0
    readBooksPromise(10000, books[i]).then(function read(times) {
        if (times > 0) {
            i+=1
            if(books.length > i){
                readBooksPromise(times, books[i]).then(read).catch(function(){
                    return
                })
            }
        }
    })
}

readBooks(books);