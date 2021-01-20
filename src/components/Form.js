import React, {useState, useContext} from 'react' 
import { AlertContext } from '../context/alert/alertContext'
import { FirebaseContext } from '../context/Firebase/FirebaseContext';
import './Form.css'

export const Form = () => {
  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext)

  const submitHandler = event => {
    event.preventDefault();

    if(value.trim()) {
      firebase.addNote(value.trim()).then(() => {
        alert.show('Заметка была создана!', 'success');        
      }).catch(() => {
        alert.show('Что-то пошло не так')
      });    
      setValue('');
    } else {
      alert.show('Введите текст заметки');
      setValue('');
    }
  } 

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group"> 
        <input 
          type="text" 
          className="form-input" 
          placeholder="Запишите заметку сюда"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button 
          type="submit"
          className="form-button"
          >Создать заметку</button>
      </div>
    </form>
  )
}