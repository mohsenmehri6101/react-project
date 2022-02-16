// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.rtl.css'
// import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import Header from './components/Header'

// import Slider from './components/Slider'

function App() {
    return (
        <>
            <Header/>
            <main className="container-fluid">
                {/*<Slider />*/}
                <section className="jumbotron bg-light py-5">
                    <div className="container d-flex flex-column align-items-center">
                        <h1 className="jumbotron-heading">خوش آمدید!</h1>
                        <p className="lead text-muted">برای شروع چند تا کار به لیست خود اضافه کنید...</p>
                        <form className="row g-3">
                            <div className="col-auto">
                                <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
                                <input type="text" className="form-control"
                                       placeholder="کار خود را به لیست اضافه کن..."/>
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-outline-primary mb-3">اضافه کردن</button>
                            </div>
                        </form>
                    </div>
                </section>
                <div className="todosList">
                    <div className="container">
                        <div className="d-flex flex-column align-items-center ">
                            <nav className="col-6 mb-3">
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a className="nav-item nav-link active font-weight-bold"
                                       id="nav-home-tab">انجام نشده <span className="badge badge-secondary">9</span></a>
                                    <a className="nav-item nav-link font-weight-bold" id="nav-profile-tab">انجام شده <span
                                        className="badge badge-success">9</span></a>
                                </div>
                            </nav>
                            <div className="col-6 mb-2">
                                <div className="d-flex justify-content-between align-items-center border rounded p-3">
                                    <div>
                                        سلام ری اکت
                                    </div>
                                    <div>
                                        <button type="button" className="btn btn-outline-info btn-sm mx-1">ویرایش</button>
                                        <button type="button" className="btn btn-outline-danger btn-sm mx-1">حذف</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;
