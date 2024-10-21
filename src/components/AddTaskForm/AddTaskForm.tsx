import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useAppDispatch } from "../../common/hooks/useAppDispatch";
import { addTask } from "../Todolist/Task/taskSlice";
import styles from "./AddTaskForm.module.css";

export const AddTaskForm = () => {
  const [title, setTitle] = useState("");

  const dispatch = useAppDispatch();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && title.trim()) {
      dispatch(addTask({ title }));
      setTitle("");
    }
  };

  return (
    <input
      className={styles.form_wrapper}
      type="text"
      placeholder="What needs to be done?"
      value={title}
      onChange={onChangeHandler}
      onKeyDown={onKeyPressHandler}
    />
  );
};
