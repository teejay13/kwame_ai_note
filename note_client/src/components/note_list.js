import React, {Component} from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import NoteTableRow from './note_table_row.js';


export default class CreateNote extends Component {

    constructor(props) {
        super(props)
        this.state={
            notes:[]
        };
    }

    componentDidMount(){
        axios.get('http://localhost:8082/api/note/')
            .then(res => {
                this.setState({
                    notes :  res.data
                })
            })
            .catch((error) =>  {
                console.log(error)
            })
    }

    DataTable() {
        return this.state.notes.map((res, i) => {
          return <NoteTableRow obj={res} key={i} />;
        });
      }

    render() {
        return (
            <div className="table-wrapper">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Note</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.DataTable()}
                    </tbody>
                </Table>
            </div>
        );
    }
}