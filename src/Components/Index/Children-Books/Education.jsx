import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropsCardComponents from "../Card";
import { config } from "../../../utils/config";
import { profileStore } from "../../../store/Pfile_store";

const Fitness = ({ showAll, setShowAll }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addingBookId, setAddingBookId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${config.base_url_api}books`)
      .then((res) => res.json())
      .then((data) => {
        const animeBooks = data.books.filter(
          (book) => book.category?.name?.toLowerCase() === "novel" && book.status === "approved"
        );
        setBooks(animeBooks);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
        setLoading(false);
      });
  }, []);

  const displayedBooks = showAll ? books : books.slice(0, 8);

  const handleCardClick = (bookId) => {
    navigate(`/book-details/${bookId}`);
  };

  const handleAddToCart = async (e, bookId) => {
    e.stopPropagation();

    const token = profileStore.getState().access_token;
    if (!token) {
      alert("You must be logged in to add items to your cart.");
      navigate("/login");
      return;
    }

    try {
      setAddingBookId(bookId);
      const response = await fetch(`${config.base_url_api}cart/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          book_id: bookId,
          quantity: 1,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Book added to cart!");
      } else {
        alert(data.message || "Failed to add to cart.");
      }
    } catch (error) {
      console.error("Add to cart failed:", error);
      alert("Something went wrong.");
    } finally {
      setAddingBookId(null);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-start">
        <div className="mb-4 text-start">
          <h1 className="text-2xl font-bold">Educational Books</h1>
          <p>Explore our collection of anime-related books.</p>
        </div>
        {books.length > 8 && (
          <div className="text-center mt-4">
            <button
              onClick={() => setShowAll(!showAll)}
              className="border border-black py-2 px-4 rounded hover:bg-gray-500 hover:text-white transition"
            >
              {showAll ? "Show Less" : `View All (${books.length})`}
            </button>
          </div>
        )}
      </div>

      {books.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          No anime books available at the moment.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {displayedBooks.map((book) => (
            <div
              key={book.id}
              onClick={() => handleCardClick(book.id)}
              className="cursor-pointer hover:shadow-lg transition-shadow duration-300"
            >
              <PropsCardComponents
                id={book.id}
                imageSrc={`${config.book_image_path}${book.cover_image}`}
                title={book.name}
                director={book.author}
                genre={book.category?.name || "Unknown"}
                price={book.price}
                onAddToCart={(e) => handleAddToCart(e, book.id)}
                isAdding={addingBookId === book.id}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Fitness;
