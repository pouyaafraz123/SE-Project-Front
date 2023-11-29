import { useRef } from 'react'
import { IconButton } from '@components/molecules/iconButton'
import { Icon } from '@components/atoms/icons'
import {
  getSelectBoxPosition,
  selectBoxFn
} from '@components/molecules/selectBox'
import LinkMenuItem from './linkMenuItem'
import { actionButtonProps } from '.'

export function ActionButton(props: actionButtonProps) {
  const {
    addBranchProps,
    passwordRecoveryProps,
    sendMessageProps,
    showExperiments
  } = props
  const buttonRef = useRef(null)
  return (
    <IconButton
      label=''
      icon={<Icon name='settings' />}
      transparent
      noTooltip
      ref={buttonRef}
      onClick={() =>
        selectBoxFn.showCustomElement({
          closeOnItemSelection: true,
          refElementPosition: getSelectBoxPosition(buttonRef.current, {
            anchor: 'end'
          }),
          customElements: (
            <>
              {addBranchProps && (
                <LinkMenuItem name='addBranch' path={addBranchProps.path} />
              )}
              {passwordRecoveryProps && (
                <LinkMenuItem
                  name='passwordRecovery'
                  path={passwordRecoveryProps.path}
                />
              )}
              {sendMessageProps && (
                <LinkMenuItem name='sendMessage' path={sendMessageProps.path} />
              )}
              {showExperiments && (
                <LinkMenuItem
                  name='showExperiments'
                  path={showExperiments.path}
                />
              )}
            </>
          )
        })
      }
    />
  )
}
