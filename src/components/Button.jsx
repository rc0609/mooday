import React from "react";

const Button = ({
  children,
  onClick,
  className = "",
  type = "button",
  variant = "default",
}) => {
  const baseStyles =
    "relative px-6 py-2 font-semibold rounded-xl transition-all duration-500 ease-out transform hover:scale-[1.08] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 overflow-hidden backdrop-blur-md";

    const variants = {
    default: `
        bg-[#B388EB] text-white
        shadow-[0_0_12px_rgba(179,136,235,0.8),0_0_25px_rgba(186,155,255,0.9)]
        hover:shadow-[0_0_20px_rgba(179,136,235,1),0_0_45px_rgba(186,155,255,1)]
        hover:brightness-110
        dark:bg-[#8E6EEB]/30
        dark:text-[#F3E8FF]
        dark:shadow-[0_0_20px_rgba(179,136,235,0.8),0_0_40px_rgba(186,155,255,0.9)]
        dark:hover:shadow-[0_0_35px_rgba(179,136,235,1),0_0_65px_rgba(186,155,255,1)]
        dark:hover:brightness-125
        focus-visible:ring-[#B388EB]
    `,

    ai: `
        bg-gradient-to-r from-[#B074FF] to-[#C822FF] text-white
        shadow-[0_0_16px_rgba(193,100,255,0.8),0_0_30px_rgba(225,90,255,0.9)]
        hover:shadow-[0_0_28px_rgba(193,100,255,1),0_0_55px_rgba(225,90,255,1)]
        hover:brightness-115
        dark:from-[#B074FF]/70 dark:to-[#C822FF]/70
        dark:text-[#F8EFFF]
        dark:shadow-[0_0_22px_rgba(193,100,255,0.9),0_0_45px_rgba(225,90,255,1)]
        dark:hover:shadow-[0_0_38px_rgba(193,100,255,1),0_0_65px_rgba(225,90,255,1)]
        dark:hover:brightness-130
        focus-visible:ring-[#C822FF]
    `,
    };


  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;






