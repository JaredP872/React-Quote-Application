// import React, { useState, useEffect } from "react";
import { useState, useEffect } from "react";

// Import CSS for styling
import "./QuoteDisplay.css";

// Define the QuoteDisplay component
const QuoteDisplay = () => {
  const [quote, setQuote] = useState("");
  const [error, setError] = useState(null);

  // Define a function to fetch a random quote
  const fetchQuote = async () => {
    // Try to fetch a random quote
    try {
      // Clear any previous errors
      setError(null);

      // Append a timestamp to force a fresh request
      const response = await fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          "https://zenquotes.io/api/random"
        )}&timestamp=${new Date().getTime()}`
      );

      // Check if the response is not OK
      if (!response.ok) {
        // Throw an error if the response is not OK
        throw new Error("Failed to fetch quote");
      }

      // Parse the JSON data from the response
      const data = await response.json();
      const parsedData = JSON.parse(data.contents);

      // Set the quote state to the quote from the parsed data
      setQuote(parsedData[0].q);
    } catch (err) {
      // Set the error state to the error message
      setError(err.message);
    }
  };
  // Fetch a quote on component mount
  useEffect(() => {
    fetchQuote();
  }, []);

  // this is the JSX that will be rendered by the QuoteDisplay component
  return (
    // this div contains the quote and button elements
    <div className="quote-container">
      {/* this h2 element contains the title of the app */}
      <h2>Random Quote Generator</h2>

      {/* this ternary operator checks if there is an error and displays an error message if there is */}
      {error ? (
        <p className="error">Error: {error}</p>
      ) : (
        // this blockquote element displays the quote if there is no error
        <blockquote className="quote">"{quote}"</blockquote>
      )}

      {/* this button element calls the fetchQuote function when clicked */}
      <button onClick={fetchQuote}>Get New Quote</button>
    </div>
  );
};

// Export the QuoteDisplay component
export default QuoteDisplay;
