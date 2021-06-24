import React, {Component} from 'react';
import {BrowserRouter, Link, NavLink, Route, Switch} from 'react-router-dom'

class Header extends Component {

    render() {


        return (
            <nav className="navbar navbar-dark bg-dark " >
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Menu</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">

                                    <a className="nav-link"  href="/teacher"  > Nauczyciele</a>





                            </li>



                            <li className="nav-item">

                                    <a className="nav-link" href="/student" >Studenci</a>

                            </li>
                            <li className="nav-item">

                                    <a className="nav-link" href="/post" >Posty</a>

                            </li>
                        </ul>

                    </div>
                </div>


            </nav>
            



        );
    }
}




export default Header;
