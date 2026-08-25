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

        }  });

});

// Filter books by category

const categoryButtons =

    document.querySelectorAll(".category-btn");

categoryButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedCategory =

            button.getAttribute("data-category");

        // Change active button

        categoryButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        // Filter cards

        bookCards.forEach(function (card) {

            const cardCategory =

                card.getAttribute("data-category");

            if (

                selectedCategory === "all" ||

                cardCategory === selectedCategory

            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});

// Borrow Books

const borrowButtons =

    document.querySelectorAll(".borrow-btn");

const borrowedCount =

    document.getElementById("borrowedCount");

let borrowedBooks = 0;

borrowButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        if (button.textContent === "Borrow") {

            borrowedBooks++;

            button.textContent = "Borrowed";

            button.style.backgroundColor = "#777";
                }else{            borrowedBooks--;

            button.textContent = "Borrow";

            button.style.backgroundColor = "#5b4636";

        }

        borrowedCount.textContent = borrowedBooks;

    });

});

// Favorite Books

const favoriteButtons =

    document.querySelectorAll(".favorite-btn");

favoriteButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.classList.toggle("favorite");

        if (button.textContent === "♡") {

            button.textContent = "♥️";

        } else {

            button.textContent = "♡";

        }

    });

});

// Dark Mode

const darkModeBtn =

    document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        darkModeBtn.textContent = "☀️";

    } else {
