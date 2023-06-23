import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Book = () => {
    const { id } = useParams()
    const [book, setBook] = useState({});
    const [loaded, setLoaded] = useState(false);

    const getBook = async () => {
        const res = await fetch(`http://localhost:3000/book/${id}`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "GET",
        });
        const data = await res.json();
        setBook(data);
        setLoaded(true);
    }

    useEffect(() => {
        getBook();
        console.log(book.result)
    }, [])

    if (!loaded)
        return (
            <>
                <p>Loading book...</p>
            </>
        )

    return (
        <>
        
            <div className='card'>
                <div class="card-image">
                    <figure class="image">
                        <img src={book.result[0].image} alt="Placeholder image" />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src={book.result[0].image} alt="Placeholder image" />
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">{book.result[0].name}</p>
                            <p class="subtitle is-6">{book.result[0].age}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Book;