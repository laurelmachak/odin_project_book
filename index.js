function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function(){
    return this.title;
}

function addElement(tag_name,content,parent_id){
    var newElement = document.createElement(tag_name);
    var newContent = document.createTextNode(content);
    newElement.appendChild(newContent);

    var parentElement = document.getElementById(parent_id);
    parentElement.appendChild(newElement);
}

let myLibrary = [];

myLibrary.push(new Book('Dune', 'Frank Herbert', 412, "no"));
myLibrary.push(new Book('The Hobbit', 'J.R.R. Tolkien', 310, "yes"));

// function addBookToLibrary(){

// }

function render(new_book){
    let list_item = document.createElement('li');
    list_item.setAttribute('class', 'book');

    let card = document.createElement('div');
    card.setAttribute('class', 'book_card');

    let book_title = document.createTextNode(new_book.title);
    card.appendChild(book_title);

    list_item.appendChild(card);

    let library = document.getElementById('books');
    library.appendChild(list_item);
}

render(myLibrary[0]);


let add_button = document.getElementById('add_book_btn');

add_button.addEventListener('click', () => {
    let title = document.getElementById("title").value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let new_book = new Book(title, author, pages, "no");
    render(new_book);
})


// for (let i=0; i<myLibrary.length; i++){
//     var newListItem = document.createElement('li');
//     newListItem.setAttribute("class","book");

//     var newDiv = document.createElement('div');
//     newDiv.setAttribute("class","book_card");
//     var book_title = document.createTextNode(myLibrary[i].title);
//     newDiv.appendChild(book_title);

//     newListItem.appendChild(newDiv);
//     var parentElement = document.getElementById("books");
//     parentElement.appendChild(newListItem);
// }