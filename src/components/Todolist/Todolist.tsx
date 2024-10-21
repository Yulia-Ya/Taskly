import { useSelector } from "react-redux";
import { AddTaskForm } from "../AddTaskForm/AddTaskForm";
import { Task } from "./Task/Task";
import { RootState } from "../../app/store";
import { Button } from "../Button/Button";
import { useAppDispatch } from "../../common/hooks/useAppDispatch";
import { changeTasksFilter, removeCompletedTasks, selectActiveTodosCount } from "./Task/taskSlice";
import styles from "./Todolist.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export const Todolist = () => {
  const [open, setOpen] = useState(false);
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const filter = useSelector((state: RootState) => state.tasks.filter);
  const activeTodosCount = useSelector(selectActiveTodosCount);

  const dispatch = useAppDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    } else if (filter === "active") {
      return !task.completed;
    }
    return true;
  });

  return (
    <div className={styles.todos_wrapper}>
      {/* <button onClick={() => setOpen(!open)}>Acc</button> */}
      <div className={styles.todos_form_wrapper}>
      <Button onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faAngleDown}/>
      </Button>
        <AddTaskForm />
      </div>

      {!open && (
        <>
          <ul className={styles.tasks_list}>
            {filteredTasks.map((task) => {
              return <Task key={task.id} task={task} />;
            })}
          </ul>
          <div className={styles.bottom}>
            <span>
              {" "}
              {activeTodosCount} {activeTodosCount === 1 ? "item" : "items"} left
            </span>
            <div>
            <Button onClick={() => dispatch(changeTasksFilter({ filter: "all" }))} >All</Button>
              <Button onClick={() => dispatch(changeTasksFilter({ filter: "active" }))} >Active</Button>
              <Button  onClick={() => dispatch(changeTasksFilter({ filter: "completed" }))} >Completed</Button>
            </div>
            <Button onClick={() => dispatch(removeCompletedTasks())} >Clear completed</Button>
          </div>
        </>
      )}
    </div>
  );
};
