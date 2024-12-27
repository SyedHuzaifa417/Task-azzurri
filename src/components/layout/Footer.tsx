import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white py-6 mt-auto">
      <div className="max-w-screen-xl mx-auto px-8 flex flex-col lg:flex-row">
        <div className="lg:pr-16">
          <img
            src="/src/assets/logo.png"
            alt="deelly logo"
            className="w-20 md:w-24 lg:w-80 my-5"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-24 gap-y-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Top Deals</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Top Deals is an e-commerce site that connects businesses with
              customers by providing discounted offers, service coupons, or
              special offers. Top Deals brings a whole ecommerce platform for
              business owners and customers to save a lot of money.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Our Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-[#219653]"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-[#219653]"
                >
                  Privacy & Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-[#219653]"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-[#219653]"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-[#219653]"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Our Payment Partners</h3>
            <div className="flex items-center gap-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                alt="Visa"
                className="h-6 md:h-5"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg"
                alt="Apple Pay"
                className="h-6 md:h-5"
              />
              <img
                src="https://seeklogo.com/images/S/samsung-pay-logo-A49CCE45DF-seeklogo.com.png"
                alt="samsung pay"
                className="h-6 md:h-5"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                alt="Mastercard"
                className="h-6 md:h-5"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mt-16 pt-8 mx-auto px-8 border-t border-gray-100 ">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <p className="text-center text-sm text-gray-500">
            © deelly 2023. All rights reserved.
          </p>
          <div className="flex gap-2">
            <Facebook className="w-8 h-8 text-white bg-blue-600 p-1 rounded-lg" />
            <Twitter className="w-8 h-8 text-white bg-sky-400 p-1 rounded-lg" />
            <Instagram className="w-8 h-8 text-white bg-rose-600 p-1 rounded-lg" />
          </div>
        </div>
      </div>
    </footer>
  );
}
