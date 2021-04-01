let questions = require("./questions.json");
const findAllQuestions = () => questions;
const findQuestionsForQuiz = (Id) => {
  return questions.filter(q => q.quizId === Id);
};
const createQuestion = () => {};
const updateQuestion = () => {};
const deleteQuestion = () => {};

module.exports = {
  findAllQuestions,
  findQuestionsForQuiz,
  createQuestion,
  updateQuestion,
  deleteQuestion,
};
