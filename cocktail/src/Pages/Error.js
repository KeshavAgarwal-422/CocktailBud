import React from "react";

import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <section className="error-container">
        <h2>Oops! It's a Dead End...</h2>

        <button>
          <Link to="/">Go Back</Link>
        </button>
      </section>
    </>
  );
};
export default Error;
