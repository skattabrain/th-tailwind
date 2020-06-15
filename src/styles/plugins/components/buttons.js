module.exports = function ({ addComponents, theme }) {

  // the big question - Is this better using JS (will need to import color palette from a JS file)
  // or is it better to create a component that's using the utilities? theme('colors.primary.hover') or theme('colors.primary.700')
  // easy enough, but is it worthwhile to use a plain CSS file and instead use `@apply display-inline text-center align-middle select-none etc...`

  const buttons = {
    '.btn': {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      borderRadius: 'none',
      borderWidth: theme('borderWidth.2'),
      display: 'inline-block',
      fontSize: theme('fontSize.base'),
      lineHeight: theme('lineHeight.normal'),
      padding: `${theme('spacing.1')} ${theme('spacing.3')}`,
      textAlign: 'center',
      userSelect: 'none',

      '&:focus': {
        outline: 'none',
        boxShadow: theme('boxShadow.button-focus')
      }
    },

    '.btn--default': {
      color: theme('oneVars.buttons.default.color.default'),
      backgroundColor: theme('oneVars.buttons.default.backgroundColor.default'),
      borderColor: theme('oneVars.buttons.default.borderColor.default'),

      '&:focus': {
        backgroundColor: theme('oneVars.buttons.default.backgroundColor.focus'),
        borderColor: theme('oneVars.buttons.default.borderColor.focus'),
      },

      '&:hover:focus, &:hover': {
        backgroundColor: theme('oneVars.buttons.default.backgroundColor.hover'),
        borderColor: theme('oneVars.buttons.default.borderColor.hover'),
      },

      '&:active': {
        backgroundColor: theme('oneVars.buttons.default.backgroundColor.active'),
        borderColor: theme('oneVars.buttons.default.borderColor.active'),
      },

      '&:active:focus': {
        backgroundColor: theme('oneVars.buttons.default.backgroundColor.focus'),
        borderColor: theme('oneVars.buttons.default.borderColor.focus'),
      },
    },

    '.btn--primary': {
      color: theme('oneVars.buttons.primary.color.default'),
      backgroundColor: theme('oneVars.buttons.primary.backgroundColor.default'),
      borderColor: theme('oneVars.buttons.primary.borderColor.default'),

      '&:focus': {
        backgroundColor: theme('oneVars.buttons.primary.backgroundColor.focus'),
        borderColor: theme('oneVars.buttons.primary.borderColor.focus'),
      },

      '&:hover:focus, &:hover': {
        backgroundColor: theme('oneVars.buttons.primary.backgroundColor.hover'),
        borderColor: theme('oneVars.buttons.primary.borderColor.hover'),
      },

      '&:active': {
        backgroundColor: theme('oneVars.buttons.primary.backgroundColor.active'),
        borderColor: theme('oneVars.buttons.primary.borderColor.active'),
      },

      '&:active:focus': {
        backgroundColor: theme('oneVars.buttons.primary.backgroundColor.focus'),
        borderColor: theme('oneVars.buttons.primary.borderColor.focus'),
      },
    },

    '.btn-ghost': {
      backgroundColor: theme('colors.white'),
      color: theme('colors.blue.700'),
    },
    '.btn-group': {
      position: 'relative',
      display: 'inline-flex',
      verticalAlign: 'middle',
      '.btn:not(:first-child)': {
        marginLeft: '1px'
      }
    }
  }

  addComponents(buttons)
}
