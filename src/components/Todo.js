import React from 'react';

function Todo(props) {
    let {text}=props
    return (
        <div className="col-6 mb-2">
            <div className="d-flex justify-content-between border rounded p-3" >
                <div>
                    {text}
                </div>
                <div>
                    <button type="button" className="btn btn-outline-info btn-sm mx-1">ویرایش</button>
                    <button type="button" className="btn btn-outline-danger btn-sm mx-1">حذف</button>
                </div>
            </div>
        </div>
    )
}

export default Todo;
