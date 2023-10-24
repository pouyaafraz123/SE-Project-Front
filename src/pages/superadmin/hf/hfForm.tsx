import { useHF, IHealthFacility, useCreateHF } from '@api/hf'
import { HFForm } from '@components/templates/hf/hfForm/hfForm'
import { IFormValues } from '@components/templates/hf/hfForm/schema'
import { Link, useLoaderData } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { path } from '@routes/hf/path'
import { useEffect, useState } from 'react'
import { map } from './helper'
import { queryClient } from '@/api/clients'

export type ILoaderData =
  | {
      mode: 'view' | 'edit'
      id: number
    }
  | {
      mode: 'create'
    }

export function Component() {
  const loader = useLoaderData() as ILoaderData
  const navigate = useNavigate()

  const { data, isLoading } = useHF({
    variables: { id: loader.mode == 'create' ? 0 : loader.id },
    enabled: loader.mode !== 'create'
  })
  const { mutate, mutateAsync } = useCreateHF()

  function onSubmit(data: IFormValues) {
    // mutate(map.toAPI(data))
    alert(JSON.stringify(map.toAPI(data), null, 2))
    navigate(
      loader.mode == 'create' ? path.hfList.link() : path.hfView.link(loader.id)
    )
  }

  if (loader.mode !== 'create' && (isLoading || !data)) return null

  return loader.mode == 'create' ? (
    <HFForm mode='create' onSubmit={onSubmit} />
  ) : (
    <HFForm
      key={loader.mode}
      mode={loader.mode}
      onSubmit={onSubmit}
      initialValues={map.fromAPI(data!.data)}
    />
  )
}
