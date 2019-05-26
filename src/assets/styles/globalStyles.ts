import { createGlobalStyle } from './index';
import { theme } from './mainStyles';
  
  const GlobalStyled = createGlobalStyle `
    @import url('https://fonts.googleapis.com/css?family=Montserrat');
  
    *, html {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
  
    body {
        font-family: ${theme.fontFamily.main};
    }
  `;
  
  export { GlobalStyled, };
