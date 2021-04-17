const quizzesAttemptDao = require('../daos/quiz-attempts-dao')
const createAttempt = (qid, attempt) => quizzesAttemptDao.createAttempt(qid, attempt) 
const findAttemptsForQuiz = (qzid) => quizzesAttemptDao.findAttemptsForQuiz(qzid) 
module.exports = { createAttempt, findAttemptsForQuiz }