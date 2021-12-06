import "./styles.css";
import "./styles.css";
import { useState } from "react";
const bookDB = {
  Food: [
    { name: "From Crook to Cook", rating: "4.5/5" },
    { name: "Taste my Life through Food ", rating: "3.5/5" },
    { name: "The man who ate too much", rating: "3/5" }
  ],

  Travel: [
    {
      name: "WanderLust",
      rating: "5/5"
    },
    {
      name: "Unforgettable Journeys",
      rating: "4.5/5"
    },
    { name: "The Bucket List", rating: "3.5/5" }
  ],
  Entertainment: [
    {
      name: "On Borrowed Fame",
      rating: "4.5/5"
    },
    {
      name: "The Wrap covering Hollywood",
      rating: "3/5"
    },
    {
      name: "History of Buffalo Music and Entertainment",
      rating: "3/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Food");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📚 GoodBooks </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Want some book recommendations. Here we go{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "2px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
