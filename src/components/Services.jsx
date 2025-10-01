import web_icon from "../assets/web-icon.png";
import mobile_icon from "../assets/mobile-icon.png";
import ui_icon from "../assets/ui-icon.png";
import graphics_icon from "../assets/graphics-icon.png";
import right_arrow from "../assets/right-arrow.png";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What i offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I am an investment advisor with over 15 years of experience, dealing and
        investing in crypto currency and other related financial markets. She is
        a very professional stock broker who executes financial transactions to
        registered securities broker.
      </p>

      <div className="grid grid-cols-auto gap-6 my-10">
        <div
          className="border border-gray-400 rounded-lg px-8 py-12
        hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
        >
          <img src={web_icon} alt="" className="w-10" />
          <h3 className="text-lg my-4 text-gray-700 dark:text-white">
            Wealth Management
          </h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
            A professional service that helps individuals and families manage,
            grow, and protect their assets through financial planning,
            investment strategies, and risk management.
          </p>
          <a href="" className="flex items-center gap-2 text-sm mt-5">
            Read more <img src={right_arrow} alt="" className="w-4" />
          </a>
        </div>
        <div
          className="border border-gray-400 rounded-lg px-8 py-12
        hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
        >
          <img src={mobile_icon} alt="" className="w-10" />
          <h3 className="text-lg my-4 text-gray-700 dark:text-white">
            Business Planning
          </h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
            The process of creating a roadmap for a company’s growth and
            operations, including goals, strategies, financial forecasts, and
            plans to attract investors or secure funding.
          </p>
          <a href="" className="flex items-center gap-2 text-sm mt-5">
            Read more <img src={right_arrow} alt="" className="w-4" />
          </a>
        </div>
        <div
          className="border border-gray-400 rounded-lg px-8 py-12
        hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
        >
          <img src={ui_icon} alt="" className="w-10" />
          <h3 className="text-lg my-4 text-gray-700 dark:text-white">
            Sustainable Investing
          </h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
            An investment approach that considers environmental, social, and
            governance (ESG) factors alongside financial returns, focusing on
            companies that promote long-term sustainability.
          </p>
          <a href="" className="flex items-center gap-2 text-sm mt-5">
            Read more <img src={right_arrow} alt="" className="w-4" />
          </a>
        </div>
        <div
          className="border border-gray-400 rounded-lg px-8 py-12
        hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
        >
          <img src={graphics_icon} alt="" className="w-10" />
          <h3 className="text-lg my-4 text-gray-700 dark:text-white">
            Crypto exchanges and Crypto wallets
          </h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
            Online platforms where users can buy, sell, and trade
            cryptocurrencies such as Bitcoin, Ethereum, and others, often with
            fiat currency or other digital assets.
          </p>
          <a href="" className="flex items-center gap-2 text-sm mt-5">
            Read more <img src={right_arrow} alt="" className="w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
