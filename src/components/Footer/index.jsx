import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

    changeAll = (e) => {
        this.props.changeAll(e.target.checked)
    }

    clearAll = (e) => {
        e.preventDefault()
        this.props.clearAll()
    }

    render() {
        const { todos } = this.props
        let completeTodos = todos.filter((todo) => {
            return todo.done
        })
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.changeAll} />
                </label>
                <span>
                    <span>已完成{completeTodos.length}</span> / 全部{todos.length}
                </span>
                <button onClick={this.clearAll} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}