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
    medium: "px-8 py-3 text-xs",
    large: "px-10 py-4 text-md",
  };
  const backgroundClasses = {
    black: "bg-dark hover:bg-gray-700",
    blue: "bg-customBlue hover:bg-blue-900",
  };

  return (
    <button
      onClick={onClick}
      name={name}
      type={type}
      className={`${backgroundClasses[backgroundColor]} ${sizeClasses[size]} rounded-lg font-gilroy-bold font-bold tracking-wide text-white `}
    >
      {" "}
      {title}{" "}
    </button>
  );
}

export default UniversalButton;
