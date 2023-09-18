import React from "react";
import Nota from "./Nota";
import AddNote from "./AddNote";

const Notes = ({ notes , handleAddNote ,handleDeleteNote}) => {
    return (
        <div className="notes-list">
            {
                notes.map(
                    (note) =>( 
                        <Nota
                            id= {note.id}
                            text = {note.text}
                            date={note.date} 
                            handleDeleteNote ={handleDeleteNote}
                        />
                    )
                )
            }
            <AddNote handleAddNote = {handleAddNote}/>
        </div>
    )
};

export default Notes;