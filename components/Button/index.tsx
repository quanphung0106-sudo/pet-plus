import React from 'react'
import { LoadingButton } from '@mui/lab'
import { ButtonProps } from '@mui/material'
import clsx from 'clsx'
import styles from './style.module.scss'
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

export const GhostButton = (props: ButtonProps) => {
  return (
    <LoadingButton
      {...props}
      variant="text"
      className={clsx(styles.BaseButton, styles.GhostButton, props.className)}
    />
  )
}
