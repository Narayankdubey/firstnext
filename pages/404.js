import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const ErrorPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);

  const handleButton = () => {
    router.push("/");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "500px",
        textAlign: "center",
      }}
    >
      <h1>Page not found</h1>
      <Link
        href="/"
        style={{
          width: "15%",
          padding: "15px",
          border: "1px solid red",
          borderRadius: "10px",
        }}
      >
        back to homepage
      </Link>
      <button onClick={handleButton}>back</button>
    </div>
  );
};

export default ErrorPage;
