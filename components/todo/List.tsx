import Card from "../Card";

export default function TodoList() {
  return (
    <Card className="max-w-lg">
      <h4 className="mb-2 font-bold">Tasks</h4>
      <p className="text-sm text-gray-600">
        These are the tasks you have for today
      </p>
    </Card>
  );
}
