import React, { useState } from 'react'

function App() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(firstName && email) {
      setPeople((people) => {
        const person = {id: new Date().getTime().toString(), firstName, email}
        return [...people, person]
      })
      setFirstName('')
      setEmail('')
    } else {
      console.log('Empty Values')
    }
  }

  return (
    <article>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Name: </label>
          < input type = 'text'
          id = 'name'
          name = 'name'
          value = {
            firstName
          }
          onChange = {
            (e) => setFirstName(e.target.value)
          }
          />
        </div>
        <div className='form-control'>
          <label htmlFor = 'email' > E-mail: </label> 
          < input type = 'email'
          id = 'email'
          name = 'email'
          value = {
            email
          }
          onChange = {
            (e) => setEmail(e.target.value)
          }
          />
        </div>
        <button type='submit'>Add Person</button>
      </form>
      {people.map((person) => {
        const {id, firstName, email} = person;
        return (
          <div className='item' key={id}>
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        )
      })}
      
    </article>    
  );
}

export default App;
