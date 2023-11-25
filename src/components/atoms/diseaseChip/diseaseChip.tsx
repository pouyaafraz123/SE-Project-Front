import { Icon } from '../icons'
import { Typography } from '../typography'
import classes from './styles.module.scss'
import { DiseaseChipProps } from '.'

export function DiseaseChip(props: DiseaseChipProps) {
  const { name } = props
  return (
    <div className={classes.container}>
      <div className='d-inline-flex'>
        <Icon name='figma' />
      </div>
      <Typography color='inherit'>{name}</Typography>
    </div>
  )
}
