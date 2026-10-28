
let studentName = localStorage.getItem("studentName");
let bookCount = Number(localStorage.getItem("bookCount"));

let receipt = document.getElementById("receipt");

receipt.innerHTML = "";

receipt.innerHTML += "<p>Name: " + studentName + "</p>";
receipt.innerHTML += "<p>Books:</p>";

for (let i = 0; i < bookCount; i++) {

    let book = localStorage.getItem("book" + i);

    receipt.innerHTML += "<p>" + book + "</p>";
}

let totalDeposit = bookCount * 200;

receipt.innerHTML += "<p>Total Deposit: " + totalDeposit + " Taka</p>";

function goBack() {
    window.location.href = "index.html";
}
