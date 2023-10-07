// QuestionSubmissionForm.js
"use client"
import { useState } from 'react';
import styles from '../styles/styles.css';

export default function QuestionSubmissionForm() {
  const [question, setQuestion] = useState('');

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };
  const[questions,setQuestions] = useState(
    []
  )
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuestions([...questions,question]);
    localStorage.setItem("question",questions)
    console.log(e.target.value);

  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter your question"
        value={question}
        onChange={handleInputChange}
      />
      <button type="submit">Submit Question</button>
    </form>
  );
}
