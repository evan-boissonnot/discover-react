import React, { Component } from 'react';
import { observer } from "mobx-react";

import TodoView from './TodoView';
import { Timer, timerData } from './Timer';

@observer
class TodoList extends React.Component {
  render() {
    const store = this.props.store;

    return (
      <div>
        { store.report }
        <ul>
        { store.todos.map(
          (todo, idx) => <TodoView todo={ todo } key={ idx } />
        ) }
        </ul>
        { store.pendingRequests > 0 ? <marquee>Loading...</marquee> : null }
        <button onClick={ this.onNewTodo }>New Todo</button>
        <small> (double-click a todo to edit)</small>

        <Timer store={timerData}></Timer>

      </div>

    );
  }

  onNewTodo = () => {
    this.props.store.addTodo(prompt('Enter a new todo:','coffee plz'));
  }
}

export default TodoList;