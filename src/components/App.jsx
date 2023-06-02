import ToDolist from './TodoList';
// import Card from './Card';
import data from './data/data.json';
import { Component } from 'react';
import ToDo from './ToDo/ToDo';
import { nanoid } from 'nanoid';
import { AppContainer } from './App.styled';
import Check from './Check';

export class App extends Component {
  state = {
    todos: data,
  };

  addTodo = ({ name, discription, adress }) => {
    let newTodo = {
      id: nanoid(),
      name,
      discription,
      adress,
    };

    this.setState(PrevState => ({
      todos: [...PrevState.todos, newTodo],
    }));
  };

  show = data => {
    console.log(data);
  };

  deleteTodo = id => {
    this.setState(PrevState => ({
      todos: PrevState.todos.filter(item => {
        return item.id !== id;
      }),
    }));
  };

  render() {
    // const { todos } = this.state;
    return (
      <AppContainer>
        {/* <ToDo addTodo={this.addTodo}></ToDo> */}
        {/* <ToDolist data={todos} deleteTodo={this.deleteTodo}></ToDolist> */}
        <Check show={this.show}></Check>
      </AppContainer>
    );
  }
}
