import React, {Component} from 'react';
import TeacherService from "../../service/TeacherService";
import {Form, FormGroup, Input, Label} from "reactstrap";
import Image from "./img/student.png";
import TeacherAddPost from "./TeacherAddPost";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class TeacherAddStudent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            email: '',
            name: '',
            surname: '',
            dob: ''


        }
        console.log(this.props.match.params.id)

        this.changeNameHandler= this.changeNameHandler.bind(this);
        this.changeDobHandler=this.changeDobHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changeSurnameHandler=this.changeSurnameHandler.bind(this);


        this.addStudent = this.addStudent.bind(this);

    }


    addStudent = (e) => {
        e.preventDefault();
        let student = {email: this.state.email,
        name: this.state.name,
        surname: this.state.surname,
        dob: this.state.dob};
        console.log('post => ' + JSON.stringify(student));

        TeacherService.addStudentByTeacher(student, this.state.id).then(res => {
            toast.success("Student dodany!")
            this.props.history.push('/teacher')
        });


    };

    changeNameHandler = (event) => {
        this.setState({name: event.target.value})
    };
    changeSurnameHandler = (event) => {
        this.setState({surname: event.target.value})
    };
    changeEmailHandler = (event) => {
        this.setState({email: event.target.value})
    };
    changeDobHandler = (event) => {
        this.setState({dob: event.target.value})
    };


    cancel() {
        this.props.history.push('/teacher');
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3 className="h2">Dodaj Studenta</h3>

                            <Form>

                                <FormGroup>
                                    <Label>Imię </Label>

                                    <Input type="text" placeholder="Wprowadź dane" name='name' value={this.state.name}
                                           onChange={this.changeNameHandler}></Input>

                                </FormGroup>
                                <FormGroup>
                                    <Label>Nazwisko</Label>

                                    <Input type="text" placeholder="Wprowadź dane" name='surname' value={this.state.surname}
                                           onChange={this.changeSurnameHandler}></Input>

                                </FormGroup>
                                <FormGroup>
                                    <Label>Email</Label>

                                    <Input type="text" placeholder="Wprowadź dane" name='email' value={this.state.email}
                                           onChange={this.changeEmailHandler}></Input>

                                </FormGroup>
                                <FormGroup>
                                    <Label>Data urodzenia</Label>

                                    <Input type="text" placeholder="rrrr-mm-dd" name='dob' value={this.state.dob}
                                           onChange={this.changeDobHandler}></Input>

                                </FormGroup>


                                <br>
                                </br>


                                <button className="btn btn-success" onClick={this.addStudent}>Dodaj</button>


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
export default TeacherAddStudent;