import React from 'react';

const Todo = (props) => {
    return (
        <div className='todo-item'>
            <h4>{props.todos.task}</h4>
        </div>
    )
}

export default Todo;