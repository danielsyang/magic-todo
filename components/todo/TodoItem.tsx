import isToday from "date-fns/isToday";
import format from "date-fns/format";
import CheckBox from "../Checkbox";
import { useRef } from "react";

export default function TodoItem() {
  const date = isToday(new Date()) ? `Today - ${format(new Date(), "p")}` : "";
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div
      className="flex mb-4 cursor-pointer"
      onClick={() => {
        if (ref.current) {
          ref.current.click();
        }
      }}
    >
      <CheckBox className="mr-4 mb-auto mt-1.5" ref={ref} />
      <div className="flex flex-col">
        <p className="text-slate-700 text-sm">First thing to do.</p>
        <p className="text-slate-700 opacity-50 text-xs">{date}</p>
      </div>
    </div>
  );
}
