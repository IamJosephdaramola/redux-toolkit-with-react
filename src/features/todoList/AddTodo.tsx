import { useState } from "react";
import { useAppDispatch } from "app/hooks";
import { addTodo } from "./todoSlice";

export default function AddTodo(): JSX.Element {
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) {
      return;
    }
    dispatch(addTodo(text));
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
}
