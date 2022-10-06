import React from 'react';
import { Button } from '@chakra-ui/react';

// default export
export default {
    // this is the name of the story in storybook.
    title: 'Chakra/Button',
    // the component we are exporting from Chakra UI
    component: Button,
    argTypes: { 
        onClick: { action: 'clicked' },
        onMouseOver: {action: 'moused over'} 
    }
}

const Template = (args) => <Button {...args} /> 

export const Success = Template.bind({})
Success.args = {
    // the color of the button
    colorScheme: 'green',
    // the text inside the button
    children: 'Success'
}

export const Danger = Template.bind({})
Danger.args = {
    colorScheme: 'red',
    children: 'Danger'
}

// Named exports
// export const Success = () => <Button colorScheme='green'>Success</Button>
// export const Danger = () => <Button colorScheme='red'>Danger</Button>