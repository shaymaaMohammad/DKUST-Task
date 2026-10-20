import styled from "styled-components";

const Styles = styled.div`
  min-height: 100vh;
  background-color: var(--color-gray-bg);
  font-family: var(--font-primary);
  padding-top: 75px;

  /* =========================
     QUIZ CONTENT
  ========================= */

  .quizContent {
    width: 100%;
    max-width: 620px;

    margin: 0 auto;

    padding: 30px 20px 45px;
  }

  .quizContent h2 {
    margin: 0 0 20px;

    text-align: center;

    color: var(--color-text-dark);

    font-size: 14px;
    font-weight: 600;
  }

  /* =========================
     QUESTIONS
  ========================= */

  .questionsContainer {
    display: flex;
    flex-direction: column;

    gap: 14px;
  }

  .questionCard {
    width: 100%;

    padding: 16px;

    background-color: var(--color-white);

    border: 1px solid #e2e8f0;
    border-radius: 8px;

    box-shadow: 0 2px 8px rgba(15, 23, 42, 0.08);
  }

  .questionText {
    margin: 0 0 10px;

    color: var(--color-text-gray);

    font-size: var(--font-size);
    font-weight: 600;
  }

  /* =========================
     RADIO OPTIONS
  ========================= */

  .optionsContainer {
    display: flex;
    flex-direction: column;

    gap: 6px;
  }

  /* =========================
   RADIO OPTIONS
========================= */

  .answerOption {
    position: relative;

    display: flex;
    align-items: center;

    min-height: 28px;

    padding: 0 10px;

    background-color: var(--color-white);

    border: 1px solid #dbe1e8;
    border-radius: 5px;

    transition: all 0.2s ease;
  }

  .answerOption:hover {
    border-color: var(--color-green-hover);

    background-color: var(--color-gray-bg);
  }

  .answerOption .form-check {
    display: flex;
    align-items: center;

    width: 100%;

    margin: 0;
    padding: 0;
  }

  .answerOption .form-check-input {
    width: 11px;
    height: 11px;

    margin: 0 7px 0 0;

    cursor: pointer;

    flex-shrink: 0;
  }

  .answerOption .form-check-label {
    width: 100%;

    margin: 0;

    color: var(--color-text-gray);

    font-size: var(--font-size);

    cursor: pointer;
  }

  /* =========================
   CORRECT ANSWER
========================= */

  .answerOption.correct {
    border-color: var(--color-green);

    background-color: var(--color-gray-bg);
  }

  .answerOption.correct .form-check-input {
    border-color: var(--color-green);
  }

  .answerOption.correct .form-check-label {
    color: var(--color-green);
  }

  /* =========================
   WRONG ANSWER
========================= */

  .answerOption.wrong {
    border-color: #ef4444;

    background-color: #fff5f5;
  }

  .answerOption.wrong .form-check-label {
    color: #dc2626;
  }

  /* =========================
   ANSWER STATUS
========================= */

  .answerStatus {
    margin-left: auto;

    padding-left: 10px;

    color: var(--color-green);

    font-size: var(--font-size);

    font-weight: 600;
  }
  /* =========================
     SUBMIT BUTTON
  ========================= */

  .submitButtonContainer {
    display: flex;

    justify-content: center;

    margin-top: 20px;
  }

  .submitButtonContainer > div {
    width: auto;
  }

  .submitButtonContainer .custom-btn {
    width: auto;

    min-width: 100px;

    height: 34px;

    padding: 0 20px;

    border-radius: 3px;

    font-size: var(--font-size);
    font-weight: 700;
  }
  /* =========================
   QUIZ RESULT
========================= */

  .quizResult {
    margin-top: 18px;

    padding: 18px 20px;

    text-align: center;

    background-color: var(--color-gray-bg);

    border: 1px solid #ff6b6b;

    border-radius: 7px;
  }

  .quizResult h3 {
    margin: 0 0 8px;

    color: var(--color-text-gray);

    font-size: var(--font-size);

    font-weight: 700;
  }

  .quizResult p {
    margin: 0;

    color: var(--color-text-gray);

    font-size: var(--font-size);
  }

  /* =========================
   RESULT BUTTONS
========================= */

  .resultButtons {
    display: flex;

    align-items: center;
    justify-content: center;

    gap: 10px;

    margin-top: 16px;
  }

  .resultButtons .custom-btn {
    min-width: 95px;

    height: 32px;

    font-size: var(--font-size);
  }

  .backToFAQ {
    min-width: 95px;

    height: 32px;

    padding: 0 15px;

    background-color: var(--color-white);

    border: 1px solid #cbd5e1;

    border-radius: 3px;

    color: var(--color-text-gray);

    font-size: var(--font-size);

    font-weight: 600;

    cursor: pointer;

    transition: 0.2s ease;
  }

  .backToFAQ:hover {
    border-color: var(--color-green-hover);

    color: #16824d;
  }

  /* =========================
   TABLET
========================= */

  @media (max-width: 768px) {
    .quizContent {
      max-width: 100%;
      padding: 25px 16px 40px;
    }

    .quizContent h2 {
      font-size: 16px;
    }

    .questionCard {
      padding: 15px;
    }

    .questionText {
      font-size: 11px;
    }

    .answerOption {
      min-height: 32px;
      padding: 6px 10px;
    }

    .answerOption .form-check-label {
      font-size: 10px;
    }

    .resultButtons {
      flex-wrap: wrap;
    }
  }

  /* =========================
   MOBILE
========================= */

  @media (max-width: 480px) {
    .questionCount {
      font-size: 9px;
      padding: 5px 10px;
    }

    .quizContent {
      padding: 22px 12px 35px;
    }

    .quizContent h2 {
      font-size: 15px;
      margin-bottom: 16px;
    }

    .questionsContainer {
      gap: 12px;
    }

    .questionCard {
      padding: 13px 12px;
      border-radius: 7px;
    }

    .questionText {
      font-size: 10px;
      line-height: 1.5;
      margin-bottom: 10px;
    }

    .optionsContainer {
      gap: 7px;
    }

    .answerOption {
      min-height: 38px;
      padding: 6px 9px;
    }

    .answerOption .form-check {
      min-height: 30px;
    }

    .answerOption .form-check-input {
      width: 12px;
      height: 12px;

      margin-right: 8px;
    }

    .answerOption .form-check-label {
      font-size: 10px;
      line-height: 1.4;
    }

    .answerStatus {
      font-size: 8px;
      padding-left: 5px;
    }

    /* Result */

    .quizResult {
      padding: 16px 12px;
      margin-top: 16px;
    }

    .quizResult h3 {
      font-size: 13px;
    }

    .quizResult p {
      font-size: 9px;
      line-height: 1.5;
    }

    /* Buttons */

    .resultButtons {
      flex-direction: column;
      width: 100%;

      gap: 10px;
    }

    .resultButtons .custom-btn,
    .backToFAQ {
      width: 100%;
      min-width: 100%;
      height: 38px;
    }
  }
`;

export default Styles;
