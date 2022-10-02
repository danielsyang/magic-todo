import Breadcrumbs from "../../components/Breadcrumbs";
import MainContainer from "../../components/MainContainer";
import TodoList from "../../components/todo/List";

export default function TodoPage() {
  return (
    <MainContainer>
      <Breadcrumbs />
      <h6 className="font-bold">Things to do</h6>
      <div>
        <TodoList />
      </div>
    </MainContainer>
  );
}
