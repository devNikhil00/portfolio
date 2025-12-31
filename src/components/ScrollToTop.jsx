import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 z-50
        w-11 h-11
        flex items-center justify-center
        glass glass-pill
        text-orange-400
        transition-all duration-300
        hover:scale-110 hover:shadow-[0_0_25px_rgba(249,115,22,0.4)]
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <FaArrowUp className="text-sm" />
    </button>
  );
};

export default ScrollToTop;
