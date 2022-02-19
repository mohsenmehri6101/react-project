import React, {useState} from "react";

function FormAddTodo(props) {
    const [text, setText] = useState('');

    let formHandler = (event) => {
        event.preventDefault();
        props.add(text);
        setText('')
    }

    let inputHandler = (event) => setText(event.target.value)

    return (
        <form className="row g-3" onSubmit={formHandler}>
            <div className="col-auto">
                {/*<label htmlFor="todo" className="visually-hidden"></label>*/}
                <input
                    name="todo"
                    value={text}
                    onChange={inputHandler}
                    type="text"
                    className="form-control"
                    placeholder="کار خود را به لیست اضافه کن..."
                />
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-outline-primary mb-3">اضافه کردن</button>
            </div>
        </form>
    );
}

export default FormAddTodo
