import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateNote extends Component {

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
        axios
            .post('http://localhost:8082/api/note', noteObject)
            .then(res => console.log(res.data));
            this.setState
                ({
                    title:'',
                    body:''
                })

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
                    Create Note
                    </Button>
                </Form>
            </div>
        );
    }
}