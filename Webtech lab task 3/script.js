
let books = [];
let selectedBook = "";

function addBook() {

    let bookTitle = document.getElementById("book").value;

    if (bookTitle === "") {
        alert("Please Enter a Book Name");
        return;
    }

    if (books.length >= 3) {
        alert("You can add only 3 books");
        return;
    }

    books.push(bookTitle);
    selectedBook = bookTitle;

    let list = document.getElementById("booklist");
    list.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
        list.innerHTML += "<li>" + books[i] + "</li>";
    }

    document.getElementById("book").value = "";

    alert("Book Added Successfully");
}

function confirmBorrow() {

    if (selectedBook === "") {
        alert("Please add a book first");
        return;
    }

    let answer = confirm(
        "Do you want to borrow " + selectedBook + "?"
    );

    if (answer == true) {
        alert("You have borrowed the book: " + selectedBook);
        selectedBook = "";
    }
    else {
        alert("Borrowing Cancelled");
    }
}
