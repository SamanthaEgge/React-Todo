import React from 'react';

import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div className='todo-list'>
            {props.todos.map(todos => 
                <Todo 
                todos={todos}
                />
            )}
        </div>
    )
}

export default TodoList;