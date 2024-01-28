import { Grid } from '@components/atoms/Grid'
import { PanelCard } from '@components/atoms/panelCard'
import { useNavigate } from 'react-router-dom'
import { IPanelTemplateProps } from '@/templates/panel/types.ts'
import { path } from '@/routes'

export function PanelTemplate({ id }: IPanelTemplateProps) {
  const navigate = useNavigate()

  return (
    <div>
      <Grid>
        <PanelCard
          title={'سبد خرید'}
          onClick={() => {
            navigate(path.common.cart.link())
          }}
        />
        <PanelCard
          title={'آدرس ها'}
          onClick={() => {
            navigate(path.common.address.link())
          }}
        />
      </Grid>
    </div>
  )
}
