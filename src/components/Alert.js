import React from 'react'
import wrapCustomElement from '@shoelace-style/react-wrapper'
import styled from 'styled-components'
import {
  compose,
  flexbox,
  space,
  color,
  layout,
  background,
} from 'styled-system'

const ShoelaceAlert = wrapCustomElement(`sl-alert`)

/* CSS PARTS
    base 	The component's base wrapper.
    close-button 	The close button.
    icon 	The container that wraps the alert icon.
    message 	The alert message.
*/

const Alert = styled(ShoelaceAlert)`
  ${compose(flexbox, space, color, layout, background)}
  ${({ baseProps, closeButtonProps, iconProps, messageProps }) =>
    `&::part(base) {
      background-color: ${baseProps?.backgroundColor};
      padding: ${baseProps?.padding};
      margin: ${baseProps?.margin};
     }
    &::part(close-button) {
      font-size: ${closeButtonProps?.fontSize};
     }
     &::part(close-button):hover {
      font-size: ${closeButtonProps?.hover?.fontSize};
     }
     &::part(icon) {
     }
     &::part(message) {
       color: ${messageProps?.color};
       font-size: ${messageProps.fontSize};
     }
  `}
`

function AlertWrapper({
  children,
  closable = true,
  open = true,
  type = `primary`,
  baseProps,
  closeButtonProps,
  iconProps,
  messageProps,
  withIcon = false,
  icon,
  ...props
}) {
  return (
    <Alert
      closable={closable}
      open={open}
      type={type}
      baseProps={baseProps}
      closeButtonProps={closeButtonProps}
      iconProps={iconProps}
      messageProps={messageProps}
      {...props}
    >
      {children}
    </Alert>
  )
}

AlertWrapper.defaultProps = {
  width: `100%`,
  baseProps: {},
  closeButtonProps: {},
  iconProps: {},
  messageProps: {},
}

export default AlertWrapper
