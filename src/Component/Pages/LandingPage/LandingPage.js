import React, { useEffect, useState, useCallback, useRef } from "react";
import TodoMain from "./components/TodoMain";
import TodoList from "./components/TodoList";
import TodoInsert from "./components/TodoInsert";
import logoutIcon from "./image/icon-logout.svg";
import homeIcon from "./image/icon-main.svg";
import scheduleIcon from "./image/icon-check-last-schedule.svg";
import TodoPage from "./components/TodoPage";
import { siteTitle } from "../../Config";

function LandingPage() {
  useEffect(() => {
    document.title = siteTitle; //Title 변경.
  });

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "방울이랑 놀아주기",
      checked: false,
    },
    {
      id: 2,
      text: "교수님과 즐겁고 행복하게 졸업작품 만들기",
      checked: true,
    },
    {
      id: 3,
      text: "로또 1등 당첨되기",
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  return (
    <div>
      <TodoMain>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        <TodoPage />
      </TodoMain>
      <nav>
        <ul id="menu">
          <li key="logout">
            <img src={logoutIcon} alt="logout" />
          </li>
          <li className="active" key="home">
            <img src={homeIcon} alt="home" />
          </li>
          <li key="schedule">
            <img src={scheduleIcon} alt="schedule" />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default LandingPage;
