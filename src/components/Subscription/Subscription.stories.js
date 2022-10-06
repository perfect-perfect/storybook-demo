import React from 'react';
import { Primary } from '../Button/Button.stories'
import { Large } from '../Input/Input.stories'

export default {
    title: 'Form/Subscription'
}
// we create a story only using other stories components
//  - saves us alot of time. instead of rewritting  a whole componenet and it's props
//  - one downsize is that we cannot use 'args' in these cases.
export const PrimarySubscription = () => (
    <>
        <Large />
        <Primary />
    </>
)