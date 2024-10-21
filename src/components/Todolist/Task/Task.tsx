import React from "react";
import { TaskProps } from "./taskSlice";
type Props = {
  task: TaskProps;
};
export const Task = ({ task }: Props) => {
  const { title } = task;
  return (
    <li>
      <span>{title}</span>
    </li>
  );
};
