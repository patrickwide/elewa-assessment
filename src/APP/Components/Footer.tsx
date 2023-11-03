import React from "react";
import { Link } from "react-router-dom";
// Define an interface for the Footer component props
interface FooterLink {
  title: string;
  to: string;
}

interface FooterProps {
  address: string;
  phone: string;
  email: string;
  navigation: FooterLink[];
  brands: string[];
  privacy: string[];
}

const Footer: React.FC<FooterProps> = ({
  address,
  phone,
  email,
  navigation,
  brands,
  privacy,
}) => {
  return (
    <footer className="bg-black rounded-t-3xl p-10 text-white relative -top-8 -mb-8 z-1000 inset-0">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/5">
          <h2 className="my-4 underline">Headquarters</h2>
          <p className="my-2">{address}</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/5">
          <h2 className="my-4 underline">Contact</h2>
          <p className="my-4">T {phone}</p>
          <p className="my-4">E {email}</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/5">
          <h2 className="my-4 underline">Navigation</h2>
          <ul>
            {navigation.map((item, index) => (
              <li className="my-4" key={index}>
                <Link to={item.to}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/5">
          <h2 className="my-4 underline">Brands</h2>
          <ul>
            {brands.map((brand, index) => (
              <li key={index} className="my-4">
                {brand}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/5">
          <h2 className="my-4 underline">Privacy</h2>
          <ul>
            {privacy.map((item, index) => (
              <li key={index} className="my-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="justify-between flex">
        <div className="w-1/2 md:w-1/4 lg:w-1/6 flex items-center">
          <img src="your-icon-image.png" alt="Icon" />
        </div>
        <div className="w-1/2 md:w-1/4 lg:w-1/6 flex items-center">
          <a href="social-media-link">Social Media</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
