import React from 'react';
import { tsPropertySignature } from '@babel/types';

const Todo = (props) => {
    return (
        <div 
            className={`todos ${props.todos.completed ? 'completed' : ''}`}
            onClick={() => props.toggleTodo(props.todos.id)}
        >
            <h4>{props.todos.task}</h4>
        </div>
    )
}

export default Todo;