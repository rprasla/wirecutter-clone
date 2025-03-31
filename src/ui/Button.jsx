const Button = ({ children, onClick, className, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 font-medium transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
