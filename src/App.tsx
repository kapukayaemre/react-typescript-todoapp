import React, { ChangeEvent, FC, useState } from "react";
import { todoType } from "./appTypes";
import "./App.css";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [day, setDay] = useState<number>(0);
  const [todoList, setTodoList] = useState<todoType[]>([]);

  console.log(todoList);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDay(Number(event.target.value));
    }
  };

  const addNewTask = () => {
    const newTask = { taskName: task, day: day };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDay(0);
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          name="task"
          value={task}
          placeholder="Taskınızı Giriniz."
          onChange={handleChange}
        />
        <input
          type="number"
          name="day"
          value={day}
          placeholder="Kaç Günde Tamamlamalısınız?"
          onChange={handleChange}
        />
        <button onClick={addNewTask}>Yeni Task Ekle</button>
      </div>
    </div>
  );
};

export default App;
