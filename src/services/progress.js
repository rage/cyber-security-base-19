import { fetchProgrammingProgress, getCachedUserDetails } from "./moocfi"
import { fetchCrowdsorcererProgress } from "./crowdsorcerer"
import { zip } from "../util/arrays"
import { improveGroupName } from "../util/strings"
import { fetchQuizProgress } from "./quiznator"
import { fetchQuizzesProgress } from "./quizzes"
import CourseSettings from "../../course-settings"

const id = CourseSettings.default.quizzesId
const progressSections = CourseSettings.default.progressSections

export async function fetchProgress() {
  return Promise.all(
    progressSections.map(async section => {
      return [
        section.name,
        await fetchSingleProgress(
          section.quizId,
          section.tmcCourse,
          section.defaultResponse,
        ),
      ]
    }),
  )
}

export async function fetchSingleProgress(quizId, tmcCourse, defaultResponse) {
  // await fetchQuizzesProgress()
  const serviceIdentifiers = ["Programming exercises", "Quizzes"]
  const progressesCollection = await Promise.all([
    fetchProgrammingProgress(tmcCourse),
    fetchQuizzesProgress(quizId),
  ])

  const defaultCollection = [[], defaultResponse]

  const userDetails = await getCachedUserDetails()
  const currentCourseVariant = userDetails?.extra_fields?.course_variant
  const progressByGroup = {}

  zip(serviceIdentifiers, progressesCollection, defaultCollection).forEach(
    ([identifier, progresses, def]) => {
      if (progresses.length == 0) {
        progresses = def
      }
      console.log(JSON.stringify(progresses))
      progresses.forEach(progressEntry => {
        const group = improveGroupName(
          progressEntry.group.replace("Set", "Part"),
        )
        if (!progressByGroup[group]) {
          progressByGroup[group] = {}
        }
        progressByGroup[group][identifier] = progressEntry
      })
    },
  )
  const toBeDeleted = []
  /* Object.entries(progressByGroup).forEach(([group, serviceEntries]) => {
    if (!Object.keys(serviceEntries).find(o => o === "Programming exercises")) {
      toBeDeleted.push(group)
    }
  }) */

  toBeDeleted.forEach(o => {
    delete progressByGroup[o]
  })
  return progressByGroup
}
