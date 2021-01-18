import React, {useContext} from 'react'
import { AlertContext } from '../context/alert/alertContext';
import './Alert.css'

export const Alert = () => {
  const {alert, hide} = useContext(AlertContext)

  if (!alert.visible) {
    return null;
  }

  return (
    <div className={ `alert alert-${alert.type || 'warning'}` }>
      <div>
        <strong className="alert-attention">Внимание!</strong> 
        {alert.text}
      </div>   
         
      <button className="alert-button" type="button" onClick={hide}>
        &times;
      </button>
    </div>
  )
}