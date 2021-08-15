import React, { useState } from 'react'
import data from './data';
import Accordion from './Accordion';

function App() {
    // eslint-disable-next-line no-unused-vars
    const [questions, setQuestions] = useState(data)
    return (
        <main>
            <div className='container'>
                <h3>questions and answers about login</h3>
                <section className='info'>
                    {questions.map((question) => {
                        return <Accordion key = {question.id} {...question}/>
                    })}
                </section>
            </div>
        </main>
    )
}

export default App;
