import Card from "../Card";
import TodoItem from "./TodoItem";

export default function TodoList() {
  return (
    <Card className="max-w-lg">
      <h4 className="font-bold">Tasks</h4>
      <p className="text-sm text-gray-600">
        These are the tasks you have for today
      </p>

      <div className="mt-4 flex flex-col">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </Card>
  );
}
