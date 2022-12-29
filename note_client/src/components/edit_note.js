import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
export default class NoteList extends Component {

    constructor(props){
        super(props)
        this.onChangeNoteTitle = this.onChangeNoteTitle.bind(this);
        this.onChangeNoteBody = this.onChangeNoteBody.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            body: ''
        }
        

    }

    componentDidMount(){
        axios.get('http://localhost:8082/api/note/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                title: res.data.title,
                body: res.data.body
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }


    onChangeNoteTitle(e){
        this.setState({title: e.target.value})
    }

    onChangeNoteBody(e){
        this.setState({body: e.target.value})
    }

    onSubmit(e){
        e.preventDefault() 
        const noteObject = {
            title: this.state.title,
            body: this.state.body,
        }
        console.log(noteObject)
        axios.put('http://localhost:8082/api/note/',this.props.match.params.id,noteObject)
            .then(res => {
                console.log(res.data)
                console.log('Note succesfully updated')
            }).catch((error) => {
                console.log(error)
            });
        this.props.history.push('/note-list')    
    }

    render() {
        return (
            <div class="form-wrapper">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" value={this.state.title} onChange={this.onChangeNoteTitle}/>
                    </Form.Group>
                    <Form.Group controlId="Body">
                        <Form.Label>Body</Form.Label>
                        <Form.Control as="textarea" value={this.state.body} onChange={this.onChangeNoteBody}/>
                    </Form.Group>
                    <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
                        Update Note
                    </Button>
                </Form>
            </div>
        );
    }
}