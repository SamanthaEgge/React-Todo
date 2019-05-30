import React from 'react';

import './Todo.css'

const TodoForm = (props) => {
    return (
        <form className='todo-form' onSubmit={props.addTodo}>
            <input 
                type='text'
                name='todoInput'
                placeholder='... New Task'
                value={props.todoInput}
                onChange={props.changeHandler} />
            <button className='submit-button'>Submit</button>
            <button className='clear-button' onClick={props.clearCompleted}>Clear</button>
        </form>
    )
}

export default TodoForm;