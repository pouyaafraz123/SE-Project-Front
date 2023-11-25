import classes from './styles.module.scss'
import { Step } from './components'
import { StepperProps } from '.'

export function Stepper(props: StepperProps) {
  const { currentStep, steps } = props
  return (
    <div className={classes['stepper-container']}>
      {steps.map((item, index) => (
        <Step
          key={index}
          index={index}
          isCurrentStep={index === currentStep}
          isPassed={currentStep > index}
          name={item.name}
          onClick={item.onClick}
        />
      ))}
    </div>
  )
}
