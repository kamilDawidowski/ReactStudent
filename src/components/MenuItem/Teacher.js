import React, {Component} from 'react';
import './css/cssTeacher.css';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Teacher extends Component {

    // Pobieranie danych
    state = {
        loading: true,
        teachers: [],

    }


    async componentDidMount() {
        const url = "/findAllTeachers" +
            "";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        this.setState({teachers: data, loading: false});

    }


    async remove(id) {
        await fetch(`/teacher/deletTeacher/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedClients = [...this.state.teachers].filter(i => i.id !== id);
            this.setState({teachers: updatedClients});
            toast.error("Nauczyciel został usuniety");
        });
    }

    updateTeacher(id) {
        var url = '/updateTeacher/';
        var url2 = url.toString() + id.toString();
        this.props.history.push(url2);
        // this.props.history.push('/updateTeacher/&{id}');
    }

    addPostByTeacher(id) {
        var url = '/addPostByTeacher/';
        var url3 = url.toString() + id.toString();
        this.props.history.push(url3);
        // this.props.history.push('/updateTeacher/&{id}');
    }

    addStudentByTeacher(id) {
        var url = '/addStudentByTeacher/';
        var url3 = url.toString() + id.toString();
        this.props.history.push(url3);
        // this.props.history.push('/updateTeacher/&{id}');
    }


    render() {

        if (this.state.loading) {
            return <div>loading ...</div>
        }

        if (this.state.teachers === null) {
            return <div>No Teachers ...</div>
        }

        return (
            <div className="container-fluid">

                {
                    this.state.teachers.map((teachers) => {
                        return <>
                            <div className="card-group">


                                    <div className="card">
                                        <div className="card-body">
                                            <div className='row'>
                                                <div className="col">
                                            <h5 className="card-title text">{teachers.name}</h5>
                                            <p className="card-text"><i
                                                className="far fa-envelope"> {teachers.email}</i></p>
                                            <p className="card-text"><small className="text-muted">Numer identyfikacyjny
                                                : {teachers.id}</small>
                                            </p>
                                                </div>
                                                    <div className="col">
                                                        <div className="btn-group" role="group"
                                                             aria-label="Basic mixed styles example">
                                                            <button type="button" className="btn btn-danger  "
                                                                    onClick={() => this.remove(teachers.id)}>Usuń
                                                            </button>
                                                            <ToastContainer/>

                                                            <button className="btn btn-success " role="button "
                                                                    onClick={() => this.updateTeacher(teachers.id)}>Aktulizuj</button>

                                                            <button type="button" className="btn btn-info  "
                                                                    onClick={() => this.addPostByTeacher(teachers.id)}> Dodaj Post
                                                            </button>

                                                            <button type="button" className="btn btn-dark  "
                                                                    onClick={() => this.addStudentByTeacher(teachers.id)}> Dodaj Studenta
                                                            </button>

                                                        </div>
                                                    </div>

                                    </div>
                                    </div>

                                </div>
                            </div>
                        </>
                    })
                }
                <a className="btn btn-primary" href="/addTeacher" role="button">Dodaj Nauczyciela</a>
                {/*Koniec tabeli*/}
                {/*<h2 className="h2 title">Lista nauczycieli</h2>*/}
                {/*    <table className="table table-success table-striped  table-hover">*/}
                {/*        <thead>*/}

                {/*        <tr>*/}
                {/*            <th scope="col">ID</th>*/}
                {/*            <th scope="col"><i className="fas fa-user-graduate"> Imię</i></th>*/}
                {/*            <th scope="col"><i className="far fa-envelope"> Email</i></th>*/}
                {/*            <th scope="col"><i className="fas fa-wrench"> Akcja</i></th>*/}
                {/*        </tr>*/}

                {/*        </thead>*/}
                {/*        <tbody>*/}
                {/*        {*/}
                {/*        this.state.teachers.map((teachers) => {*/}
                {/*            return <>*/}

                {/*                <tr>*/}
                {/*                    <th scope="row">{teachers.id}</th>*/}
                {/*                    <td>{teachers.name}</td>*/}
                {/*                    <td>{teachers.email}</td>*/}
                {/*                    <td>*/}
                {/*                        <div className="btn-group" role="group"*/}
                {/*                             aria-label="Basic mixed styles example">*/}
                {/*                            <button type="button" className="btn btn-danger  "*/}
                {/*                                    onClick={() => this.remove(teachers.id)}>Usuń*/}
                {/*                            </button>*/}
                {/*                            <ToastContainer/>*/}

                {/*                            <button className="btn btn-success " role="button "*/}
                {/*                                    onClick={() => this.updateTeacher(teachers.id)}>Aktulizuj</button>*/}

                {/*                            <button type="button" className="btn btn-info  "*/}
                {/*                                    onClick={() => this.addPostByTeacher(teachers.id)}> Dodaj Post*/}
                {/*                            </button>*/}

                {/*                            <button type="button" className="btn btn-dark  "*/}
                {/*                                    onClick={() => this.addStudentByTeacher(teachers.id)}> Dodaj Studenta*/}
                {/*                            </button>*/}

                {/*                        </div>*/}
                {/*                    </td>*/}
                {/*                </tr>*/}

                {/*            </>*/}
                {/*        })*/}
                {/*        }*/}
                {/*        </tbody>*/}
                {/*    </table>*/}

            </div>
        );
    }
}

export default Teacher;