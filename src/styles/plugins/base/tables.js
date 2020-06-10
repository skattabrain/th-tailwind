module.exports = function ({ addBase, theme }) {
  addBase({
    table: {
      display: 'table',
      width: '100%',
      backgroundColor: theme('colors.white'),
      '.btn-group': {
        opacity: 0,
      },
      '&.table-hover tbody tr:hover': {
        backgroundColor: theme('colors.grey.200'),
        td: {
          borderColor: theme('colors.grey.300'),
          '&.actions': {
            paddingTop: 0,
            paddingBottom: 0,
          }
        },
        '.btn-group': {
          opacity: 1,
          float: 'right',
        }
      }
    },
    th: {
      textAlign: 'left',
      color: theme('colors.grey.600'),
      backgroundColor: theme('colors.white'),
      height: '3rem',
      fontSize: theme('fontSize.sm'),
      fontWeight: theme('fontWeight.bold'),
      borderBottom: `2px solid ${theme('colors.grey.200')}`,
      padding: `${theme('spacing.1')} ${theme('spacing.4')}`,
    },
    td: {
      textAlign: 'left',
      height: '3rem',
      padding: `${theme('spacing.1')} ${theme('spacing.4')}`,
      borderBottom: `1px solid ${theme('colors.grey.200')}`,
    },
  })
}
