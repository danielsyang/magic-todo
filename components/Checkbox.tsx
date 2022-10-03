import { InputHTMLAttributes, forwardRef } from "react";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {}

const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ className, ...rest }, ref) => {
    return (
      <input
        className={"accent-purple-700 " + className}
        type="checkbox"
        ref={ref}
        {...rest}
      />
    );
  }
);

CheckBox.displayName = "CheckBox";

export default CheckBox;
