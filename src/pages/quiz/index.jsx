import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import quizData from "../../data/quizData";
import InputProvider from "../../components/common/inputs/input-provider";
import CustomButton from "../../components/common/custome-button";
import Styles from "./styles";
import Hero from "../../components/hero";
import { useTranslation } from "react-i18next";
import AppTemplate from "../../components/app-template";
import PathConstants from "../../routes/PathConstants";
import i18next from "i18next";

const QuizPage = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const { t } = useTranslation();
  const currentLang = i18next.language || "ar";
  // Save selected answer
  const handleAnswerChange = (questionId, value) => {
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
  const isQuizCompleted = Object.keys(answers).length === quizData.length;

  const getResultTitleKey = () => {
    if (score === quizData.length) {
      return "quiz_result_excellent";
    }
    if (score >= quizData.length / 2) {
      return "quiz_result_good";
    }
    return "quiz_result_practice";
  };

  // Reset quiz
  const handleTryAgain = () => {
    setAnswers({});
  };

  // Go to FAQ
  const handleBackToFAQ = () => {
    navigate(PathConstants.HOME);
  };

  return (
    <AppTemplate pageTitle="Quiz">
      <Styles>
        {/* ================= QUIZ Hero ================= */}
        <Hero
          title={t("quiz_hero_title")}
          description={t("quiz_hero_desc")}
          variant="quiz"
        >
          <span className="questionCount">
            {t("score")}: {score}/{quizData.length}
          </span>
        </Hero>

        {/* ================= QUIZ CONTENT ================= */}
        <main className="quizContent">
          <h2>{t("quiz_content_title")}</h2>

          <div className="questionsContainer">
            {quizData.map((question) => {
              const selectedAnswer = answers[question.id];
              //***********************************************
              const questionText =
                question.question && typeof question.question === "object"
                  ? question.question[currentLang]
                  : question.question;
              return (
                <div className="questionCard" key={question.id}>
                  <p className="questionText">
                    {t("quiz_question_prefix")}
                    {question.id}. {questionText}
                  </p>

                  {/* Options */}
                  <div className="optionsContainer">
                    {question.options.map((option) => {
                      let feedbackState = "";

                      if (selectedAnswer) {
                        if (option.value === question.correctAnswer) {
                          feedbackState = "correct";
                        }
                        if (
                          option.value === selectedAnswer &&
                          option.value !== question.correctAnswer
                        ) {
                          feedbackState = "wrong";
                        }
                      }
                      ///************************************** */
                      const optionLabel =
                        option.label && typeof option.label === "object"
                          ? option.label[currentLang]
                          : option.label;
                      //********************************************** */
                      return (
                        <InputProvider
                          key={option.id}
                          itemObject={{
                            ...option,
                            fieldlabel: optionLabel,
                            fieldValue: selectedAnswer,
                            feedbackState,
                            isAnswered: Boolean(selectedAnswer),
                            onChangeFunction: (value) =>
                              handleAnswerChange(question.id, value),
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
              <h3>{t(getResultTitleKey())}</h3>
              <p>
                {t("quiz_summary_part1")} {score} {t("quiz_summary_part2")}{" "}
                {quizData.length} {t("quiz_summary_part3")}
              </p>
            </div>
          )}

          {/* ================= RESULT BUTTONS ================= */}
          {isQuizCompleted && (
            <div className="resultButtons">
              <CustomButton
                text={t("quiz_btn_try_again")}
                variant="solid"
                size="sm"
                onClick={handleTryAgain}
              />

              <button
                type="button"
                className="backToFAQ"
                onClick={handleBackToFAQ}
              >
                {t("quiz_btn_back_faq")}
              </button>
            </div>
          )}
        </main>
      </Styles>
    </AppTemplate>
  );
};

export default QuizPage;
