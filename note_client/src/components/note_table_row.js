import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
export default class StudentTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteNote = this.deleteNote.bind(this);
    }

    deleteNote() {
        axios.delete('http://localhost:8082/api/note/' + this.props.obj._id)
            .then((res) => {
                console.log('Note successfully deleted!')

            })
            .catch((err) => {
                console.log('Error form ShowNote_deleteClick');
            });
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.title}</td>
                <td>{this.props.obj.body}</td>
                <td>
                    <Link className="edit-link" to={"/edit-note/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteNote} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}