import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import quizData from "../../data/quizData";
import InputProvider from "../../components/common/inputs/input-provider";
import CustomButton from "../../components/common/custome-button";
import Styles from "./styles";

const QuizPage = () => {
  const navigate = useNavigate();

  const [answers, setAnswers] = useState({});

  // Save selected answer
  const handleAnswerChange = (questionId, value) => {
    // Prevent changing the answer after selecting it
    if (answers[questionId]) {
      return;
    }

    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  // Calculate score
  const score = quizData.reduce((totalScore, question) => {
    return answers[question.id] === question.correctAnswer
      ? totalScore + 1
      : totalScore;
  }, 0);

  // Check if all questions are answered
  const isQuizCompleted =
    Object.keys(answers).length === quizData.length;

  // Result message
  const getResultTitle = () => {
    if (score === quizData.length) {
      return "Excellent Work!";
    }

    if (score >= quizData.length / 2) {
      return "Good Job!";
    }

    return "Keep Practicing!";
  };

  // Reset quiz
  const handleTryAgain = () => {
    setAnswers({});
  };

  // Go to FAQ
  const handleBackToFAQ = () => {
    navigate("/");
  };

  return (
    <Styles>

      {/* ================= QUIZ HEADER ================= */}
      <section className="quizHeader">
        <div className="quizHeaderContent">

          <h1>Test Your Knowledge</h1>

          <p>
            Answer the questions and check your score.
          </p>

          <span className="questionCount">
            Score: {score}/{quizData.length}
          </span>

        </div>
      </section>


      {/* ================= QUIZ CONTENT ================= */}
      <main className="quizContent">

        <h2>Choose the Correct Answer</h2>

        <div className="questionsContainer">

          {quizData.map((question) => {
            const selectedAnswer = answers[question.id];

            return (
              <div
                className="questionCard"
                key={question.id}
              >

                {/* Question */}
                <p className="questionText">
                  Q{question.id}. {question.question}
                </p>


                {/* Options */}
                <div className="optionsContainer">

                  {question.options.map((option) => {
                    let feedbackState = "";

                    if (selectedAnswer) {

                      // Correct answer
                      if (
                        option.value === question.correctAnswer
                      ) {
                        feedbackState = "correct";
                      }

                      // Wrong selected answer
                      if (
                        option.value === selectedAnswer &&
                        option.value !== question.correctAnswer
                      ) {
                        feedbackState = "wrong";
                      }
                    }

                    return (
                      <InputProvider
                        key={option.id}
                        itemObject={{
                          ...option,

                          fieldValue: selectedAnswer,

                          feedbackState,

                          isAnswered: Boolean(selectedAnswer),

                          onChangeFunction: (value) =>
                            handleAnswerChange(
                              question.id,
                              value
                            ),
                        }}
                      />
                    );
                  })}

                </div>

              </div>
            );
          })}

        </div>


        {/* ================= QUIZ RESULT ================= */}
        {isQuizCompleted && (
          <div className="quizResult">

            <h3>
              {getResultTitle()}
            </h3>

            <p>
              You answered {score} out of{" "}
              {quizData.length} questions correctly.
            </p>

          </div>
        )}


        {/* ================= RESULT BUTTONS ================= */}
        {isQuizCompleted && (
          <div className="resultButtons">

            <CustomButton
              text="TRY AGAIN"
              variant="solid"
              size="sm"
              onClick={handleTryAgain}
            />

            <button
              type="button"
              className="backToFAQ"
              onClick={handleBackToFAQ}
            >
              
              Back to FAQ
             
              
            </button>

          </div>
        )}

      </main>

    </Styles>
  );
};

export default QuizPage;