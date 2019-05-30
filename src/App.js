import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state = {
      todos: [ 
          {
            task: 'Pet a dog',
            id: 1,
            completed: true
        },
        {
            task: 'Pet a second dog',
            id: 2,
            completed: false
        }
      ],

    newTodo: ''
};

changeHandler = (event) => {
    this.setState({ 
        newTodo: event.target.value
    });
};

addTodo = (event) => {
    event.preventDefault();
    const addedTodo = {
        task: this.state.addedTodo,
        id: Date.now(),
        completed: false
    };
    this.setState({
        todos: [...this.state.todos, addedTodo],
        newTodo: '',
        // [event.target.value]: event.target.value
    })
};

clearCompleted = (event) => {
    event.preventDefault();
    this.setState({
        todos: this.state.todos.filter((task) => !task.complete)
    })
}

render () {
    return (
        <div>
            <h2>Todo List</h2>
            <TodoList 
            todos={this.state.todos} />
            <TodoForm 
            newTodo={this.state.newTodo}
            changeHandler={this.state.changeHandler}
            addTodo={this.state.addTodo}
            clearCompleted={this.state.clearCompleted} />
        </div>
    );
}
}

export default App;
