import React from "react";
import { changeTaskStatus, TaskProps } from "./taskSlice";
import { useAppDispatch } from "../../common/hooks/useAppDispatch";
type Props = {
  task: TaskProps;
};
export const Task = ({ task }: Props) => {
  const { id, title, completed } = task;
  const dispatch = useAppDispatch();

  const toggleHandler = () => {
    dispatch(changeTaskStatus({ id }));
  };
  return (
    <li>
      <input type="checkbox" checked={completed} onClick={toggleHandler} />
      <span>{title}</span>
    </li>
  );
};
