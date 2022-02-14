import './App.css';
import {useState, useEffect} from 'react'

function App() {

  const [selectedCategory, setSelectedCategory] = useState('categoryOne')
  const [questionText, setQuestionText] = useState('')
  const [questions, setQuestions] = useState([])
  const [answerText, setAnswerText] = useState('')
  const [answers, setAnswers] = useState([])

  const fetchQuestions = async () => {
    let res = await fetch(`http://localhost:3001/api/questions?category=${selectedCategory}`)
    let data = await res.json()
    console.log(data)
    setQuestions(data)
  }
  const fetchAnswers = async () => {
    let res = await fetch(`http://localhost:3001/api/questions/:questionId/answers`)
    let data = await res.json()
    console.log(data)
    setAnswers(data)
  }

  useEffect(() => {
    fetchQuestions()
  }, [])

  useEffect(() => {
    fetchQuestions()
}, [selectedCategory])

useEffect(()=> {
  fetchAnswers()
}, [])

const updateQuestionText = async (event) => {
    setQuestionText(event.currentTarget.value)
};

const updateAnswerText = async  (event) => {
  setAnswerText(event.currentTarget.value)
}

const createQuestion = async () => {
    let res = await fetch(`http://localhost:3001/api/questions?category=${selectedCategory}`, {
        method: 'POST',
        body: JSON.stringify({questionText: questionText}),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    let data = await res.json()
    console.log(data)
    setQuestionText('')
    fetchQuestions()
};

const createAnswer = async () =>  {
    let res = await fetch(`http://localhost:3001/api/questions/:questionId/answers`, {
      method: 'POST',
        body: JSON.stringify({answerText: answerText}),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    let data = await res.json()
    console.log(data)
    setAnswerText('')
    fetchAnswers()
};

  return (
    <>
    

      <div className={'border p-4 bg-gray-400'}>
        <h1 className={'text-center text-xl'}>QUESTION APP</h1>
      </div>

      <div className={'w-full flex'}>
          <div className={'w-1/4 bg-gray-600'}>
              <ul>
                <li className={selectedCategory === 'categoryOne' ? 'p-4 bg-green-300' : 'p-4 border'} onClick={() => setSelectedCategory('categoryOne')}>
                  <button className={'text-xl uppercase tracking-widest'}>Business</button>
                </li>
                <li className={selectedCategory === 'categoryTwo' ? 'p-4 bg-green-300' : 'p-4 border'} onClick={() => setSelectedCategory('categoryTwo')}>
                  <button className={'text-xl uppercase tracking-widest'}>Technology</button>
                </li>
                <li className={selectedCategory === 'categoryThree' ? 'p-4 bg-green-300' : 'p-4 border'} onClick={() => setSelectedCategory('categoryThree')}>
                  <button className={'text-xl uppercase tracking-widest'}>Entertainment</button>
                </li>
                <li className={selectedCategory === 'categoryFour' ? 'p-4 bg-green-300' : 'p-4 border'} onClick={() => setSelectedCategory('categoryFour')}>
                  <button className={'text-xl uppercase tracking-widest'}>Sports</button>
                </li>
                <li className={selectedCategory === 'categoryFive' ? 'p-4 bg-green-300' : 'p-4 border'} onClick={() => setSelectedCategory('categoryFive')}>
                  <button className={'text-xl uppercase tracking-widest'}>Science</button>
                </li>
                
              </ul>
          </div>
          <div className={'w-3/4 border bg-gray-800'}>
            <div className = {'flex justify-center p-12 gap-12'}>
                <textarea value={questionText} onChange={updateQuestionText} id="" cols="30" rows="5"></textarea>
                <button onClick={createQuestion} className={'bg-blue-400 px-2 py-1 h-8 rounded text-white'}>Create Question</button>
            </div>

            <h1 className={'text-xl text-center'}>Questions list for {selectedCategory}</h1>
                <br/>
                <div className={'flex justify-center'}>

                    <ul>
                        {questions.map((question) => {
                            return <li key={question.id}>{question.questionText}<textarea value={answerText} onChange={updateAnswerText} id="" cols="30" rows="5"> </textarea><button onClick={createAnswer}>Answer</button></li>
                        })}
                    <li>{answers.map((answer) => {
                            return <li key ={answer.id}>{answer.answerText}</li>
                            })} </li>
                    </ul>
                  
                </div>

          </div>
        </div>
    
    </>
    
  );
}

export default App;
