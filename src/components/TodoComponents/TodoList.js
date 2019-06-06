import React from 'react';

import './Todo.css'
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div className='todo-list'>
            {props.todos.map(todos => 
                <Todo 
                todos={todos}
                toggleTodo={props.toggleTodo}
                />
            )}
        </div>
    )
}

export default TodoList;