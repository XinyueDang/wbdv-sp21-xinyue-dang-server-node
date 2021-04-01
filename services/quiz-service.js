let quizzes = require('./quizzes.json')
const findAllQuizzes = () => quizzes
const findQuizById = (quizId) =>
    quizzes.find(quiz => quiz._id === quizId)
const createQuiz = () => {}
const updateQuiz = () => {}
const deleteQuiz = () => {}

module.exports = {
    findAllQuizzes,
    findQuizById,
    createQuiz,
    updateQuiz,
    deleteQuiz,
}