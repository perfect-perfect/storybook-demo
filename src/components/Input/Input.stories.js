import React from 'react';
import Input from './Input';

export default {
    // the 'Form/' adds the Input componenet gtoup under a group titled 'Form'
    title: 'Form/Input',
    component: Input,
}

export const Small = () => <Input size='small' placeholder='Small size'></Input>
export const Medium = () => <Input size='medium' placeholder='Medium size'></Input>
export const Large = () => <Input size='large' placeholder='Large size'></Input>

// we can rename stories
// attaching the storyName property to our const Small allows us to rename a story
// Small.storyName = 'Small input'