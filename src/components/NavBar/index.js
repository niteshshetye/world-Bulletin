import React, { Component } from 'react'

import {Link} from 'react-router-dom'

// business entertainment general health science sports technology


export default class index extends Component {
    render() {
        return (
            <div className="position-fixed" style={{width: '100%', zIndex: 100, top: 0}}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">World Bullatins</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/business">business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/entertainment">entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/health">health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/science">science</Link>
                                </li>
                                 <li className="nav-item">
                                    <Link className="nav-link active" to="/sports">sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/technology">technology</Link>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
