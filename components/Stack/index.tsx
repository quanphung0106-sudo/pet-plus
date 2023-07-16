import React from 'react'
import { Stack as MUIStack, StackProps } from '@mui/material'

const Stack = (props: StackProps & {component?: any}) => {
  const { children, direction = 'row', component, ...rest } = props
  return (
    <MUIStack {...rest} component={component} direction={direction}>
      {children}
    </MUIStack>
  )
}

export default Stack