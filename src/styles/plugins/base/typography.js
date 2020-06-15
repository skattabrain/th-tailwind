module.exports = function ({ addBase, theme }) {
  addBase({
    // ':focus': {
    //   outline: `${theme('colors.blue.500')} solid 2px`,
    // },
    'body': {
      color: theme('colors.grey.900'),
      fontSize: theme('fontSize.base'),
      fontWeight: theme('fontWeight.light')
    },
    'h1': {
      fontSize: theme('fontSize.5xl'),
      textTransform: 'uppercase',
      fontWeight: theme('fontWeight.black'),
    },
    'h2': {
      fontSize: theme('fontSize.4xl'),
      fontWeight: theme('fontWeight.bold'),
    },
    'h3': {
      fontSize: theme('fontSize.3xl'),
      fontWeight: theme('fontWeight.bold'),
    },
    'h4': {
      fontSize: theme('fontSize.2xl'),
      fontWeight: theme('fontWeight.bold'),
    },
    'h5': {
      fontSize: theme('fontSize.xl'),
      fontWeight: theme('fontWeight.bold'),
    },
    'h6': {
      fontSize: theme('fontSize.lg'),
      fontWeight: theme('fontWeight.bold'),
    },
    'p': {
      fontSize: theme('fontSize.base'),
      fontWeight: theme('fontWeight.light'),
    },
    'a': {
      color: theme('colors.primary.500'),
      '&:hover': {
        textDecoration: 'underline'
      }
    },
  })
}
