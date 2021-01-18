import React from 'react' 
import './notes.css'

export const Notes = ( {notes, onRemove} ) => {
  return (
    <ul className="list-group">
      {notes.map( note => (
          <li 
            className="list-group-item"
            key={note.id}
          > 
            <div>
              <strong className="note-title"> {note.title} </strong>
              <small> {note.date}</small>
            </div>             

            <button 
              type="button" 
              className="list-group-delete" 
              onClick={() => onRemove(note.id)}
              > &times; 
            </button>
          </li>
      ))}      
    </ul>
  )
}