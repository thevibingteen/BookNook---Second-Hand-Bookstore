// Sample book data
const books = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 12.99,
        condition: "Good",
        category: "Fiction"
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        price: 10.50,
        condition: "Very Good",
        category: "Fiction"
    },
    {
        id: 3,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 9.99,
        condition: "Good",
        category: "Fiction"
    },
    {
        id: 4,
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        price: 15.75,
        condition: "Excellent",
        category: "Science"
    },
    {
        id: 5,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        price: 14.25,
        condition: "Very Good",
        category: "History"
    },
    {
        id: 6,
        title: "The Diary of a Young Girl",
        author: "Anne Frank",
        price: 11.50,
        condition: "Good",
        category: "Biography"
    }
];

// DOM Elements
const booksGrid = document.querySelector('.books-grid');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Display books
function displayBooks() {
    booksGrid.innerHTML = '';
    
    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        
        bookCard.innerHTML = `
            <div class="book-image">
                Book Cover
            </div>
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">by ${book.author}</p>
                <p class="book-price">$${book.price}</p>
                <p class="book-condition">Condition: ${book.condition}</p>
                <button class="buy-btn" data-id="${book.id}">Add to Cart</button>
            </div>
        `;
        
        booksGrid.appendChild(bookCard);
    });
    
    // Add event listeners to buy buttons
    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const bookId = this.getAttribute('data-id');
            addToCart(bookId);
        });
    });
}

// Add to cart functionality
function addToCart(bookId) {
    const book = books.find(b => b.id == bookId);
    if (book) {
        alert(`Added "${book.title}" to your cart!`);
        // In the full version, we would update a cart object and UI
    }
}

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayBooks();
});