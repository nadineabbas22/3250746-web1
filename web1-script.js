// Search for books

const searchInput = document.getElementById("searchInput");

const bookCards = document.querySelectorAll(".book-card");

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();

    bookCards.forEach(function (card) {

        const bookName = card

            .querySelector("h3")

            .textContent

            .toLowerCase();

        const author = card

            .querySelector(".author")

            .textContent

            .toLowerCase();

        if (

            bookName.includes(searchText) ||

            author.includes(searchText)

        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }
