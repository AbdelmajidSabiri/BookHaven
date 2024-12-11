import React, { useState, useEffect } from "react";


function PopularReads() {
    const [books, setBooks] = useState([]);  // State to hold books data


    useEffect(() => {
        fetch("http://localhost:5000/api/books")
            .then((response) => response.json())
            .then((data) => {
                setBooks(data);
            })
            .catch((error) => {
                console.error("Error fetching books:", error);
            });
    }, []);


    return(
        <div className="popular-reads">
            {books.map((book) => (
                <div key={book._id} className="book-card">
                    <img
                        src={book.cover}  // Display the book cover image
                        alt={book.title}
                        className="book-cover"
                    />
                    <div className="book-details">
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                        <p>{book.description}</p>
                        <p>{book.pages} pages</p>
                        <a href={book.downloadLink} download>
                            <button>Download</button>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}


export default PopularReads;