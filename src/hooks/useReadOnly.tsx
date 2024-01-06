import { useUIStore } from '@/stores'

export function useReadOnly(propsReadOnly: boolean | undefined) {
  const pageMode = useUIStore((state) => state.pageMode)
  if (pageMode === 'view' && propsReadOnly === undefined) {
    return true
  }
  return propsReadOnly
}
