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
            completed: false
        },
        {
            task: 'Pet a second dog',
            id: 2,
            completed: false
        }
      ],

    todoInput: ''
};

changeHandler = (event) => {
    event.preventDefault()
    this.setState({ 
        [event.target.name]: event.target.value
    });
};

addTodo = (event) => {
    event.preventDefault();
    const newTodo = {
        task: this.state.todoInput,
        id: Date.now(),
        completed: false
    };
    this.setState({
        todos: [...this.state.todos, newTodo],
        todoInput: '',
    })
};

toggleTodo = (id) => {
    this.setState(prevState => {
        return {
          todos: prevState.todos.map(task => {
            if (task.id === id) {
              return {
                ...task,
                completed: !task.completed
              };
            } else {
              return task;
            }
          })
        };
    });
}

clearCompleted = (event) => {
    event.preventDefault();
    this.setState({
        todos: this.state.todos.filter((task) => !task.completed)
    })
}

render () {
    return (
        <div>
            <h2>Todo List</h2>
            <TodoList 
            todos={this.state.todos} 
            toggleTodo={this.toggleTodo} />
            <TodoForm 
            todoInput={this.state.todoInput}
            changeHandler={this.changeHandler}
            addTodo={this.addTodo}
            clearCompleted={this.clearCompleted} />
        </div>
    );
}
}

export default App;
