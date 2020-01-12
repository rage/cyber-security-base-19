import { fetchProgrammingProgress, getCachedUserDetails } from "./moocfi"
import { fetchCrowdsorcererProgress } from "./crowdsorcerer"
import { zip } from "../util/arrays"
import { improveGroupName } from "../util/strings"
import { fetchQuizProgress } from "./quiznator"
import { fetchQuizzesProgress } from "./quizzes"

export async function fetchProgress() {
  // await fetchQuizzesProgress()
  const serviceIdentifiers = ["Quizzes"]
  //const serviceIdentifiers = ["Programming exercises", "Quizzes"]
  const progressesCollection = await Promise.all([
    //fetchProgrammingProgress(),
    fetchQuizzesProgress(),
  ])
  const userDetails = await getCachedUserDetails()
  const currentCourseVariant = userDetails?.extra_fields?.course_variant
  const progressByGroup = {}

  zip(serviceIdentifiers, progressesCollection).forEach(
    ([identifier, progresses]) => {
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
