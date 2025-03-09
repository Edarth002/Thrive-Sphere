// import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-blue-800 pt-20 pb-40 px-20">
      <section className="text-white flex items-center justify-between">
        <p className="text-2xl">Thrive sphere</p>
        <ul className="flex flex-col items-start space-y-5">
          <li>
            <Link href="/">Services</Link>
          </li>
          <li>
            <Link href="/">Features</Link>
          </li>
          <li>
            <Link href="/">About us</Link>
          </li>
        </ul>
        <ul className="flex flex-col items-start space-y-5">
          <li>
            <Link href="/">Community</Link>
          </li>
          <li>
            <Link href="/">Volunteer</Link>
          </li>
          <li>
            <Link href="/">Help</Link>
          </li>
        </ul>
        <ul className="flex flex-col items-start space-y-5">
          <li>
            <Link href="/">Contact us</Link>
          </li>
          <li>
            <Link href="/">email: support@thrivesphere.com</Link>
          </li>
          <li>
            <Link href="/">phone: +234 813 487 6549</Link>
          </li>
        </ul>
      </section>
    </div>
  );
};
export default Footer;
