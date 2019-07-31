import React from "react"
import { useState } from "react"
import styled from "styled-components"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
import { normalizeExerciseId } from "../util/strings"
import Quiz from "moocfi-quizzes"
import { Paper } from "@material-ui/core"
import { accessToken } from "../services/moocfi"

const StyledPaper = styled(Paper)`
  overflow: hidden;
  margin: 2rem 0 2rem 0;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 40px -12px !important;
`

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
      <StyledPaper id={normalizeExerciseId(`quiz-${id}`)}>
        <Quiz
          id={id}
          languageId="fi_FI"
          accessToken={accessToken()}
          backendAddress="https://quizzes.mooc.fi"
        />
      </StyledPaper>
    )
  }
}

export default withSimpleErrorBoundary(QuizPartial)
