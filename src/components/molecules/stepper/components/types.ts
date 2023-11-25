import { IStep } from '..'

export type StepProps = {
  /**
   * Indicates if the step is the current step.
   */
  isCurrentStep: boolean
  /**
   * Indicates if the step has been passed.
   */
  isPassed: boolean
  /**
   * step index
   */
  index: number
} & IStep
