//Book Class: Represents a Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Tasks
class UI {
    static displayBooks() {
        const books = Store.getBook();

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {

        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a herf="#" class="btn btn-danger btn-sm delete">X</a></td>`;

        list.appendChild(row);
    }

    static deleteBook(el) {
        if(el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        };
    }

    static showAlert(message, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        // Vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

    static clearFields(){
        document.querySelector('#title').value='';
        document.querySelector('#Author').value='';
        document.querySelector('#isbn').value='';
    }

}

//Store Class: Handle Storage
class Store{
    static getBook(){
        let books;
        if(localStorage.getItem('books') === null){
            books=[];
        } else{
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBook(book){
        const books = Store.getBook();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn){
        const books = Store.getBook();
        books.forEach((book, index) => {
        if (book.isbn === isbn){
            books.splice(index, 1);
        };
        });
        localStorage.setItem('books', JSON.stringify(books));
    } 
}
// Event: Display a Book

document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Remove a Book

document.querySelector('#book-list').addEventListener('click', (e) =>
{
    // Delete a Book
    UI.deleteBook(e.target);

    // Remove Book form the store
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // show success alert
    UI.showAlert('Book removed', 'success');
});

// Event: Add a Book

document.querySelector('#book-form').addEventListener('submit', (e) => 
{
    // prevent actuall submit
    e.preventDefault();

    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // Validation
    if(title === '' || author === '' || isbn === ''){
        UI.showAlert('please fill in all fields !', 'danger');
    }else{
        // instialiate Book
         const book = new Book(title, author, isbn);

        // add book to list
        UI.addBookToList(book);

        // add book to store
        Store.addBook(book);

        // show sucess alert
        UI.showAlert('Book Added', 'success');

        // Clear fields
        UI.clearFields();
    }
} 
);

