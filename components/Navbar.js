import Link from "next/link";
import Image from "next/image";
import logo from "./images/sc-logo.png";
import Head from "next/head";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <Image src={logo} width={120} height={100} alt="logo" />
        </div>
        <Link href="/">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/ninjas">Ninja Listing</Link>
      </nav>
    </>
  );
};

export default Navbar;
