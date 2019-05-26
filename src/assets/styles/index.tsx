import * as styledComponents from "styled-components";
import { ThemedGlobalStyledClassProps } from 'styled-components';

const {
    default: styled,
    css,
    createGlobalStyle,
    keyframes,
    ThemeProvider,
    ServerStyleSheet
} = styledComponents as styledComponents.ThemedStyledComponentsModule<{}, ThemedGlobalStyledClassProps<any, any>>;

export { ServerStyleSheet, css, createGlobalStyle, keyframes, ThemeProvider };

export default styled;