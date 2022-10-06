import React from 'react';
// import { addDecorator } from '@storybook/react';
// import Center from '../src/components/Center/Center';
import { ThemeProvider, theme, CSSReset, Box } from '@chakra-ui/react'

 
// addDecorator(story => <ThemeProvider theme={theme}><CSSReset />{story()}</ThemeProvider>)
// congifurations for the stories we will write.
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // sorts stories alphabetically
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: {

    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    // controls: {
    //   expanded: true
    // }

  },

}

// we can specify an array or decorators that can be exported
// a decorator is a wrapper component for a story
export const decorators = [
  // an arrow function which recieves 'Story' as its arguement
  (Story) => (
    // this is how yo provide a theme in ChakraUI
    // here theme is  assigned to the theme we imported, and sent as a prop to 'ThemeProvider'
    <ThemeProvider theme={theme}>
      {/* as children we have the following children */}
      <CSSReset />
      {/* this child allows us to provide margins */}
      <Box m="4">
        {/* Here we render our Story component  */}
        <Story />
      </Box>
    </ThemeProvider>
  )
]