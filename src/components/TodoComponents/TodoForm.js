import React from 'react';

const TodoForm = (props) => {
    return (
        <form className='todo-form' onSubmit={props.newTodo}>
            <input 
                type='text'
                name='taskInput'
                placeholder='... New Task'
                value={props.newTodo}
                onChange={props.changeHandler} />
            <button className='submit-button'>Submit</button>
            <button className='clear-button' onClick={props.clearCompleted}>Clear</button>
        </form>
    )
}

export default TodoForm;