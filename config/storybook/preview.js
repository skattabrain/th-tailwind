import './storybook.css'
import '../../src/styles.css'
import { addParameters } from '@storybook/vue'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { colorMapFlat } from '../../src/utils/colors.js'
require('typeface-open-sans')

addParameters({
  backgrounds: {
    default: 'bg-grey-100',
    values: colorMapFlat(),
  },
  layout: 'centered',
  viewport: {
    viewports: INITIAL_VIEWPORTS
  },
})
