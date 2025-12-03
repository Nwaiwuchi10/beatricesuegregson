import profile_img from "../assets/beatrice sue.jpeg";
import right_arrow_white from "../assets/right-arrow-white.png";
import whatsapp from "../assets/whatsapp.png";
import "./Hero.css";
import { PhoneNumber } from "./PhoneNumber";

const Header = () => {
  const phoneNumber = PhoneNumber;

  const WhatsappClick = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  return (
    <div className="w-full text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-6 pt-32 px-4">
      {/* Hero Image */}
      <div className="w-full mx-auto">
        <img
          src={profile_img}
          alt="Beatrice Sue Gregson"
          className="
    mx-auto shadow-lg object-cover 
    rounded-2xl lg:rounded-full
    w-[90%] h-[320px] sm:w-[95%] sm:h-[480px] md:w-[95%] md:h-[520px]
    lg:w-[300px] lg:h-[300px]
  "
        />
      </div>

      {/* Text Content */}
      <div className="mt-8">
        <h3 className="flex items-end justify-center gap-2 text-xl md:text-2xl mb-3 font-Ovo">
          Hi! I'm Beatrice Sue Gregson{" "}
          <img src="./assets/hand-icon.png" alt="" className="w-6" />
        </h3>

        <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
          Financial Consultant
        </h1>

        <p className="max-w-2xl mx-auto font-Ovo mt-4">
          I am a seasoned investment advisor with over 19 years of experience in
          cryptocurrency and other financial markets. I am also a highly
          professional stockbroker, skilled in executing financial transactions
          through registered securities brokers.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent"
        >
          contact me <img src={right_arrow_white} alt="" className="w-4" />
        </a>
      </div>

      {/* WhatsApp Icon */}
      <div className="whatsapp-img-div mt-6">
        <div
          className="whatsapp-img-size cursor-pointer"
          onClick={WhatsappClick}
        >
          <img src={whatsapp} alt="whatsapp" className="whatsapp-img" />
        </div>
      </div>
    </div>
  );
};

export default Header;
