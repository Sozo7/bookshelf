import React, {Component} from "react";
import "../css/Board.css";
import Note from './Note'

class Board extends Component {
    constructor() {
        super();  //inherits parent's stuff
        this.state = { //state has data that CAN change
            notes: [
                {
                    title: "Class Notes",
                    body: "Use constructors when extending another class"
                },
                {
                    title: "My Address", body: "Nunya"
                },
                {
                    title: "React Notes", body: "Everything in React is a component"
                }
            ]
        }
    }
    render() {
        return (
        <div>
            <div className="div-board">
                <div className="row">
                {
                    this.state.notes.map(note => {
                        return <Note title={note.title} body={note.body} />
                    })
                }
                </div>
            </div>
            <button className="btn btn-success add-button" onClick={this.addNote.bind(this)}>Add</button>
        </div>
        )
    }


addNote() {
    this.state.notes.push(
        {
            title: "New Notes Title",
            body: "New Body Title"
        }
    )
    this.setState({
        notes: this.state.notes
    })
  }
}

export default Board;