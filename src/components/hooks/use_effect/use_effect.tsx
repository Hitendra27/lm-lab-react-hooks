// make an api call using useEffect
import { useEffect, useState } from "react";
import { Todo } from "../use_x/todo";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const APICall = () => {
  const [todo, setTodo] = useState<Todo | null>(null);
  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        const data = await response.json();
        setTodo(data);
      } catch (error) {
        console.error("Error fetching todo:", error);
      }
    };
    fetchTodo();
  }, []);

  return (
    <>
      <h2>useEffect</h2>
      {todo && (
        <p>
          Todo ID: {todo.id}
          <br />
          Todo Title: {todo.title}
          <br />
          Todo Completed: {todo.completed.toString()}
        </p>
      )}
    </>
  );
};
