import React, {useState, useContext} from 'react' 
import { AlertContext } from '../context/alert/alertContext'
import { FirebaseContext } from '../context/Firebase/FirebaseContext';

const styles = {
  width: '800px',
  border: '2px solid grey',
  padding: '15px',
  fontSize: '24px',
  margin: '30px',
}

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
          className="form-control" 
          placeholder="Запишите заметку сюда"
          style={styles}
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </form>
  )
}