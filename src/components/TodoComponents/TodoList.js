import React from 'react';

import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div className='todo-list'>
            {this.props.todos.map(task => (
                <Todo 
                newTodo={task} 
                id={task.id}
                />
            ))}
        </div>
    )
}

export default TodoList;