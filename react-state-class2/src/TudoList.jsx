import { useState } from "react";
import { v4 as uuid4 } from "uuid";

export default function TodoList() {
    const [todos, setTodos] = useState([
        { task: "sample-task", id: uuid4(), styled: false, isDone: false }
    ]);
    const [newTodo, setNewTodo] = useState("");

    const addNewTask = () => {
        if (newTodo.trim() === "") return;
        setTodos((prevTodos) => [
            ...prevTodos,
            { task: newTodo, id: uuid4(), styled: false, isDone: false }
        ]);
        setNewTodo("");
    };

    const updateTodovalue = (event) => {
        setNewTodo(event.target.value);
    };

    const deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const upperCaseAll = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => ({
                ...todo,
                task: todo.task.toUpperCase(),
                styled: true
            }))
        );
    };

    const markAsDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id
                    ? {
                          ...todo,
                          task: todo.task.toUpperCase(),
                          styled: true,
                          isDone: true
                      }
                    : todo
            )
        );
    };

    // 🔵 Styles
    const containerStyle = {
        padding: "30px",
        fontFamily: "Segoe UI, sans-serif",
        backgroundColor: "#f0f8ff",
        minHeight: "100vh"
    };

    const inputStyle = {
        padding: "10px",
        width: "300px",
        fontSize: "16px",
        marginBottom: "15px",
        border: "2px solid #66afe9",
        borderRadius: "5px",
        outline: "none"
    };

    const buttonStyle = {
        padding: "8px 14px",
        margin: "5px 5px 5px 0",
        fontSize: "14px",
        cursor: "pointer",
        borderRadius: "5px",
        border: "none"
    };

    const addBtnStyle = {
        ...buttonStyle,
        backgroundColor: "#28a745",
        color: "#fff"
    };

    const deleteBtnStyle = {
        ...buttonStyle,
        backgroundColor: "#dc3545",
        color: "#fff"
    };

    const upperBtnStyle = {
        ...buttonStyle,
        backgroundColor: "#17a2b8",
        color: "#fff"
    };

    const upperAllBtnStyle = {
        ...buttonStyle,
        backgroundColor: "#ffc107",
        color: "#000",
        fontWeight: "bold"
    };

    const listItemStyle = {
        marginBottom: "15px",
        fontSize: "18px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        backgroundColor: "#ffffff",
        padding: "10px",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    };

    const highlightedStyle = {
        fontWeight: "bold",
        backgroundColor: "#ffeeba",
        color: "#856404",
        padding: "4px 8px",
        borderRadius: "5px"
    };

    return (
        <div style={containerStyle}>
            <h2 style={{ color: "#007bff", fontWeight: "bold" }}>🌟 My Todo List</h2>

            <input
                placeholder="Add a Task"
                value={newTodo}
                onChange={updateTodovalue}
                style={inputStyle}
            />
            <br />
            <button onClick={addNewTask} style={addBtnStyle}>➕ Add Task</button>
            <br /><br />

            <hr />
            <h4 style={{ color: "#343a40" }}>📋 Task List</h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {todos.map((todo) => (
                    <li key={todo.id} style={listItemStyle}>
                        <span style={{
                            ...(todo.styled ? highlightedStyle : {}),
                            ...(todo.isDone ? { textDecorationLine: "line-through" } : {})
                        }}>
                            {todo.task}
                        </span>
                        <button onClick={() => deleteTodo(todo.id)} style={deleteBtnStyle}>🗑 Delete</button>
                        <button onClick={() => markAsDone(todo.id)} style={upperBtnStyle}>⬆ UpperCase</button>
                    </li>
                ))}
            </ul>

            <br />
            <button onClick={upperCaseAll} style={upperAllBtnStyle}>⬆⬆ UpperCase All</button>
        </div>
    );
}






// import { useState } from "react";
// import { v4 as uuid4 } from "uuid";

// export default function TodoList() {
//     const [todos, setTodos] = useState([{ task: "sample-task", id: uuid4() }]);
//     const [newTodo, setNewTodo] = useState("");

//     const addNewTask = () => {
//         if (newTodo.trim() === "") return;
//         setTodos((prevTodos) => [...prevTodos, { task: newTodo, id: uuid4() }]);
//         setNewTodo("");
//     };

//     const updateTodovalue = (event) => {
//         setNewTodo(event.target.value);
//     };

//     const deleteTodo = (id) => {
//         setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
//     };

//     const upperCaseAll = () => {
//         setTodos((prevTodos) =>
//             prevTodos.map((todo) => ({
//                 ...todo,
//                 task: todo.task.toUpperCase(),
//             }))
//         );
//     };

// let UpperCaseOne = (id) => {
//     setTodos((prevTodos) =>
//         prevTodos.map((todo) => {
//             if (todo.id === id) {
//                 return {
//                     ...todo,
//                     task: todo.task.toUpperCase()
//                 };
//             }
//             return todo; // important to return the original if not modified
//         })
//     );
// };



//     return (
//         <div>
//             <input placeholder="Add a Task" value={newTodo} onChange={updateTodovalue} />
//             <br /><br />
//             <button onClick={addNewTask}>Add Task</button>
//             <br /><br /><br /><br />

//             <hr />
//             <h4>Task Todo</h4>
//             <ul>
//                 {todos.map((todo) => (
//                     <li key={todo.id}>
//                         <span>{todo.task}</span>
//                         <button onClick={() => deleteTodo(todo.id)}>delete</button>
//                         <button onClick={() => UpperCaseOne(todo.id)}>UpperCase One</button>
//                     </li>
//                 ))}
//             </ul>
//             <br /><br /><br /><br />
//             <button onClick={upperCaseAll}>UpperCase All</button>
//         </div>
//     );
// }

// import { useState } from "react";
// import { v4 as uuid4 } from "uuid";

// export default function TodoList() {
//     const [todos, setTodos] = useState([{ task: "sample-task", id: uuid4(), styled: false }]);
//     const [newTodo, setNewTodo] = useState("");

//     const addNewTask = () => {
//         if (newTodo.trim() === "") return;
//         setTodos((prevTodos) => [
//             ...prevTodos,
//             { task: newTodo, id: uuid4(), styled: false }
//         ]);
//         setNewTodo("");
//     };

//     const updateTodovalue = (event) => {
//         setNewTodo(event.target.value);
//     };

//     const deleteTodo = (id) => {
//         setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
//     };

//     const upperCaseAll = () => {
//         setTodos((prevTodos) =>
//             prevTodos.map((todo) => ({
//                 ...todo,
//                 task: todo.task.toUpperCase(),
//                 styled: true,
//             }))
//         );
//     };

//     const UpperCaseOne = (id) => {
//         setTodos((prevTodos) =>
//             prevTodos.map((todo) => {
//                 if (todo.id === id) {
//                     return {
//                         ...todo,
//                         task: todo.task.toUpperCase(),
//                         styled: true,
//                     };
//                 }
//                 return todo;
//             })
//         );
//     };

//     // Inline style for input and buttons
//     const inputStyle = {
//         padding: "8px",
//         width: "300px",
//         fontSize: "16px",
//         marginBottom: "10px"
//     };

//     const buttonStyle = {
//         padding: "8px 12px",
//         margin: "0 5px",
//         fontSize: "14px",
//         cursor: "pointer"
//     };

//     const listItemStyle = {
//         marginBottom: "10px",
//         fontSize: "18px",
//         display: "flex",
//         alignItems: "center",
//         gap: "10px"
//     };

//     const highlightedStyle = {
//         fontWeight: "bold",
//         backgroundColor: "#fff3cd",
//         padding: "4px 8px",
//         borderRadius: "5px"
//     };

//     return (
//         <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//             <input
//                 placeholder="Add a Task"
//                 value={newTodo}
//                 onChange={updateTodovalue}
//                 style={inputStyle}
//             />
//             <br /><br />
//             <button onClick={addNewTask} style={buttonStyle}>Add Task</button>
//             <br /><br /><br /><br />

//             <hr />
//             <h4>Task Todo</h4>
//             <ul style={{ listStyleType: "none", padding: 0 }}>
//                 {todos.map((todo) => (
//                     <li key={todo.id} style={listItemStyle}>
//                         <span style={todo.styled ? highlightedStyle : {}}>
//                             {todo.task}
//                         </span>
//                         <button onClick={() => deleteTodo(todo.id)} style={buttonStyle}>Delete</button>
//                         <button onClick={() => UpperCaseOne(todo.id)} style={buttonStyle}>UpperCase One</button>
//                     </li>
//                 ))}
//             </ul>
//             <br /><br /><br /><br />
//             <button onClick={upperCaseAll} style={buttonStyle}>UpperCase All</button>
//         </div>
//     );
// }


