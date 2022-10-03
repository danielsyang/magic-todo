import { InputHTMLAttributes } from "react";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function CheckBox({ className, type, ...rest }: CheckBoxProps) {
  return (
    <input
      className={"accent-purple-700 " + className}
      type="checkbox"
      {...rest}
    />
  );
}
