import React from 'react' 
import './notes.css'

export const Notes = ( {notes, onRemove} ) => {
  return (
    <ul className="list-group">
      {notes.map( note => {
        let noteDate = new Date(note.date.toString());

        let noteDateMonth;
        if (noteDate.getMonth() < 9) {
          noteDateMonth = "0" + (noteDate.getMonth() + 1)
        } else {
          noteDateMonth = noteDate.getMonth() + 1;
        }

        let noteDateHours;
        if (noteDate.getHours() < 10) {
          noteDateHours = "0" + noteDate.getHours();
        } else {
          noteDateHours = noteDate.getHours();
        }

        let noteDateSeconds;
        if (noteDate.getSeconds() < 10) {
          noteDateSeconds = "0" + noteDate.getSeconds();
        } else {
          noteDateSeconds = noteDate.getSeconds();
        }

        let noteDateStr = noteDate.getDate() + "." + noteDateMonth + "." + noteDate.getFullYear() + " в " + noteDateHours + ":" + noteDate.getMinutes() + ":" + noteDateSeconds;
        return(
          <li 
            className="list-group-item"
            key={note.id}
          > 
            <div>
              <strong className="note-title"> {note.title} </strong>
              <small className="note-date"> { noteDateStr }</small>
            </div>             

            <button 
              type="button" 
              className="list-group-delete" 
              onClick={() => onRemove(note.id)}
              > &times; 
            </button>
          </li>
        )
        }
        )}      
    </ul>
  )
}