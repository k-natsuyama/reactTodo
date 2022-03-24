import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncomplateTodos } from "./components/IncomplateTodos";
import { Complatetodos } from "./components/Complatetodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncomplateTodos] = useState([]);

  const [complateTodos, setComplateTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncomplateTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncomplateTodos(newTodos);
  };

  const onclickComplate = (index) => {
    const newIncomplateTodos = [...incompleteTodos];
    newIncomplateTodos.splice(index, 1);

    const newComplateTodos = [...complateTodos, incompleteTodos[index]];
    setIncomplateTodos(newIncomplateTodos);
    setComplateTodos(newComplateTodos);
  };

  const onClickBack = (index) => {
    const newComplateTodos = [...complateTodos];
    newComplateTodos.splice(index, 1);

    const newIncomplateTodos = [...incompleteTodos, complateTodos[index]];
    setComplateTodos(newComplateTodos);
    setIncomplateTodos(newIncomplateTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />

      <IncomplateTodos
        todos={incompleteTodos}
        onclickComplate={onclickComplate}
        onClickDelete={onClickDelete}
      />

      <Complatetodos complateTodos={complateTodos} onClickBack={onClickBack} />
    </>
  );
};
