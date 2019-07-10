import React from "react"
import styled from "styled-components"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
import { normalizeExerciseId } from "../util/strings"
// import Quiz from "moocfi-quizzes"
import { Paper } from "@material-ui/core"
import { accessToken } from "../services/moocfi"

const Quiz = props => <div>Placeholder for new quiz</div>

class QuizPartial extends React.Component {
  componentDidMount() {
    const { id } = this.props
    if (!id || typeof window === "undefined") {
      return
    }
    if (!window.loadQuiz) {
      return
    }
    window.loadQuiz(document.getElementById(`unloaded-quiz-${id}`))
  }

  render() {
    const { id } = this.props
    if (!id) {
      return <div>There should be quiz here but no quiz id is specified.</div>
    }
    return (
      <Paper style={{ padding: "1rem" }}>
        {
          // now this component we must get from the widgets... which is not yet published as npm package!
        }
        <Quiz id={id} languageId="fi_FI" accessToken={accessToken()} />
      </Paper>
    )
  }
}

export default withSimpleErrorBoundary(QuizPartial)
