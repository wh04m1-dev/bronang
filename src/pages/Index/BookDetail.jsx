import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import A from '../../Components/Index/Fiction/Adventure';
import { request } from '../../utils/request';
import { config } from '../../utils/config';
import { profileStore } from '../../store/Pfile_store';

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');
  const [addingToCart, setAddingToCart] = useState(false);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        setLoading(true);
        const response = await request(`books/${id}`, 'get');
        if (!response?.book) {
          throw new Error('Book not found');
        }
        setBook(response.book);
      } catch (error) {
        console.error('Error fetching book:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleAddToCart = async () => {
    const token = profileStore.getState().access_token;

    if (!token) {
      alert("You must be logged in to add items to your cart.");
      navigate("/login");
      return;
    }

    try {
      setAddingToCart(true);

      const response = await fetch(`${config.base_url_api}cart/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          book_id: book.id,
          quantity: quantity,
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
      setAddingToCart(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="p-6 mt-10 flex justify-center">
        <p>Book not found</p>
      </div>
    );
  }

  const totalPrice = quantity * parseFloat(book.price);

  return (
    <>
      <div className="p-6 mt-10 flex flex-row">
        {/* Book Info */}
        <div className="flex ml-32 flex-col w-[500px] items-start mb-4">
          <div className="text-gray-600 mb-2">
            <Link to="/fiction" className="hover:underline">Category</Link>{' '}
            &gt;{' '}
            <Link to="/fiction" className="hover:underline">Fiction</Link>{' '}
            &gt;{' '}
            <Link to="#" className="hover:underline">{book.category?.name || 'Unknown'}</Link>
          </div>

          <h1 className="text-3xl font-bold mb-2">{book.name}</h1>
          <span className="text-xl font-bold mb-4 block">${parseFloat(book.price).toFixed(2)}</span>

          {/* Tabs */}
          <div className="flex mb-4">
            {['details', 'shipping', 'returns'].map((tab) => (
              <button
                key={tab}
                type="button"
                className={`mr-4 cursor-pointer ${activeTab === tab ? 'font-bold border-b-2 border-black' : ''}`}
                onClick={() => handleTabChange(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="text-gray-700">
            {activeTab === 'details' && (
              <p>{book.description || 'No description available'}</p>
            )}
            {activeTab === 'shipping' && (
              <p>
                Shipping information goes here. This can include details about shipping methods,
                costs, and estimated delivery times.
              </p>
            )}
            {activeTab === 'returns' && (
              <p>
                Return policy information goes here. This can include details on how to return
                items, timeframes, and conditions for returns.
              </p>
            )}
          </div>
        </div>

        {/* Book Cover */}
        <div className="flex justify-center ml-10 mb-4">
          <img
            src={book.cover_image.startsWith('http') ? book.cover_image : `${config.book_image_path}${book.cover_image}`}
            alt={`${book.name} book cover`}
            className="w-40 h-auto"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/300x450?text=No+Cover';
            }}
          />
        </div>

        {/* Cart Interaction */}
        <div className="flex ml-20 flex-col">
          <div className="flex items-center mb-4">
            <span className="font-semibold mr-2">Quantity:</span>
            <button
              type="button"
              onClick={() => handleQuantityChange(-1)}
              disabled={quantity <= 1}
              className="border p-1"
            >
              -
            </button>
            <span className="mx-2">{quantity}</span>
            <button
              type="button"
              onClick={() => handleQuantityChange(1)}
              className="border p-1"
            >
              +
            </button>
          </div>
          <span className="font-semibold">Total: ${totalPrice.toFixed(2)}</span>

          <div className="flex items-center flex-col">
            {/* ✅ Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="bg-[#102249] mt-10 w-80 text-white px-4 py-2 hover:bg-[#102259] transition mr-2"
              type="button"
              disabled={addingToCart}
            >
              {addingToCart ? "Adding..." : "Add to Cart"}
            </button>

            {/* 🛒 Buy Now - Optional future feature */}
                      <button
              onClick={async () => {
                await handleAddToCart(); // Add to cart
                navigate("/checkout");       
              }}
              className="border border-black mt-6 w-80 text-black px-4 py-2 hover:bg-[#102249] hover:text-white transition"
              type="button"
              disabled={addingToCart}
            >
              Buy Now
            </button>

          </div>
        </div>
      </div>

      {/* Additional Component */}
      <A />
    </>
  );
};

export default BookDetail;
