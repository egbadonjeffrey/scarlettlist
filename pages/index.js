import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title> Scarlett Ninjas | Home </title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}> Homepage </h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
          atque incidunt culpa blanditiis eum doloribus ex est nesciunt hic
          distinctio!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
          atque incidunt culpa blanditiis eum doloribus ex est nesciunt hic
          distinctio!
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}> See Scarlett Ninja Listings</a>
        </Link>
      </div>
    </>
  );
}
