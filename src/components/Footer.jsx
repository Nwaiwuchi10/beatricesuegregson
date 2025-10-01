import mail_icon from "../assets/mail_icon.png";
import mail_icon_dark from "../assets/mail_icon_dark.png";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center text-xl font-semibold py-10 ">
        Beatrice Sue Gregson
        {/* <img src={logo} alt="" className="w-36 mx-auto mb-2 dark:hidden" />
        <img
          src={logo_dark}
          alt=""
          className="w-36 mx-auto mb-2 hidden dark:block"
        /> */}
        <div className="w-max flex items-center gap-2 mx-auto">
          <img src={mail_icon} alt="" className="w-6 dark:hidden" />
          <img src={mail_icon_dark} alt="" className="w-6 hidden dark:block" />
          beatricesuegregson@gmail.com
        </div>
      </div>
      <div className="text-center flex items-center justify-center border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p className="text-center">
          © 2025 Beatrice Sue Gregson. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
