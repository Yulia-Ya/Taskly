import React from "react";
import { changeTaskStatus, TaskProps } from "./taskSlice";
import { useAppDispatch } from "../../../common/hooks/useAppDispatch";
import styles from "./Task.module.css";
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
    <li className={styles.task}>
      <input type="checkbox" checked={completed} onChange={toggleHandler}/>
      <span className={completed ? styles.task_title : "none"}>{title}</span>
    </li>
  );
};
