import React from 'react' 
import './notes.css'

export const Notes = ( {notes, onRemove} ) => {
  return (
    <ul className="list-group">
      {notes.map( note => {
        let noteDate = new Date(note.date.toString());

        let noteDateDay = noteDate.getDate() < 10 ? "0" + noteDate.getDate() : noteDate.getDate();     
        let noteDateMonth = noteDate.getMonth() < 9 ? "0" + (noteDate.getMonth() + 1) : noteDate.getMonth() + 1;
        let noteDateHours = noteDate.getHours() < 10 ? "0" + noteDate.getHours() : noteDate.getHours();
        let noteDateMinutes = noteDate.getMinutes() < 10 ? "0" + noteDate.getMinutes() : noteDate.getMinutes();
        let noteDateSeconds = noteDate.getSeconds() < 10 ? "0" + noteDate.getSeconds() : noteDate.getSeconds();

        let noteDateStr = noteDateDay + "." + noteDateMonth + "." + noteDate.getFullYear() + " в " + noteDateHours + ":" + noteDateMinutes + ":" + noteDateSeconds;
        return(
          <li 
            className="list-group-item"
            key={note.id}
          > 
            <div className="note-text">
              <strong className="note-title"> {note.title} </strong>              
            </div>   

            <div>
              <small className="note-date"> { noteDateStr }</small>
              <button 
                type="button" 
                className="list-group-delete" 
                onClick={() => onRemove(note.id)}
                > &times; 
              </button>
            </div>            
          </li>
        )
        }
        )}      
    </ul>
  )
}