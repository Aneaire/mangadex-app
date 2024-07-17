import { SetStateAction } from "react";
import { Input } from "../ui/input";

const PlainInput = ({
  placeholder,
  className,
  onChange,
  handleBlur,
  onClick,
}: {
  placeholder?: string;
  className?: string;
  onChange?: SetStateAction<any>;
  handleBlur?: () => void;
  onClick?: () => void;
}) => {
  return (
    <Input
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`border-none rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 ${className} font-poppins`}
      onBlur={handleBlur}
      onClick={onClick}
    />
  );
};

export default PlainInput;
