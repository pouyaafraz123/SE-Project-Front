import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import classes from './styles.module.scss'
import { StepProps } from '.'
import { Typography } from '@/components/atoms/typography'

export function Step(props: StepProps) {
  const { isCurrentStep, isPassed, name, index, onClick } = props
  const { t } = useTranslation('form')
  return (
    <div
      className={clsx([
        classes['step-container'],
        isPassed && classes['passed-container']
      ])}
    >
      <div
        className={clsx([
          classes.step,
          isCurrentStep && classes['current-step'],
          isPassed && classes['passed-step']
        ])}
        onClick={onClick}
      >
        <Typography fontSize='xl'>{index + 1}</Typography>
      </div>
      <Typography
        center
        color={
          isPassed || isCurrentStep ? 'primary-main' : 'secondary-text-light'
        }
        fontSize='md'
        fontWeight='regular'
      >
        {t(name)}
      </Typography>
    </div>
  )
}
