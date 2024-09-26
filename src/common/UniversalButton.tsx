interface ButtonProps {
  title: string;
  backgroundColor?: "black" | "blue";
  size?: "medium" | "large";
  type?: "button" | "submit" | "reset";
  name?: string;
  onClick?: () => void;
}

function UniversalButton({
  title,
  backgroundColor = "blue",
  size = "medium",
  type = "button",
  name = "",
  onClick,
}: ButtonProps) {
  const sizeClasses = {    
    medium: "px-6 py-2 text-xs",
    large: "px-8 py-3 text-md",
  };
  const backgroundClasses = {
    black: "bg-gray-650 hover:bg-slate-900",
    blue: "bg-blue-700 hover:bg-blue-900"
    
  }

  return (
    <button
      onClick={onClick}
      name={name}
      type={type}
      className={`
                ${backgroundClasses[backgroundColor]} 
                
                
                ${sizeClasses[size]} 
                rounded-lg
                font-medium
                text-white 
            `}
      style={{ fontFamily: "Gilroy-Bold, sans-serif" }}
    >
      {title}
    </button>
  );
}

export default UniversalButton;
