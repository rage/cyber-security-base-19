import axios from "axios"
import { accessToken } from "./moocfi"
import CourseSettings from "../../course-settings"

const id = CourseSettings.default.quizzesId
const language = CourseSettings.default.language

const quizzesLanguage = language === "en" ? "en_US" : "fi_FI"

export async function fetchQuizzesProgress(cid) {
  const response = await axios.get(
    `https://quizzes.mooc.fi/api/v2/general/course/${cid}/progress`,
    { headers: { Authorization: `Bearer ${accessToken()}` } },
  )
  return response.data
}

export async function fetchQuizNames(cid) {
  let course = id
  if (cid) {
    course = cid
  }
  const response = await axios.get(
    `https://quizzes.mooc.fi/api/v1/quizzes/${course}/titles/${quizzesLanguage}`,
  )
  return response.data
}
