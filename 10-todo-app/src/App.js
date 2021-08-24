import React, { useEffect, useState } from 'react'
import Alert from './Alert'
import List from './List'

const getLocalStorage = () => {
  let item = localStorage.getItem('list')
  if(item) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({
    show: false, 
    type: '',
    msg: ''
  })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name) {
      //show alert
      showAlert(true,'danger','Please Enter a task')
    } else if(name && isEditing) {
      //Update task
      setList(list.map((item) => {
        if(item.id === editId) {
          return {...item, title: name}
        }
        return item
      }))
      setName('')
      setEditId(null)
      setIsEditing(false)
      showAlert(true, 'success', 'Task Updated')

    } else {
      showAlert(true, 'success', 'Task Added')
      const newItem = {id: new Date().getTime().toString(), title: name}
      setList([...list, newItem])
      setName('')
    }
  }

  const showAlert = (show=false, type='', msg='') => {
    setAlert({show, type, msg})
  }

  const clearList = () => {
    showAlert(true, 'danger', 'This action is irreversible')
    setList([])
  }

  const removeItem = (id) => {
    showAlert(true, 'danger', 'Task Deleted')
    setList(list.filter((item) => item.id !== id))
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditId(id)
    setName(specificItem.title)
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  },[list])

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
        <h3>Todo App</h3>
        <div className='form-control'>
          <input 
          type='text' 
          className='grocery'
          placeholder='e.g. go to gym' 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>{isEditing ? 'edit' : 'submit'}</button>
        </div>
      </form>
      {
      list.length > 0 && 
        <div className='grocery-container'>
            <List items={list} removeItem={removeItem} editItem={editItem}/>
            <button className='clear-btn' onClick={clearList}>Clear List</button>
        </div>
      }
      
    </section>
  );
}

export default App;
