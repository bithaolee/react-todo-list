import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

    state = {
        mouse: false,
    }

    handleCheck = (id) => {
        return (e) => {
            this.props.changeTodo(id, e.target.checked)
        }
    }

    handleMouse = (flag) => {
        return (e) => {
            this.setState({
                mouse: flag,
            })
        }
    }

    handleDelete = (id) => {
        return (e) => {
            if (window.confirm('确定删除吗？')) {
                this.props.deleteTodo(id)
            }
        }
    }

    render() {
        const { id, name, done } = this.props
        const { mouse } = this.state
        return (
            <li style={{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                <label>
                    <input id={id} onChange={this.handleCheck(id)} type="checkbox" checked={done} />
                    <span>{name}</span>
                </label>
                <button onClick={this.handleDelete(id)} className="btn btn-danger" style={{display:mouse ? 'block' : 'none'}}>删除</button>
            </li>
        )
    }
}