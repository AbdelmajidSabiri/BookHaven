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
                        src={book.coverImageUrl}
                        alt={book.title}
                        className="book-cover"
                    />
                    <div className="book-details">
                        <div className="titleBook">
                            <p>{book.author}</p>
                            <h3>{book.title}</h3>
                        </div>

                        <p>{book.subtitle}</p>
                        <div className="divider"></div>
                        <div className="pages-size">
                            <div className="download-infos">
                                <div className="icon">
                                    <img src="/pages.png" alt="Pages" />
                                    <span>{book.pageCount} Pages</span>
                                </div>
                                <div className="icon">
                                    <img src="/size.png" alt="Size" />
                                    <span>{book.fileSize} Mb</span>
                                </div>
                            </div>
                            
                            <div className="download-section">
                                <a href={book.fileUrl} download>
                                    <img src="/download.png" alt="Download" />
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