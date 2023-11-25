import { WalletBalanceModal, showModal } from '@components/modals'
import { ButtonMenuItem } from '../buttonMenuItem'
import { IUpdateBalanceMutationFn } from '@/interfaces'

interface IProps {
  id: string
  mutateFn: IUpdateBalanceMutationFn
}

export function UpdateBalanceMenuItem(props: IProps) {
  const { id, mutateFn } = props
  return (
    <ButtonMenuItem
      name='balanceChange.button'
      onClick={() =>
        showModal(<WalletBalanceModal id={id} mutateFn={mutateFn} />)
      }
    />
  )
}
