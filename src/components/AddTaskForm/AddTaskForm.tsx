import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useAppDispatch } from "../common/hooks/useAppDispatch";
import { addTask } from "../Todolist/Task/taskSlice";

export const AddTaskForm = () => {
  const [title, setTitle] = useState("");

  const dispatch = useAppDispatch();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
    console.log(title);
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && title.trim()) {
      dispatch(addTask({ title }));
      setTitle("");
    }
  };

  return (
    <input
      type="text"
      placeholder="What needs to be done?"
      value={title}
      onChange={onChangeHandler}
      onKeyDown={onKeyPressHandler}
    />
  );
};
