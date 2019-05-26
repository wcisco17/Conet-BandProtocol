export const theme = {
    colors: {
        primary: '#88DEAF',
        primaryBackground: '#2F2F69',
        dark: '#3a3a3a',
        light: '#FFFFFF',
        btn: {
            primaryOrange: '#FA735C',
            primaryRed: '#EB12D8',
            primaryBlue: '#3b5998',
            primaryGreen: '#00c300',
        },
        grey: {
            dark: 'rgba(0, 0, 0, 0.9)',
            default: 'rgba(0, 0, 0, 0.7)',
            light: 'rgba(0, 0, 0, 0.5)',
            ultraLight: 'rgba(0, 0, 0, 0.25)',
        },
    },
    fontFamily: {
        main: `'Montserrat', sans-serif;`
    },
     widths: {
        MOBILE_WIDTH: `@media (max-width:${500}px)`,
        MEDIUM_WIDTH: `@media (max-width:${720}px)`,
        LARGE_WIDTH: `@media (max-width:${960}px)`,
        EXTRA_LARGE_WIDTH: `@media (max-width:${1140}px)`,
        DESKTOP_FULL_WIDTH: `@media (max-width:${1300}px)`,
    },
    flex:`
        display: flex;
        align-items: center;
        justify-content: center;
    `,
};