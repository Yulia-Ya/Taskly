import { ChangeEvent, KeyboardEvent, useState } from "react";

export const AddTaskForm = () => {
  const [title, setTitle] = useState("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
    console.log(title);
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    // if ((e.key = "Enter")) {
       
    // }
  };

  return <input type="text" placeholder="What needs to be done?"  value={title} onChange={onChangeHandler} onKeyDown={onKeyPressHandler}/>;
};
