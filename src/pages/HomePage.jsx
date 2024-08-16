import React from "react";
import Container from "../container/Container";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold">
          Welcome to the simple POS for small buiness
        </h1>
        <p>
          Labore tempor ipsum duis ea exercitation laboris laborum mollit qui
          exercitation.
        </p>
        <p>If you have an issue, call 443-444-xxxx anytimes</p>
        <Link
          to="/pos"
          className="bg-blue-950 w-[250px] text-center text-white p-3 rounded-lg hover:bg-blue-900"
        >
          Click here to sell products
        </Link>
      </div>
    </Container>
  );
};

export default HomePage;
