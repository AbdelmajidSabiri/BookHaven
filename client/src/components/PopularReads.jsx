import React, { useState, useEffect } from "react";

function PopularReads() {
    const [books, setBooks] = useState([]);

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

    return (
        <div className="popular-reads">
            {books.map((book) => (
                <div
                    key={book._id}
                    className="book-card"
                >
                    <img
                        src={book.cover}
                        alt={book.title}
                        className="book-cover"
                    />
                    <div className="book-details">
                        <p className="titleBook">
                            <p>{book.author}</p>
                            <h3>{book.title}</h3>
                        </p>

                        <p>{book.description}</p>
                        <div className="divider"></div>
                        <div className="pages-size">
                            <div className="download-infos">
                                <div className="icon">
                                    <img src="/pages.png" alt="Pages" />
                                    <span>{book.pages} Pages</span>
                                </div>
                                <div className="icon">
                                    <img src="/size.png" alt="Size" />
                                    <span>{book.size}</span>
                                </div>
                            </div>
                            
                            <div className="download-section">
                                <a href={book.downloadLink} download>
                                    <img src="download.png" alt="Download" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
}

export default PopularReads;
