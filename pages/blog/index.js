import Link from "next/link";
import React from "react";
import NavBar from "../../components/NavBar";
import styles from "../../styles/blog.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const Blog = ({ data }) => {
  return (
    <>
      <div>
        <NavBar />
        <h1>Hello This is blog</h1>
        {data.slice(0, 5).map((ele) => {
          return (
            <Link href={`/blog/${ele.id}`}>
              <div key={ele.id} className={styles.eleContainer}>
                <h3>{ele.id}</h3>
                <h4>{ele.title}</h4>
              </div>
            </Link>
          );
        })}
      </div>
      <style jsx>{`
        .ele-container {
        }
      `}</style>
    </>
  );
};

export default Blog;
