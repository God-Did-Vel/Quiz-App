import React, { useEffect, useState } from "react";
import localQuestions from "./Question";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [loading, setLoading] = useState(true);

  /* ---------- Fetch from Open Trivia DB, fallback to local ---------- */
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=15&type=multiple")
      .then((res) => res.json())
      .then(({ results }) => {
        const formatted = results.map((q) => ({
          question: q.question,
          options: shuffle([q.correct_answer, ...q.incorrect_answers]),
          answer: q.correct_answer,
        }));
        setQuestions(formatted);
        setLoading(false);
      })
      .catch(() => {
        setQuestions(localQuestions); // ← offline / error fallback
        setLoading(false);
      });
  }, []);

  /* ------------------------- Helper ------------------------- */
  function shuffle(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
  }

  /* --------------- Handle option click ---------------------- */
  function handleOptionClick(option) {
    setSelected(option);
    if (option === questions[current].answer) setScore((s) => s + 1);

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent((i) => i + 1);
        setSelected(null);
      } else {
        setIsFinished(true);
      }
    }, 600);
  }

  /* ------------------ Restart the quiz ---------------------- */
  function restartQuiz() {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setIsFinished(false);
  }

  /* ------------------------- Render ------------------------- */
  if (loading) return <p className="loading">Loading questions…</p>;

  return (
    <div className="app">
      <h1 className="title">Classic Quiz App</h1>

      {isFinished ? (
        <div className="score-section">
          <h2>
            Your Score: {score} / {questions.length}
          </h2>
          <button onClick={restartQuiz}>Try Again</button>
        </div>
      ) : (
        <>
          {/* Progress bar */}
          <div className="progress">
            <div
              className="bar"
              style={{ width: `${((current + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Question & options */}
          <div className="quiz-box">
            <h2
              className="question"
              dangerouslySetInnerHTML={{ __html: questions[current].question }}
            />

            <div className="options">
              {questions[current].options.map((option, i) => {
                const isCorrect = option === questions[current].answer;
                const status =
                  selected === null
                    ? ""
                    : isCorrect
                    ? "correct"
                    : selected === option
                    ? "wrong"
                    : "";

                return (
                  <button
                    key={i}
                    className={`option ${status}`}
                    onClick={() => handleOptionClick(option)}
                    disabled={selected !== null}
                    dangerouslySetInnerHTML={{ __html: option }}
                  />
                );
              })}

              <div className="footer">
                <div className="footer__copywrite">
                  <p>&copy; 2025 Vel. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
