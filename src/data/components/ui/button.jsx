const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1";
  
  const variants = {
    primary: "bg-[#00CED1] text-[#0F1E29] hover:bg-opacity-90 shadow-[0_4px_14px_0_rgba(0,206,209,0.39)]",
    secondary: "bg-transparent border-2 border-[#00CED1] text-[#00CED1] hover:bg-[#00CED1] hover:text-[#0F1E29]",
    dark: "bg-[#0F1E29] text-white hover:bg-[#1a2e3d]",
    outlineDark: "bg-transparent border-2 border-[#0F1E29] text-[#0F1E29] hover:bg-[#0F1E29] hover:text-white"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};