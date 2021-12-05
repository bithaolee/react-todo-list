import React, { Component } from 'react'
import './App.css';
import Input from './components/Input'
import List from './components/List'
import Footer from './components/Footer'

export default class App extends Component {

  state = {
    todos: [
      {id:'001', name:'吃饭', done: true},
      {id:'002', name:'睡觉', done: false}
    ]
  }

  addTodo = (todo) => {
    const { todos } = this.state
    const newTodos = [todo, ...todos]
    this.setState({
      todos: newTodos,
    })
  }

  changeTodo = (id, done) => {
    const { todos } = this.state
    const newTodos = todos.map((todo) => {
      if (todo.id === id) return {...todo, done}
      else return todo
    })
    this.setState({
      todos: newTodos,
    })
  }

  deleteTodo = (id) => {
    const { todos } = this.state
    const newTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    this.setState({
      todos: newTodos
    })
  }

  changeAll = (status) => {
    const { todos } = this.state
    const newTodos = todos.map((todo) => {
      if (status) {
        todo.done = true
      } else {
        todo.done = false
      }
      return todo
    })
    this.setState({
      todos: newTodos,
    })
  }

  clearAll = () => {
    this.setState({
      todos: []
    })
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Input addTodo={this.addTodo} />
          <List todos={todos} changeTodo={this.changeTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} changeAll={this.changeAll} clearAll={this.clearAll} />
        </div>
      </div>
    )
  }
}
