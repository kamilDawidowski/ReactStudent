import React, {Component} from 'react';
import './cssProjetItem.css';
import {toast, ToastContainer} from "react-toastify";

class ProjectItem extends Component {


    state = {
        loading: true,
        posts: [],
    }


    async componentDidMount() {
        const url = "/postList";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        this.setState({posts: data, loading: false});

    }

    async remove(id) {
        await fetch(`/post/deletPost/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        this.componentDidMount()
        toast.error("Post został usuniety");
    }


    render() {
        if (this.state.loading) {
            return <div>loading ...</div>
        }

        if (this.state.posts === null) {
            return <div>No Posts ...</div>
        }
        return (


            <div className="container post-font ">

                {
                    this.state.posts.map((posts) => {
                        return <>
                            <div className="card card-body bg-light mb-3 ">

                                {/* Dane posta */}


                                <div className="row post-color">

                                    <div className="col-2">
                                        <i className="fas fa-school icon-school"></i>
                                    </div>
                                    <div className="col-lg-6 col-md-4 col-8">
                                        <h3>POST</h3>
                                        <i className="fas fa-user-graduate"> </i>
                                        <p>ID: {posts.postId} </p>
                                    </div>

                                    <div className="pasek-position">

                                        <br></br>

                                    </div>


                                    <div className="container">
                                        <div className="row">
                                            <div className="col-4">


                                                <button type="button" className="btn btn-danger btn-lg btn-margin" onClick={() => this.remove(posts.postId)}>Usuń Post
                                                </button>
                                                <ToastContainer/>


                                            </div>
                                            <div className="col-8 post-text">{posts.post}</div>
                                        </div>

                                    </div>


                                    <div className="data-position">

                                        <i className="fas fa-calendar-alt">  {posts.data}</i>

                                    </div>


                                </div>


                                {/*    Dane posta*/}


                            </div>
                        </>
                    })
                }
            </div>
        );
    }
}

export default ProjectItem;