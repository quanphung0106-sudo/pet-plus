import React from 'react'
import { ButtonProps } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import styles from './style.module.scss'
import clsx from 'clsx'

export const PrimaryButton = (props: ButtonProps) => {
  return (
    <LoadingButton
      {...props}
      variant="contained"
      className={clsx(styles.BaseButton, styles.PrimaryButton, props.className)}
    />
  )
}

export const TextButton = (props: ButtonProps) => {
  return (
    <LoadingButton
      {...props}
      variant="outlined"
      className={clsx(styles.BaseButton, styles.TextButton, props.className)}
    />
  )
}
