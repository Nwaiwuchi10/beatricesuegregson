// export default Contact
import { useState } from "react";
import right_arrow_white from "../assets/right-arrow-white.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit handler (WhatsApp integration)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // const hCaptcha = e.target.querySelector(
    //   "textarea[name=h-captcha-response]"
    // )?.value;
    // if (!hCaptcha) {
    //   setResult("Please fill out captcha field");
    //   return;
    // }

    setResult("Sending...");

    const whatsappNumber = "+1 (484) 201-6561"; // No '+' for wa.me links
    const textMessage = `Hello, my name is ${formData.firstName}. My email is ${formData.email}. Here's my message: ${formData.message}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      textMessage
    )}`;

    window.open(whatsappURL, "_blank");
    setResult("Message sent! Redirecting to WhatsApp...");
    e.target.reset();
    setFormData({ firstName: "", email: "", message: "" });
  };

  // hCaptcha loader
  // function CaptchaLoader() {
  //   const captchadiv = document.querySelectorAll('[data-captcha="true"]');
  //   if (captchadiv.length) {
  //     captchadiv.forEach((item) => {
  //       if (!item.dataset.sitekey) {
  //         item.dataset.sitekey = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
  //       }
  //     });

  //     let scriptSrc = "https://js.hcaptcha.com/1/api.js?recaptchacompat=off";

  //     const script = document.createElement("script");
  //     script.type = "text/javascript";
  //     script.async = true;
  //     script.defer = true;
  //     script.src = scriptSrc;
  //     document.body.appendChild(script);
  //   }
  // }

  // useEffect(() => {
  //   CaptchaLoader();
  // }, []);

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <input
          type="hidden"
          name="subject"
          value="Portfolio - New Form Submission"
        />

        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            required
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />

          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <textarea
          rows="6"
          placeholder="Enter your message"
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
          required
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        {/* <div className="h-captcha mb-6 max-w-full" data-captcha="true"></div> */}

        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
        >
          Submit now
          <img src={right_arrow_white} alt="" className="w-4" />
        </button>

        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
