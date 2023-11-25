import { useTranslation } from 'react-i18next'
import { useModalStore, closeModal } from './store'
import { Box } from '@/components/atoms/box'
import { Button } from '@/components/atoms/button'
import { Modal } from '@/components/atoms/modal'

export function ModalContainer() {
  const { isOpen, children } = useModalStore()

  return (
    <Modal open={isOpen} onClose={closeModal}>
      <Box px='l5' py='l5' radius='lg'>
        {children}
      </Box>
    </Modal>
  )
}
