import isToday from "date-fns/isToday";
import format from "date-fns/format";
import CheckBox from "../Checkbox";

export default function TodoItem() {
  const date = isToday(new Date()) ? `Today - ${format(new Date(), "p")}` : "";
  return (
    <div className="flex mb-4">
      <CheckBox className="mr-4 mb-auto mt-1.5" />
      <div className="flex flex-col">
        <p className="text-slate-700 text-sm">First thing to do.</p>
        <p className="text-slate-700 opacity-50 text-xs">{date}</p>
      </div>
    </div>
  );
}
