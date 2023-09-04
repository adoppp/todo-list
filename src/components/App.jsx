import { useDispatch, useSelector } from "react-redux";
import { AppBar } from "./Appbar/Appbar";
import { TodoList } from "./Todo-list/TodoList";
import { todoSelector } from "redux/selectors/selectors";
import { useEffect } from "react";
import { fetchTodo } from "redux/operations/todoThunk";

export const App = () => {
  const todos = useSelector(todoSelector);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo())
  }, [dispatch])

  return (
    <div>
      <AppBar />
      <TodoList todos={todos} />
    </div>
  );
};
