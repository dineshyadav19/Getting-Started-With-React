import React, { useState } from 'react'
import data from './data'

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count)
    if(count <= 0) {
      amount = 1
    } 
    if(count > data.length){
      amount = data.length
    }
    setText(data.slice(0, amount)); 
  } 

  return (
    <section className='section-center'>
      <h3>Generate Lorem Ipsum Text</h3>
      <div className='underline'></div>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>
          Paragraph:
        </label>
        <input type='number' id='amount' name='amount' value={count} onChange={(e) => setCount(e.target.value)}/>
        <button type='submit' className='btn'>Generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((paragraph) => {
          return (
            <p>{paragraph}</p>
          )
        })}
      </article>
    </section>
  );
}

export default App;
