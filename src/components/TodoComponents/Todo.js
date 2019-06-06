import React from 'react';
import { tsPropertySignature } from '@babel/types';

import './Todo.css'

const Todo = (props) => {
    return (
        <div 
            className={`complete-${props.todos.completed}`}
            onClick={() => props.toggleTodo(props.todos.id)}
        >
            <h4><i class="fas fa-angle-double-right"></i> &nbsp;{props.todos.task}</h4>
        </div>
    )
}

export default Todo;