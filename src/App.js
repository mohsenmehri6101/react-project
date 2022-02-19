import React, {Component} from "react";

import 'bootstrap/dist/css/bootstrap.rtl.css'
import './components/css/common.css'

// import components
import Header from './components/Header'
import Todo from './components/Todo'
import FormAddTodo from "./components/FormAddTodo";

class App extends Component {

    translations = {
        list_todo_is_empty_undone: 'کار انجام نشده ای وجود ندارد',
        list_todo_is_empty_done: 'کار انجام شده ای وجود ندارد',
        button_done: 'انجام شده',
        button_undone: 'انجام نشده',
    }

    state = {
        statusDone: false,
        todos: [
            {key: Date.now(), done: false, text: 'کار اولی که باید انجام شود'},
            {key: Date.now() + 1, done: false, text: 'کار دوم که باید انجام شود'},
        ],
    }

    addTodo(text) {
        let new_todo = {key: Date.now(), done: false, text}
        this.setState((prevState) => {
            return {
                todos: [...prevState.todos, new_todo]
            }
        })
    }

    countDoneOrUndone(statusDone) {
        // return '11';
        return this.state.todos.filter(todo => todo.done === statusDone).length
    }

    toggleStatusDone(statusDone_ = null) {
        this.setState((previousState) => {
            return {statusDone: statusDone_ || !previousState.statusDone}
        })
    }

    render() {
        let {todos, statusDone} = this.state;
        let filter_todos = todos.filter(todo => todo.done === statusDone)
        return (
            <>
                <Header/>
                <main className="container-fluid">
                    {/*<Slider />*/}
                    <section className="jumbotron bg-light py-5">
                        <div className="container d-flex flex-column align-items-center">
                            <h1 className="jumbotron-heading">خوش آمدید!</h1>
                            <p className="lead text-muted">برای شروع چند تا کار به لیست خود اضافه کنید...</p>
                            <FormAddTodo add={this.addTodo.bind(this)}/>
                        </div>
                    </section>
                    <div className="todosList">
                        <div className="container">
                            <div className="d-flex flex-column align-items-center ">
                                <nav className="col-6 mb-3">
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <a
                                            onClick={this.toggleStatusDone.bind(this, false)}
                                            className={`nav-item cursor_pointer nav-link font-weight-bold ${!statusDone ? 'active' : ''}`}
                                        >
                                            {this.translations.button_undone}
                                            <span
                                                className="text-white font-monospace bg-danger p-1 mx-1 rounded-circle">
                                                {this.state.todos.filter(todo => todo.done === false).length}
                                            </span>
                                        </a>
                                        <a
                                            onClick={this.toggleStatusDone.bind(this, true)}
                                            className={`nav-item cursor_pointer nav-link font-weight-bold ${statusDone ? 'active' : ''}`}
                                        >
                                            {this.translations.button_done}
                                            <span
                                                className="text-white font-monospace bg-success p-1 mx-1 rounded-circle">
                                                {this.state.todos.filter(todo => todo.done === true).length}
                                            </span>
                                        </a>
                                    </div>
                                </nav>
                                {
                                    filter_todos.length === 0
                                        ?
                                        <p className="h5 py-5"
                                           style={{color: '#dc3545'}}>
                                            {
                                                statusDone
                                                    ?
                                                    this.translations.list_todo_is_empty_done
                                                    :
                                                    this.translations.list_todo_is_empty_undone
                                            }
                                        </p>
                                        :
                                        filter_todos.map((todo, key) => {
                                            return <Todo key={key} text={todo.text}/>
                                        })
                                }
                            </div>
                        </div>
                    </div>
                </main>
            </>
        );
    }
}

export default App;
