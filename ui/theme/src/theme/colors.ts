const colors = {
  button: {
    transparentWhite: {
      default: {
        background: 'rgba(255, 255, 255, 0.2)',
        font: 'rgb(255,255,255)',
        border: 'transparent',
      },
      hover: {
        background: 'rgba(255, 255, 255, 0.35)',
        font: 'rgb(255,255,255)',
        border: 'transparent',
      },
      pressed: {
        background: 'rgba(255, 255, 255, 0.5)',
        font: 'rgb(255,255,255)',
        border: 'transparent',
      },
      disabled: {
        background: 'rgba(255, 255, 255, 0.1)',
        font: 'rgb(255,255,255)',
        border: 'transparent',
      },
    },
    borderTransparentWhite: {
      default: {
        background: 'transparent',
        font: 'rgb(255,255,255)',
        border: 'rgba(255, 255, 255, 0.25)',
      },
      hover: {
        background: 'transparent',
        font: 'rgb(255,255,255)',
        border: 'rgba(255, 255, 255, 0.5)',
      },
      pressed: {
        background: 'transparent',
        font: 'rgb(255,255,255)',
        border: 'rgba(255, 255, 255, 0.5)',
      },
      disabled: {
        background: 'transparent',
        font: 'rgb(255,255,255)',
        border: 'rgba(255, 255, 255, 0.25)',
      },
    },
    darkPurpleBlue: {
      default: {
        background: 'rgb(58, 55, 93)',
        font: 'rgb(255,255,255)',
        border: 'transparent',
      },
      hover: {
        background: 'rgb(88, 83, 140)',
        font: 'rgb(255,255,255)',
        border: 'transparent',
      },
      pressed: {
        background: 'rgb(114, 108, 182)',
        font: 'rgb(255,255,255)',
        border: 'transparent',
      },
      disabled: {
        background: 'rgba(58, 55, 93, 0.25)',
        font: 'rgba(255,255,255, 0.5)',
        border: 'transparent',
      },
    },
  },
  text: {
    white: 'rgba(255,255,255,1)',
    darkPurpleBlue: 'rgb(58, 55, 93)',
    transparentDarkPurpleBlue: 'rgba(58, 55, 93, 0.75)',
    lightPurpleBlue: 'rgb(77, 60, 242)',
  },
  background: {
    gray: 'rgb(97, 97, 97)',
    lightGray: 'rgba(255, 255, 255, 0.08)',
    transparentGray: 'rgba(255, 255, 255, 0.25)',
    white: 'rgb(255, 255, 255)',
    transparentWhite: 'rgba(255, 255, 255, 0.15)',
    transparentDarkBlue: 'rgba(27, 26, 51, 0.15)',
  },
  input: {
    background: 'rgba(255, 255, 255, 1)',
    font: 'rgba(0, 0, 0, 1)',
    border: 'rgba(15, 76, 139, 0.08)',
    hover: 'rgba(36,114,238,1)',
    focus: 'rgba(63,135,249,1)',
    press: 'rgba(24,97,214,1)',
    error: 'rgba(236,34,34,1)',
  },
}

export { colors }
