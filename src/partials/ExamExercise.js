import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencilAlt as icon, faRedo } from "@fortawesome/free-solid-svg-icons"
import { Card, CardContent } from "@material-ui/core"

import { withTranslation } from "react-i18next"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
import { normalizeExerciseId } from "../util/strings"

const accentColor = "#FAAA38"

const ExamExerciseWrapper = styled(Card)`
  margin: 3.5rem 0;
  // border-left: 0.2rem solid ${accentColor};
  border-radius: 1rem !important;
  box-shadow: 0 8px 40px -12px rgba(0,0,0,0.3) !important;
  padding: 0 !important;
`

const StyledIcon = styled(FontAwesomeIcon)`
  vertical-align: middle;
  margin-right: 1.5rem;
  margin-left: 0.5rem;
  color: white;
  position: relative;
  bottom: -13px;
`

const StyledRefreshIcon = styled(FontAwesomeIcon)`
  color: white;
`

const Header = styled.div`
  font-size: 1.3rem;
  font-weight: normal;
  padding 1rem 0;
  border-bottom: 1px solid #f7f7f9;
  background-color: #06402B;
  display: flex;
  flex-direction: row;
  align-items: 0;
  color: white;
  padding: 1rem;
  padding-bottom: 1.5rem;
  h3 {
    margin-bottom: 0;
  }
`

const HeaderTitleContainer = styled.div`
  flex: 1;
`

const HeaderMuted = styled.span`
  font-size: 18px;
  font-weight: 400;
  margin-right: 0.2rem;
  position: relative;
  bottom: -3px;
`

const Body = styled.div`
  padding-bottom: 0.5rem;
  min-height: 100px;
`

const Small = styled.div`
  p {
    font-size: 0.9rem;
    color: #333;
  }
`

const ExerciseDescriptionWrapper = styled.div`
  counter-reset: headingCounter;

  h1::before,
  h2::before,
  h3::before,
  h4::before,
  h5::before {
    content: "Osa " counter(headingCounter) ": ";
    counter-increment: headingCounter;
  }
`

const ExerciseDescription = ({ children }) => (
  <ExerciseDescriptionWrapper>
    <div />
    {children}
  </ExerciseDescriptionWrapper>
)

const ExamExercise = props => {
  return (
    <ExamExerciseWrapper
      id={normalizeExerciseId(`exam-exercise-${props.name}`)}
    >
      <Header>
        <StyledIcon icon={icon} size="2x" />
        <HeaderTitleContainer>
          <HeaderMuted>Exam question:</HeaderMuted>
          <h3>{props.name}</h3>
        </HeaderTitleContainer>
      </Header>
      <CardContent>
        <Body>
          <div>
            <ExerciseDescription>{props.children}</ExerciseDescription>
          </div>
        </Body>
      </CardContent>
    </ExamExerciseWrapper>
  )
}

export default withTranslation("common")(withSimpleErrorBoundary(ExamExercise))
