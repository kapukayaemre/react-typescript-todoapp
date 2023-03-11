import React, { ChangeEvent, FC, useState } from "react";
import { todoType } from "./appTypes";
import "./App.css";
import TodoItem from "./TodoItem";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [day, setDay] = useState<number>(0);
  const [todoList, setTodoList] = useState<todoType[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDay(Number(event.target.value));
    }
  };

  const addNewTask = (): void => {
    const newTask = { taskName: task, day: day };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDay(0);
  };

  const deleteTask = (nameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != nameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="mainCard">
        <h1 style={{ textAlign: "center" }}>TODO LİST</h1>
        <input
          className="mainCardInput"
          type="text"
          name="task"
          value={task}
          placeholder="Taskınızı Giriniz."
          onChange={handleChange}
        />
        <input
          className="mainCardInput"
          type="number"
          name="day"
          value={day}
          placeholder="Kaç Günde Tamamlamalısınız?"
          onChange={handleChange}
        />
        <button className="mainCardButton" onClick={addNewTask}>
          Yeni Task Ekle
        </button>
      </div>
      <div className="todoCard">
        {todoList.map((task: todoType, index: number) => {
          return <TodoItem key={index} task={task} deleteTask={deleteTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
