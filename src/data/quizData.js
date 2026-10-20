// import { InputTypes } from "../constants/enums";

// const quizData = [
//   {
//     id: 1,
//     question: "Which hook is used to store state in React?",
//     correctAnswer: "useState",

//     options: [
//       {
//         type: InputTypes.RADIO,
//         id: "q1-option1",
//         name: "question1",
//         fieldLabel: "useState",
//         value: "useState",
//       },
//       {
//         type: InputTypes.RADIO,
//         id: "q1-option2",
//         name: "question1",
//         fieldLabel: "useEffect",
//         value: "useEffect",
//       },
//       {
//         type: InputTypes.RADIO,
//         id: "q1-option3",
//         name: "question1",
//         fieldLabel: "useRef",
//         value: "useRef",
//       },
//       {
//         type: InputTypes.RADIO,
//         id: "q1-option4",
//         name: "question1",
//         fieldLabel: "useMemo",
//         value: "useMemo",
//       },
//     ],
//   },

//   {
//     id: 2,
//     question: "What is a React component?",
//     correctAnswer: "reusable-ui",

//     options: [
//       {
//         type: InputTypes.RADIO,
//         id: "q2-option1",
//         name: "question2",
//         fieldLabel: "A reusable piece of UI",
//         value: "reusable-ui",
//       },
//       {
//         type: InputTypes.RADIO,
//         id: "q2-option2",
//         name: "question2",
//         fieldLabel: "A CSS file",
//         value: "css-file",
//       },
//       {
//         type: InputTypes.RADIO,
//         id: "q2-option3",
//         name: "question2",
//         fieldLabel: "A database table",
//         value: "database",
//       },
//       {
//         type: InputTypes.RADIO,
//         id: "q2-option4",
//         name: "question2",
//         fieldLabel: "An HTML attribute",
//         value: "html-attribute",
//       },
//     ],
//   },

//   {
//     id: 3,
//     question: "How do you pass data from a parent component to a child component?",
//     correctAnswer: "props",

//     options: [
//       {
//         type: InputTypes.RADIO,
//         id: "q3-option1",
//         name: "question3",
//         fieldLabel: "Using Props",
//         value: "props",
//       },
//       {
//         type: InputTypes.RADIO,
//         id: "q3-option2",
//         name: "question3",
//         fieldLabel: "Using CSS",
//         value: "css",
//       },
//       {
//         type: InputTypes.RADIO,
//         id: "q3-option3",
//         name: "question3",
//         fieldLabel: "Using HTML",
//         value: "html",
//       },
//       {
//         type: InputTypes.RADIO,
//         id: "q3-option4",
//         name: "question3",
//         fieldLabel: "Using Bootstrap",
//         value: "bootstrap",
//       },
//     ],
//   },

//   {
//     id: 4,
//     question: "Which hook is commonly used to perform side effects in React?",
//     correctAnswer: "useEffect",

//     options: [
//       {
//         type: InputTypes.RADIO,
//         id: "q4-option1",
//         name: "question4",
//         fieldLabel: "useState",
//         value: "useState",
//       },
//       {
//         type: InputTypes.RADIO,
//         id: "q4-option2",
//         name: "question4",
//         fieldLabel: "useEffect",
//         value: "useEffect",
//       },
//       {
//         type: InputTypes.RADIO,
//         id: "q4-option3",
//         name: "question4",
//         fieldLabel: "useContext",
//         value: "useContext",
//       },
//       {
//         type: InputTypes.RADIO,
//         id: "q4-option4",
//         name: "question4",
//         fieldLabel: "useRef",
//         value: "useRef",
//       },
//     ],
//   },

//   {
//     id: 5,
//     question: "What happens when a React state value changes?",
//     correctAnswer: "rerender",

//     options: [
//       {
//         type: InputTypes.RADIO,
//         id: "q5-option1",
//         name: "question5",
//         fieldLabel: "The component re-renders",
//         value: "rerender",
//       },
//       {
//         type: InputTypes.RADIO,
//         id: "q5-option2",
//         name: "question5",
//         fieldLabel: "The application closes",
//         value: "close",
//       },
//       {
//         type: InputTypes.RADIO,
//         id: "q5-option3",
//         name: "question5",
//         fieldLabel: "The CSS file is deleted",
//         value: "delete-css",
//       },
//       {
//         type: InputTypes.RADIO,
//         id: "q5-option4",
//         name: "question5",
//         fieldLabel: "Nothing happens",
//         value: "nothing",
//       },
//     ],
//   },
// ];

// export default quizData;

import { InputTypes } from "../constants/enums";

const quizData = [
  {
    id: 1,
    question: {
      en: "Which hook is used to store state in React?",
      ar: "ما هو الـ Hook المستخدم لتخزين الحالة (State) في React؟",
    },
    correctAnswer: "useState",
    options: [
      {
        type: InputTypes.RADIO,
        id: "q1-option1",
        name: "question1",
        fieldLabel: { en: "useState", ar: "useState" },
        value: "useState",
      },
      {
        type: InputTypes.RADIO,
        id: "q1-option2",
        name: "question1",
        fieldLabel: { en: "useEffect", ar: "useEffect" },
        value: "useEffect",
      },
      {
        type: InputTypes.RADIO,
        id: "q1-option3",
        name: "question1",
        fieldLabel: { en: "useRef", ar: "useRef" },
        value: "useRef",
      },
      {
        type: InputTypes.RADIO,
        id: "q1-option4",
        name: "question1",
        fieldLabel: { en: "useMemo", ar: "useMemo" },
        value: "useMemo",
      },
    ],
  },
  {
    id: 2,
    question: {
      en: "What is a React component?",
      ar: "ما هو مكون الـ React (Component)؟",
    },
    correctAnswer: "reusable-ui",
    options: [
      {
        type: InputTypes.RADIO,
        id: "q2-option1",
        name: "question2",
        fieldLabel: {
          en: "A reusable piece of UI",
          ar: "قطعة من واجهة مستخدم قابلة لإعادة الاستخدام",
        },
        value: "reusable-ui",
      },
      {
        type: InputTypes.RADIO,
        id: "q2-option2",
        name: "question2",
        fieldLabel: { en: "A CSS file", ar: "ملف تنسيقات CSS" },
        value: "css-file",
      },
      {
        type: InputTypes.RADIO,
        id: "q2-option3",
        name: "question2",
        fieldLabel: { en: "A database table", ar: "جدول في قاعدة بيانات" },
        value: "database",
      },
      {
        type: InputTypes.RADIO,
        id: "q2-option4",
        name: "question2",
        fieldLabel: { en: "An HTML attribute", ar: "خاصية من خصائص HTML" },
        value: "html-attribute",
      },
    ],
  },
  {
    id: 3,
    question: {
      en: "How do you pass data from a parent component to a child component?",
      ar: "كيف تقوم بتمرير البيانات من المكون الأب إلى المكون الابن؟",
    },
    correctAnswer: "props",
    options: [
      {
        type: InputTypes.RADIO,
        id: "q3-option1",
        name: "question3",
        fieldLabel: { en: "Using Props", ar: "باستخدام الـ Props" },
        value: "props",
      },
      {
        type: InputTypes.RADIO,
        id: "q3-option2",
        name: "question3",
        fieldLabel: { en: "Using CSS", ar: "باستخدام الـ CSS" },
        value: "css",
      },
      {
        type: InputTypes.RADIO,
        id: "q3-option3",
        name: "question3",
        fieldLabel: { en: "Using HTML", ar: "باستخدام الـ HTML" },
        value: "html",
      },
      {
        type: InputTypes.RADIO,
        id: "q3-option4",
        name: "question3",
        fieldLabel: { en: "Using Bootstrap", ar: "باستخدام الـ Bootstrap" },
        value: "bootstrap",
      },
    ],
  },
  {
    id: 4,
    question: {
      en: "Which hook is commonly used to perform side effects in React?",
      ar: "أي الـ Hooks يستخدم بشكل شائع لتنفيذ التأثيرات الجانبية (Side Effects)؟",
    },
    correctAnswer: "useEffect",
    options: [
      {
        type: InputTypes.RADIO,
        id: "q4-option1",
        name: "question4",
        fieldLabel: { en: "useState", ar: "useState" },
        value: "useState",
      },
      {
        type: InputTypes.RADIO,
        id: "q4-option2",
        name: "question4",
        fieldLabel: { en: "useEffect", ar: "useEffect" },
        value: "useEffect",
      },
      {
        type: InputTypes.RADIO,
        id: "q4-option3",
        name: "question4",
        fieldLabel: { en: "useContext", ar: "useContext" },
        value: "useContext",
      },
      {
        type: InputTypes.RADIO,
        id: "q4-option4",
        name: "question4",
        fieldLabel: { en: "useRef", ar: "useRef" },
        value: "useRef",
      },
    ],
  },
  {
    id: 5,
    question: {
      en: "What happens when a React state value changes?",
      ar: "ماذا يحدث عندما تتغير قيمة الحالة (State) في React؟",
    },
    correctAnswer: "rerender",
    options: [
      {
        type: InputTypes.RADIO,
        id: "q5-option1",
        name: "question5",
        fieldLabel: {
          en: "The component re-renders",
          ar: "إعادة بناء وتحديث المكون (Re-render)",
        },
        value: "rerender",
      },
      {
        type: InputTypes.RADIO,
        id: "q5-option2",
        name: "question5",
        fieldLabel: {
          en: "The application closes",
          ar: "ينغلق التطبيق بالكامل",
        },
        value: "close",
      },
      {
        type: InputTypes.RADIO,
        id: "q5-option3",
        name: "question5",
        fieldLabel: {
          en: "The CSS file is deleted",
          ar: "يُحذف ملف التنسيقات CSS",
        },
        value: "delete-css",
      },
      {
        type: InputTypes.RADIO,
        id: "q5-option4",
        name: "question5",
        fieldLabel: { en: "Nothing happens", ar: "لا يحدث شيء" },
        value: "nothing",
      },
    ],
  },
];

export default quizData;
