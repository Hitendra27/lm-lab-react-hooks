// make an api call using useEffect
import { useEffect, useState } from "react";

export const APICall = () => {
  const [todo, setTodo] = useState(null);
  useEffect(() => {
    const fetchTodo = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const data = await response.json();
      setTodo(data);
    };

    fetchTodo();
  }, []);

  return (
    <>
      <h2>useEffect</h2>
      <p>
        Todo ID: {todo.id}
        <br />
        Todo Title: {todo.title}
        <br />
        Todo Completed: {todo.completed.toString()}
      </p>
    </>
  );
};
