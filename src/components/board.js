import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../css/Board.css";
import Note from "./Note";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Navigation from "./Navigation";

class Board extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  addNote() {
    this.state.notes.push({
      id: Date.now()
    });
    this.setState({
      notes: this.state.notes
    });
  }

  deleteNote(id) {
    let newNoteArr = this.state.notes;
    newNoteArr.map((note, index) => {
      if (id === note.id) {
        newNoteArr.splice(index, 1);
      }
    });
    this.setState({
      notes: newNoteArr
    });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
        <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
      </BrowserRouter> 
        <div className="container">
          <button
            className="btn btn-success add-button"
            onClick={this.addNote.bind(this)}
          >
            Add Book
          </button>
          <div className="row">
            {this.state.notes.map(note => {
              return (
                <Note
                  key={note.id}
                  id={note.id}
                  deleteHandler={this.deleteNote.bind(this)}
                />
              );
            })}
          </div>
          <div />
        </div>
      </div>
    );
  }
}

export default Board;
