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

const ShoelaceAvatar = wrapCustomElement(`sl-avatar`)

const Avatar = styled(ShoelaceAvatar)`
  ${compose(flexbox, space, color, layout, background)}
`

function AvatarWrapper({ children, ...props }) {
  return <Avatar />
}

export default AvatarWrapper
