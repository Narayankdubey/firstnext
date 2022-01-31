import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <div className="nav-container">
        <ul>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </div>
      <style jsx>
        {`
          .nav-container {
            background-color: pink;
          }
          ul {
            margin: 0px;
            padding: 5px;
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
          li {
            list-style: none;
            margin: 10px;
            padding: 10px;
            color: black;
            transition: 1s ease-out;
            box-size: border-box;
          }
          li:hover {
            color: blue;
            border-bottom: 2px solid blue;
          }
        `}
      </style>
    </>
  );
};

export default NavBar;
