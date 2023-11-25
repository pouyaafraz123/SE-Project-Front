import { ParseKeys } from 'i18next'

type TStepName = ParseKeys<'form'>

export type IStep = {
  /**
   * The name of the step.
   */
  name: TStepName
  /**
   * An optional onClick function for the step.
   */
  onClick?: () => void
}

export type StepperProps = {
  /**
   * An array of step objects, each containing a name and an optional onClick function.
   */
  steps: IStep[]
  /**
   * The index of the current step.
   */
  currentStep: number
}
