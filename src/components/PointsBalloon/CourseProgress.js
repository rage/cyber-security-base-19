import React from "react"
import PartProgress from "./PartProgress"
import CourseSettings from "../../../course-settings"

const splitCourses = CourseSettings.default.splitCourses
const CourseProgress = ({
  data,
  appliesForStudyRight,
  currentCourseVariant,
}) => {
  return (
    data && (
      <div>
        {data.map(([name, data]) => {
          return [
            <b>{name}</b>,
            Object.entries(data).map(([name, data]) => {
              return (
                <PartProgress
                  appliesForStudyRight={appliesForStudyRight}
                  name={name}
                  data={data}
                />
              )
            }),
          ]
        })}
      </div>
    )
  )
}

export default CourseProgress
