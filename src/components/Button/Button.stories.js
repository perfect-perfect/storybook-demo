import React from 'react';
import Button from './Button';


// this is written in component story format
//  - has a default export
//  - and one or more named exports

// default eport porovides some metadata about the story and the correesponding component
export default {
    // title is mandatory, it should be unique within your entire project
    // this is also the text you see on the left hand navigation in storybook
    title: 'Form/Button',

    // this is equal to the Button component
    // this is optional but suggested so we can use use certain add-on
    component: Button,
    // Possible to establish args at the component level, that will be appplied to all the component stories
    // if we get rid of all the children i our template, then all of our buttons owuld now say 'Button'
    // args: {
    //     children: 'Button'
    // }
    // this wraps every story with the decorator component '<Center>'
}

// Named Exports
//  - each one represents a story
//  - a menu button is created for each of the named exports
//  - for our button component we want to visualize how the button looks in the different variations
//  - a named export is basically a React component
export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>

// the args mechanism starts with use having to create a template out of our component
// we use args to do basically the same thing we did above, but this way we don't hae to wrote JSX '<Button variant='primary'>...' 
//  - with more complex JSX the args approach is much better
const Template = args => <Button {...args} />

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant: 'primary',
    children: 'Primary Args'
}

// here we have basically the PrimaryA button with a different child
export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
    // notice that here we are spreading all the args from 'PrimaryA' from above
    ...PrimaryA.args,
    // then we change the children arg.
    // this allows us to reuse templates from other stories to create new and unique stories.
    // we can extend the props from other stories.
    // imagine if we had 10 props, this would be so much faster
    children: 'Long Pirmary Args'
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
    variant: 'secondary',
    children: 'Secondary Args'

}