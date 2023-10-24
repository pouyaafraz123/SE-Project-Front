import { ToastContainerProps } from 'react-toastify'

export const TOAST_CONTAINER_PROPS: ToastContainerProps = {
  position: 'bottom-right',
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
  theme: 'colored',
  toastStyle: { zIndex: 999999 },
  style: { zIndex: 999999 },
  bodyStyle: { zIndex: 999999 },
  icon: false,
  closeButton: false
}
