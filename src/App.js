import React from 'react';

import TodoList from './components/TodoComponents/TodoList';

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
    newTodo = ''
};

handleNewInput = (event) => {
    this.setState({ 
        newTodo: event.target.value
    });
};

addTodo = (event) => {
    event.preventDefault();
    const updatedTodoList = this.state.todos;
    updatedTodoList.push(this.state.newTodo);
    this.setState({
        todos: [...this.state.todos, updatedTodoList]
    })

    // Can also elimate const updatedTodo and push with the following:
    // this.setState({

    // })
};

render () {
    return (
        <div>
            {this.state.todos.map((todo, e) => <Todo key={e} todo={todo} />)}
            <form onSubmit={this.addTodo}>
                <input
                    type='text'
                    placeholder='...New Task'
                    onChange={this.handleNewInput}
                    value={this.state.newTodo}
                    name='New Todo'/>

                    <button onClick={this.addTodo}>Add Todo Item</button>
            </form>
        </div>
    );
}
}

export default App;
