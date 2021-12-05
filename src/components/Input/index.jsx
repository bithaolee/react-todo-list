import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Input extends Component {

    static propTypes = {
        addTodo: PropTypes.func.isRequired,
    }

    handleKeyup = (e) => {
        const { keyCode, target } = e
        if (keyCode !== 13) return
        if (!target.value) return
        const todo = {id:nanoid(), name:target.value, done:false}
        this.props.addTodo(todo)
        e.target.value = ''
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyup} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}