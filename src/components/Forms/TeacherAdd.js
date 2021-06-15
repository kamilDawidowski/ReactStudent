import React, {Component} from 'react';
import Image from "./img/t1.png"
import {Button, Form, FormFeedback, FormGroup, Input, Label} from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TeacherService from "../../service/TeacherService";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

class TeacherAdd extends Component {


    constructor(props) {
        super();
        // eslint-disable-next-line react-hooks/rules-of-hooks



        this.state = {

            // id: this.props.match.params.id,
            name: '',
            email: ''



        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveTeacher = this.saveTeacher.bind(this);
    }

    saveTeacher = (e) => {
        e.preventDefault();
        let teacher = {name: this.state.name, email: this.state.email};
        console.log('teacher => ' + JSON.stringify(teacher));
        TeacherService.createTeacher(teacher).then(res => {
            this.props.history.push('/teacher')
        });


    };

    changeNameHandler = (event) => {
        this.setState({name: event.target.value})
    };
    changeEmailHandler = (event) => {
        this.setState({email: event.target.value})
    };




    cancel() {
        this.props.history.push('/teacher');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Employee</h3>
        } else {
            return <h3 className="text-center">Update Employee</h3>
        }
    }


    render() {


        return (
            <div>

                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3 className="h2">Dodaj nauczyciela</h3>

                            <Form>
                                <FormGroup>
                                    <Label>Imię i nazwisko</Label>

                                    <Input type="text" placeholder="Wprowadź dane" name='name' value={this.state.name}
                                           onChange={this.changeNameHandler}></Input>

                                </FormGroup>
                                <FormGroup>
                                    <Label>Email</Label>

                                    <Input type="text" placeholder="Wprowadź dane" name='email' value={this.state.email}
                                           onChange={this.changeEmailHandler}></Input>

                                </FormGroup>
                                <br>
                                </br>
                                <button className="btn btn-success" onClick={this.saveTeacher} >Dodaj</button>




                                {/* toast*/}





                                <button className="btn btn-danger" onClick={this.cancel.bind(this)}
                                        style={{marginLeft: "10px"}}>Cofnij
                                </button>
                            </Form>

                        </div>
                        <div className="col">
                            <img src={Image} className="img-fluid img" alt="..."/>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default TeacherAdd;