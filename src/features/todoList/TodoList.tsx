import TodoListItem from "./TodoListItem";
import { RootState } from "app/store";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { toggleTodo } from "./todoSlice";
import { VisibilityFilter } from "features/visibilityFilter/visibilityFilterSlice";
import { Todo } from "./types";

const getVisibleTodos = (todos: Todo[], filter: VisibilityFilter) => {
  switch (filter) {
    case VisibilityFilter.showAll:
      return todos;
    case VisibilityFilter.showCompleted:
      return todos.filter((todo) => todo.completed);
    case VisibilityFilter.showActive:
      return todos.filter((todo) => !todo.completed);
    default:
      return todos;
  }
};

export default function TodoList() {
  const dispatch = useAppDispatch();

  const todos = useAppSelector((state: RootState) =>
    getVisibleTodos(state.todos, state.visibilityFilter)
  );

  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          {...todo}
          onClick={() => dispatch(toggleTodo(todo))}
        />
      ))}
    </ul>
  );
}
