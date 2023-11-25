/// <reference types="vite/client" />
import type { IRole } from '@/interfaces'

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  readonly VITE_API_TOKEN: string
  readonly VITE_PANEL: IRole
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
