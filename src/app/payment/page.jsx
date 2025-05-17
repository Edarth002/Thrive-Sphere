"use client";
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { useState } from "react";

export const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");

  const formatCardNumber = (value) => {
    return value
      .replace(/\D/g, "") // remove non-digits
      .replace(/(.{4})/g, "$1 ") // insert space every 4 digits
      .trim();
  };

  const handleChange = (e) => {
    setCardNumber(formatCardNumber(e.target.value));
  };
  return (
    <div>
      <Header />
      <main className="w-full mx-auto grid grid-cols-1 lg:grid-cols-3">
        {/* Left form */}
        <div className="lg:col-span-2 bg-white p-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            Start your free 7 days
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            No Commitments. Cancel anytime
          </p>

          <label className="block mb-2 font-medium">
            SELECT PAYMENT METHOD
          </label>
          <div className="flex items-center border p-3 rounded-md mb-4">
            <img
              src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg"
              alt="PayPal"
              className="h-6 mr-3"
            />
            <span>PayPal</span>
          </div>

          <div className="flex items-center mb-4">
            <div className="border-t w-full"></div>
            <span className="px-2 text-sm text-gray-400">or</span>
            <div className="border-t w-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Card number"
              maxLength={19} // 16 digits + 3 spaces
              value={cardNumber}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="CVC"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full border p-2 rounded"
            />
            <select className="w-full border p-2 rounded">
              <option>AFGHANISTAN</option>
              <option>ALBANIA</option>
              <option>ALGERIA</option>
              <option>ANDORRA</option>
              <option>ANGOLA</option>
              <option>ANTIGUA AND BARBUDA</option>
              <option>ARGENTINA</option>
              <option>ARMENIA</option>
              <option>AUSTRALIA</option>
              <option>AUSTRIA</option>
              <option>AZERBAIJAN</option>
              <option>BAHAMAS</option>
              <option>BAHRAIN</option>
              <option>BANGLADESH</option>
              <option>BARBADOS</option>
              <option>BELARUS</option>
              <option>BELGIUM</option>
              <option>BELIZE</option>
              <option>BENIN</option>
              <option>BHUTAN</option>
              <option>BOLIVIA</option>
              <option>BOSNIA AND HERZEGOVINA</option>
              <option>BOTSWANA</option>
              <option>BRAZIL</option>
              <option>BRUNEI</option>
              <option>BULGARIA</option>
              <option>BURKINA FASO</option>
              <option>BURUNDI</option>
              <option>CABO VERDE</option>
              <option>CAMBODIA</option>
              <option>CAMEROON</option>
              <option>CANADA</option>
              <option>CENTRAL AFRICAN REPUBLIC</option>
              <option>CHAD</option>
              <option>CHILE</option>
              <option>CHINA</option>
              <option>COLOMBIA</option>
              <option>COMOROS</option>
              <option>CONGO (BRAZZAVILLE)</option>
              <option>CONGO (KINSHASA)</option>
              <option>COSTA RICA</option>
              <option>CROATIA</option>
              <option>CUBA</option>
              <option>CYPRUS</option>
              <option>CZECH REPUBLIC</option>
              <option>DENMARK</option>
              <option>DJIBOUTI</option>
              <option>DOMINICA</option>
              <option>DOMINICAN REPUBLIC</option>
              <option>ECUADOR</option>
              <option>EGYPT</option>
              <option>EL SALVADOR</option>
              <option>EQUATORIAL GUINEA</option>
              <option>ERITREA</option>
              <option>ESTONIA</option>
              <option>ESWATINI</option>
              <option>ETHIOPIA</option>
              <option>FIJI</option>
              <option>FINLAND</option>
              <option>FRANCE</option>
              <option>GABON</option>
              <option>GAMBIA</option>
              <option>GEORGIA</option>
              <option>GERMANY</option>
              <option>GHANA</option>
              <option>GREECE</option>
              <option>GRENADA</option>
              <option>GUATEMALA</option>
              <option>GUINEA</option>
              <option>GUINEA-BISSAU</option>
              <option>GUYANA</option>
              <option>HAITI</option>
              <option>HONDURAS</option>
              <option>HUNGARY</option>
              <option>ICELAND</option>
              <option>INDIA</option>
              <option>INDONESIA</option>
              <option>IRAN</option>
              <option>IRAQ</option>
              <option>IRELAND</option>
              <option>ISRAEL</option>
              <option>ITALY</option>
              <option>JAMAICA</option>
              <option>JAPAN</option>
              <option>JORDAN</option>
              <option>KAZAKHSTAN</option>
              <option>KENYA</option>
              <option>KIRIBATI</option>
              <option>KOREA, NORTH</option>
              <option>KOREA, SOUTH</option>
              <option>KUWAIT</option>
              <option>KYRGYZSTAN</option>
              <option>LAOS</option>
              <option>LATVIA</option>
              <option>LEBANON</option>
              <option>LESOTHO</option>
              <option>LIBERIA</option>
              <option>LIBYA</option>
              <option>LIECHTENSTEIN</option>
              <option>LITHUANIA</option>
              <option>LUXEMBOURG</option>
              <option>MACEDONIA</option>
              <option>MADAGASCAR</option>
              <option>MALAWI</option>
              <option>MALAYSIA</option>
              <option>MALDIVES</option>
              <option>MALI</option>
              <option>MALTA</option>
              <option>MARSHALL ISLANDS</option>
              <option>MAURITANIA</option>
              <option>MAURITIUS</option>
              <option>MEXICO</option>
              <option>MICRONESIA</option>
              <option>MOLDOVA</option>
              <option>MONACO</option>
              <option>MONGOLIA</option>
              <option>MONTENEGRO</option>
              <option>MOROCCO</option>
              <option>MOZAMBIQUE</option>
              <option>MYANMAR</option>
              <option>NAMIBIA</option>
              <option>NAURU</option>
              <option>NEPAL</option>
              <option>NETHERLANDS</option>
              <option>NEW ZEALAND</option>
              <option>NICARAGUA</option>
              <option>NIGER</option>
              <option>NIGERIA</option>
              <option>NORWAY</option>
              <option>OMAN</option>
              <option>PAKISTAN</option>
              <option>PALAU</option>
              <option>PALESTINE</option>
              <option>PANAMA</option>
              <option>PAPUA NEW GUINEA</option>
              <option>PARAGUAY</option>
              <option>PERU</option>
              <option>PHILIPPINES</option>
              <option>POLAND</option>
              <option>PORTUGAL</option>
              <option>QATAR</option>
              <option>ROMANIA</option>
              <option>RUSSIA</option>
              <option>RWANDA</option>
              <option>SAINT KITTS AND NEVIS</option>
              <option>SAINT LUCIA</option>
              <option>SAINT VINCENT AND THE GRENADINES</option>
              <option>SAMOA</option>
              <option>SAN MARINO</option>
              <option>SAO TOME AND PRINCIPE</option>
              <option>SAUDI ARABIA</option>
              <option>SENEGAL</option>
              <option>SERBIA</option>
              <option>SEYCHELLES</option>
              <option>SIERRA LEONE</option>
              <option>SINGAPORE</option>
              <option>SLOVAKIA</option>
              <option>SLOVENIA</option>
              <option>SOLOMON ISLANDS</option>
              <option>SOMALIA</option>
              <option>SOUTH AFRICA</option>
              <option>SPAIN</option>
              <option>SRI LANKA</option>
              <option>SUDAN</option>
              <option>SURINAME</option>
              <option>SWEDEN</option>
              <option>SWITZERLAND</option>
              <option>SYRIA</option>
              <option>TAIWAN</option>
              <option>TAJIKISTAN</option>
              <option>TANZANIA</option>
              <option>THAILAND</option>
              <option>TIMOR-LESTE</option>
              <option>TOGO</option>
              <option>TONGA</option>
              <option>TRINIDAD AND TOBAGO</option>
              <option>TUNISIA</option>
              <option>TURKEY</option>
              <option>TURKMENISTAN</option>
              <option>TUVALU</option>
              <option>UGANDA</option>
              <option>UKRAINE</option>
              <option>UNITED ARAB EMIRATES</option>
              <option>UNITED KINGDOM</option>
              <option>UNITED STATES</option>
              <option>URUGUAY</option>
              <option>UZBEKISTAN</option>
              <option>VANUATU</option>
              <option>VATICAN CITY</option>
              <option>VENEZUELA</option>
              <option>VIETNAM</option>
              <option>YEMEN</option>
              <option>ZAMBIA</option>
              <option>ZIMBABWE</option>
            </select>
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Gift card or discount code"
              className="w-full border p-2 rounded mb-2"
            />
            <button className="text-sm bg-gray-200 px-3 py-1 rounded">
              Apply
            </button>
          </div>

          <select className="w-full border p-2 rounded mb-4">
            <option>How did you first hear about us?</option>
            <option>Social Media</option>
            <option>Google Search</option>
            <option>YouTube</option>
            <option>Referral from a Friend</option>
            <option>Church Announcement</option>
            <option>Email Newsletter</option>
            <option>Flyer or Poster</option>
            <option>Blog Post</option>
            <option>TV or Radio Ad</option>
            <option>Event or Conference</option>
            <option>WhatsApp Group</option>
            <option>Instagram Ad</option>
            <option>Facebook</option>
            <option>Twitter / X</option>
            <option>LinkedIn</option>
            <option>Online Course Platform</option>
            <option>Podcast</option>
            <option>Word of Mouth</option>
          </select>
        </div>

        {/* Summary section */}
        <aside className="bg-gray-200 p-8">
          <h3 className="text-xl font-semibold mb-6">Summary</h3>

          <div className="mb-4">
            <p className="text-sm">Starting Today</p>
            <p className="font-medium">7-day free trial</p>
          </div>

          <div className="mb-4">
            <p className="text-sm">Starting January 31, 2025</p>
            <p className="font-medium">
              US$3.99/month (US$47.88 billed annually)
            </p>
          </div>

          <div className="border-t pt-4 mb-4">
            <p className="text-lg font-semibold">Due Today</p>
            <p className="text-2xl font-bold">$0.00</p>
            <ul className="text-sm text-gray-600 list-disc pl-5 mt-2">
              <li>Cancel anytime</li>
              <li>
                You won’t be charged if you cancel before February 3, 2025.
              </li>
            </ul>
          </div>

          <button className="bg-green-500 text-white w-full py-3 rounded text-lg font-semibold hover:bg-green-600">
            Start Your 7-Days Free Trial
          </button>

          <p className="text-xs text-gray-500 mt-4">
            A recurring annual charge US$47.88 (plus tax where applicable) will
            automatically be applied to your payment method and start on
            February 3, 2025.
            <br />
            <br />
            By clicking ‘Start Your 7-Days Free Trial’ you agree to our{" "}
            <a href="#" className="text-blue-600 underline">
              Terms of Service
            </a>{" "}
            and authorize this recurring charge.
          </p>
        </aside>
      </main>

      <Footer />
    </div>
  );
};

export default Payment;
