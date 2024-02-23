import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const Component3 = () => {
  const [seconds, setSeconds] = useState();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    let interval = null;

    if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
      fetchProducts();
    }

    return () => clearInterval(interval);
  }, [seconds]);

  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response, "response");
    setProducts(response.data);
  };

  const handleInputChange = (event) => {
    setSeconds(event.target.value);
  };

  const startCountdown = () => {
    setSeconds(parseInt(seconds));
  };

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2>Enter Seconds for Countdown</h2>
      <input type="number" value={seconds} onChange={handleInputChange} />
      <button onClick={startCountdown}>Start Countdown</button>
      {seconds > 0 && <h3>Countdown: {seconds}</h3>}

      <div>
        {currentItems.map((product) => (
          <form
            key={product.id}
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div className="row">
              <div className="col">
                <label
                  htmlFor={`category_${product.id}`}
                  className="form-label"
                >
                  Category:
                </label>
                <input
                  type="text"
                  id={`category_${product.id}`}
                  name="category"
                  value={product.category}
                  className="form-control"
                />
              </div>
              <div className="col">
                <label>Description:</label>
                <textarea
                  id={`description_${product.id}`}
                  name="description"
                  value={product.description}
                  className="form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor={`id_${product.id}`} className="form-label">
                  ID:
                </label>
                <input
                  type="text"
                  id={`id_${product.id}`}
                  name="id"
                  value={product.id}
                  className="form-control"
                />
              </div>
              <div className="col">
                <label htmlFor={`image_${product.id}`} className="form-label">
                  Image URL:
                </label>
                <input
                  type="text"
                  id={`image_${product.id}`}
                  name="image"
                  value={product.image}
                  className="form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor={`price_${product.id}`} className="form-label">
                  Price:
                </label>
                <input
                  type="text"
                  id={`price_${product.id}`}
                  name="price"
                  value={product.price}
                  className="form-control"
                />
              </div>
              <div className="col">
                <label htmlFor={`rating_${product.id}`} className="form-label">
                  Rating:
                </label>
                <input
                  type="text"
                  id={`rating_${product.id}`}
                  name="rating"
                  value={product.rating.rate}
                  className="form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label
                  htmlFor={`ratingCount_${product.id}`}
                  className="form-label"
                >
                  Rating Count:
                </label>
                <input
                  type="text"
                  id={`ratingCount_${product.id}`}
                  name="ratingCount"
                  value={product.rating.count}
                  className="form-control"
                />
              </div>
              <div className="col">
                <label htmlFor={`title_${product.id}`} className="form-label">
                  Title:
                </label>
                <input
                  type="text"
                  id={`title_${product.id}`}
                  name="title"
                  value={product.title}
                  className="form-control"
                />
              </div>
            </div>
          </form>
        ))}
      </div>

      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={products.length}
        paginate={paginate}
      />
    </div>
  );
};

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav style={{ display: "flex", justifyContent: "center" }}>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Component3;
