import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-blue-800 pt-20 pb-40 px-10 md:px-20">
      <section className="text-white flex flex-col md:flex-row md:items-center md:justify-between space-y-10 md:space-y-0">
        <p className="text-2xl">Thrive sphere</p>

        <ul className="flex flex-col items-start space-y-5">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/courses">Courses</Link>
          </li>
          <li>
            <Link href="/about">About us</Link>
          </li>
        </ul>

        <ul className="flex flex-col items-start space-y-5">
          <li>
            <Link href="/community">Community</Link>
          </li>
          <li>
            <Link href="/community">Volunteer</Link>
          </li>
          <li>
            <Link href="/community">Help</Link>
          </li>
        </ul>

        <ul className="flex flex-col items-start space-y-5">
          <li>
            <Link href="/community">Contact us</Link>
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
