import React from 'react'
import { Button, ButtonProps } from '@mui/material'

export const PrimaryButton = (props: ButtonProps) => {
  const {...rest } = props
  return (
    <Button  {...rest} />
  )
}