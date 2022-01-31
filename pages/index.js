import React from "react";
import styles from "../styles/index.module.css";
import NavBar from "../components/NavBar";
import Image from "next/image";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>next thapa</title>
      </Head>
      <div style={{ textAlign: "center" }}>
        <NavBar />
        <h1 className={styles.header}>This is index.js</h1>
        <Image src="/offer.jpeg" width="500px" height="300%"></Image>
        <Image
          src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          width="500px"
          height="300%"
        ></Image>
        <style jsx>
          {`
            h1 {
              box-shadow: 0px 0px 15px rgb(148, 148, 148);
            }
          `}
        </style>
      </div>
    </>
  );
};

export default index;
