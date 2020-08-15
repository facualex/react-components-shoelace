import React from 'react'
import wrapCustomElement from '@shoelace/react-wrapper';
import styled from 'styled-components'
import { compose, flexbox, space, color, layout, background } from 'styled-system'

const ShoelaceAlert = wrapCustomElement('sl-alert');

const Alert = styled(ShoelaceAlert)`
    ${compose(
        flexbox,
        space,
        color,
        layout,
        background,
    )}
`

function AlertWrapper({ children, ...props }) {
    return (
        <Alert>
            {children}
        </Alert>
    )
}

return AlertWrapper