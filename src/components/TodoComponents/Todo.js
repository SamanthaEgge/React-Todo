import React from 'react';

const Todo = (props) => {
    return (
        <div className='todo-item'>
            <h3>{props.todos.task}</h3>
        </div>
    )
}

export default Todo;