import React, {Component} from 'react';
import Image from "./img/student.png";
import './css/cssStudent.css';

class Student extends Component {


    state = {
        loading: true,
        students: [],

    }


    async componentDidMount() {
        const url = "/student/getStudents";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        this.setState({students: data, loading: false});

    }


    render() {
        if (this.state.loading) {
            return <div>loading ...</div>
        }

        if (this.state.posts === null) {
            return <div>No Students ...</div>
        }
        return (

            <div className="container">




                <div className="row">


                    {
                        this.state.students.map((students) => {
                            return <>
                                <div className="col-4 col-4-padding">

                                    <div className="card card-style">


                                        <img src={Image} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">{students.name}</h5>
                                            <p className="card-text">{students.surname} </p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Email: {students.email}</li>
                                            <li className="list-group-item">Data urodzenia: {students.dob}</li>
                                            <li className="list-group-item">Wiek: {students.age}</li>
                                        </ul>
                                    </div>

                                </div>
                            </>


                        })
                    }


                </div>
            </div>


        );
    }
}

export default Student;