import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import Image from "./img/t1.png";
import TeacherService from "../../service/TeacherService";
import {useParams} from "react-router";

class TeacherEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            name: '',
            email: ''


        }
        console.log(this.props.match.params.id)
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.updateTeacher = this.updateTeacher.bind(this);

    }

    componentDidMount() {
        TeacherService.getTeacherById(this.state.id).then((res) => {
            let teacher = res.data;
            this.setState({
                name: teacher.name,
                email: teacher.email
            });
        });
    }


    updateTeacher = (e) => {
        e.preventDefault();
        let teacher = {name: this.state.name, email: this.state.email};
        console.log('teacher => ' + JSON.stringify(teacher));

        TeacherService.updateTeacher(teacher,this.state.id).then(res=>{
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


    render() {

        // eslint-disable-next-line react-hooks/rules-of-hooks


        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3 className="h2">Edytuj nauczyciela</h3>

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
                                <button className="btn btn-success" onClick={this.updateTeacher}>Dodaj</button>
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


export default TeacherEdit;