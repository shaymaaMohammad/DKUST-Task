import { InputTypes } from "../constants/enums";

const quizData = [
  {
    id: 1,
    question: "Which hook is used to store state in React?",
    correctAnswer: "useState",

    options: [
      {
        type: InputTypes.RADIO,
        id: "q1-option1",
        name: "question1",
        fieldLabel: "useState",
        value: "useState",
      },
      {
        type: InputTypes.RADIO,
        id: "q1-option2",
        name: "question1",
        fieldLabel: "useEffect",
        value: "useEffect",
      },
      {
        type: InputTypes.RADIO,
        id: "q1-option3",
        name: "question1",
        fieldLabel: "useRef",
        value: "useRef",
      },
      {
        type: InputTypes.RADIO,
        id: "q1-option4",
        name: "question1",
        fieldLabel: "useMemo",
        value: "useMemo",
      },
    ],
  },

  {
    id: 2,
    question: "What is a React component?",
    correctAnswer: "reusable-ui",

    options: [
      {
        type: InputTypes.RADIO,
        id: "q2-option1",
        name: "question2",
        fieldLabel: "A reusable piece of UI",
        value: "reusable-ui",
      },
      {
        type: InputTypes.RADIO,
        id: "q2-option2",
        name: "question2",
        fieldLabel: "A CSS file",
        value: "css-file",
      },
      {
        type: InputTypes.RADIO,
        id: "q2-option3",
        name: "question2",
        fieldLabel: "A database table",
        value: "database",
      },
      {
        type: InputTypes.RADIO,
        id: "q2-option4",
        name: "question2",
        fieldLabel: "An HTML attribute",
        value: "html-attribute",
      },
    ],
  },

  {
    id: 3,
    question: "How do you pass data from a parent component to a child component?",
    correctAnswer: "props",

    options: [
      {
        type: InputTypes.RADIO,
        id: "q3-option1",
        name: "question3",
        fieldLabel: "Using Props",
        value: "props",
      },
      {
        type: InputTypes.RADIO,
        id: "q3-option2",
        name: "question3",
        fieldLabel: "Using CSS",
        value: "css",
      },
      {
        type: InputTypes.RADIO,
        id: "q3-option3",
        name: "question3",
        fieldLabel: "Using HTML",
        value: "html",
      },
      {
        type: InputTypes.RADIO,
        id: "q3-option4",
        name: "question3",
        fieldLabel: "Using Bootstrap",
        value: "bootstrap",
      },
    ],
  },

  {
    id: 4,
    question: "Which hook is commonly used to perform side effects in React?",
    correctAnswer: "useEffect",

    options: [
      {
        type: InputTypes.RADIO,
        id: "q4-option1",
        name: "question4",
        fieldLabel: "useState",
        value: "useState",
      },
      {
        type: InputTypes.RADIO,
        id: "q4-option2",
        name: "question4",
        fieldLabel: "useEffect",
        value: "useEffect",
      },
      {
        type: InputTypes.RADIO,
        id: "q4-option3",
        name: "question4",
        fieldLabel: "useContext",
        value: "useContext",
      },
      {
        type: InputTypes.RADIO,
        id: "q4-option4",
        name: "question4",
        fieldLabel: "useRef",
        value: "useRef",
      },
    ],
  },

  {
    id: 5,
    question: "What happens when a React state value changes?",
    correctAnswer: "rerender",

    options: [
      {
        type: InputTypes.RADIO,
        id: "q5-option1",
        name: "question5",
        fieldLabel: "The component re-renders",
        value: "rerender",
      },
      {
        type: InputTypes.RADIO,
        id: "q5-option2",
        name: "question5",
        fieldLabel: "The application closes",
        value: "close",
      },
      {
        type: InputTypes.RADIO,
        id: "q5-option3",
        name: "question5",
        fieldLabel: "The CSS file is deleted",
        value: "delete-css",
      },
      {
        type: InputTypes.RADIO,
        id: "q5-option4",
        name: "question5",
        fieldLabel: "Nothing happens",
        value: "nothing",
      },
    ],
  },
];

export default quizData;