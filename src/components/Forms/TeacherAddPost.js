import React, {Component} from 'react';
import {Form, FormGroup, Input, Label} from "reactstrap";
import Image from "./img/t1.png";
import TeacherService from "../../service/TeacherService";

class TeacherAddPost extends Component {



    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
           post: '',



        }
        console.log(this.props.match.params.id)
        this.changePostHandler = this.changePostHandler.bind(this);
        this.addPost = this.addPost.bind(this);

    }




    addPost = (e) => {
        e.preventDefault();
        let post = {post: this.state.post};
        console.log('post => ' + JSON.stringify(post));

        TeacherService.addPostByTeacher(post,this.state.id).then(res=>{
            this.props.history.push('/teacher')
        });


    };

    changePostHandler = (event) => {
        this.setState({post: event.target.value})
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
                            <h3 className="h2">Dodaj Post</h3>

                            <Form>
                                <FormGroup>
                                    <Label>Dodaj treść Posta</Label>

                                    <Input type="text" placeholder="Post" name='post' value={this.state.post}
                                           onChange={this.changePostHandler}></Input>

                                </FormGroup>

                                <br>
                                </br>
                                <button className="btn btn-success" onClick={this.addPost} >Dodaj</button>

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

export default TeacherAddPost;