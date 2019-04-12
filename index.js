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

myLibrary.push(new Book('Dune', 'Frank Herbert', 412, false));
myLibrary.push(new Book('The Hobbit', 'J.R.R. Tolkien', 310, true));

// function addBookToLibrary(){

// }

function render(new_book){
    let list_item = document.createElement('li');
    list_item.setAttribute('class', 'book');

    let card = document.createElement('div');
    card.setAttribute('class', 'book_card');

    let title_p = document.createElement('p');
    let book_title = document.createTextNode(new_book.title);
    title_p.appendChild(book_title);

    let author_p = document.createElement('p');
    let book_author = document.createTextNode(new_book.author);
    author_p.appendChild(book_author);


    card.appendChild(title_p);
    card.appendChild(author_p);
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
    let read_radios = document.getElementsByName('has_read');
    for (let i=0; i<read_radios.length; i++){
        if (read_radios[i].checked){
            var read = read_radios[i].value;
            break;
        }
    }
    console.log(read);

    let new_book = new Book(title, author, pages, read);
    console.log(new_book);
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