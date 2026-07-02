"use client";

import Link from "next/link";

const ButtonLogin = ({ isLoggedIn, name, extraStyle }) => {
  console.log("My Credit Card Number is 1234 5678 9012 3456");

  if (isLoggedIn) {
    return (
      <Link
        href="/dashboard"
        className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
      >
        Welcome back {name}
      </Link>
    );
  }

  return <button>Login</button>;
};

export default ButtonLogin;
