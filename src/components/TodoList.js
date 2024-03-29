import React from 'react';

const TodoList = ({ todos, settodos, setEditTodo }) => {

    const handleComplete = (todo) => {
        settodos(
            todos.map((item) =>
                item.id === todo.id ? { ...item, completed: !item.completed } : item
            )
        );
    };
    const handleEdit = (id) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    };

    const handleDelete = (id) => {
        settodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            {todos.map((todo) => (
                <li className='list-item' key={todo.id}>
                    <input
                        type="text"
                        value={todo.title}
                        className={`list ${todo.completed ? "complete" : ""}`}
                        onChange={(event) => event.preventDefault()}
                    />
                    <div>
                        <button className='button-complete task-button' onClick={() => handleComplete(todo)}>
                            <i className='fa fa-check-circle'></i>
                        </button>

                        <button className='button-edit task-button' onClick={() => handleEdit(todo.id)}>
                            <i className='fa fa-edit'></i>
                        </button>

                        <button className='button-delete task-button' onClick={() => handleDelete(todo.id)}>
                            <i className='fa fa-trash'></i>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    );
};

export default TodoList;
