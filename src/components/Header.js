import React from "react";
// import logo_green from './../images/logo_green.png'
import logo_black from './../images/logo_black.png'

export default class Header extends React.Component {

    /*constructor(props) {
        super(props);
    }*/

    render() {
        return (
            <>
                <header>
                    <nav className="navbar navbar-expand-md shadow-sm rounded-0">
                        <div className="container-fluid px-4">
                            <a className="navbar-brand" href={logo_black} target="_blank"   rel="noreferrer" >
                                <img width="30" height="auto" src={logo_black} alt="logo" />
                            </a>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">صفحه اصلی</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">تماس با ما</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" href="#" tabIndex="-1"
                                           aria-disabled="true">درباره ما</a>
                                    </li>
                                </ul>
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="جستجو کنید"  aria-label="بحث" />
                                </form>
                                <div className="d-flex">
                                    <span className="px-4"></span>
                                    <button className="btn btn-sm btn-outline-primary" >ورود</button>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </>
        );
    }
}
