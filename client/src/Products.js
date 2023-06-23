import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Box from "./Box";

const Products = () => {
  const [books, setBooks] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getBooks = async () => {
    const res = await fetch("http://localhost:3000/book", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await res.json();
    setBooks(data);
    setLoaded(true);
  };

  useEffect(() => {
    getBooks();
  }, []);

  if (!loaded) {
    return (
      <>
        <p>Books are loading...</p>
      </>
    );
  }
  return (
    <>
      

      {books.result.map((book) => (
        <Box id={book.id} name={book.name} author={book.author} publisher={book.publisher} price={book.price} language={book.language} image={book.image}/>
      ))}
      
      
    </>
  );
};

export default Products;
