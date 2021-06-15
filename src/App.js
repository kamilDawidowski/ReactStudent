import './App.css';
import {Component} from "react";
import React from 'react';
import Dashboard from "./components/Dashboard";
import {Navbar} from "reactstrap";
import Header from "./components/Headers/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Image from "./szko.png"
import Teacher from "./components/MenuItem/Teacher";
import Student from "./components/MenuItem/Student";
import Post from "./components/MenuItem/Post";
import TeacherAdd from "./components/Forms/TeacherAdd";
import TeacherEdit from "./components/Forms/TeacherEdit";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TeacherAddPost from "./components/Forms/TeacherAddPost";
import TeacherAddStudent from "./components/Forms/TeacherAddStudent";

class App extends Component {


    render() {

        return (

            <div className="App">

                <Header/>


                    <BrowserRouter>

                        <Switch>
                            <Route path="/" exact component={Teacher}/>
                            <Route path="/teacher" exact component={Teacher}/>
                            <Route path="/student" component={Student}/>
                            <Route path="/post" component={Post}/>
                            <Route path="/addTeacher" component={TeacherAdd}/>
                            <Route path="/updateTeacher/:id" component={TeacherEdit} />
                            <Route path="/addPostByTeacher/:id" component={TeacherAddPost} />
                            <Route path="/addStudentByTeacher/:id" component={TeacherAddStudent} />
                        </Switch>
                    </BrowserRouter>



                <Dashboard/>


            </div>

        );
    }
}

export default App;

