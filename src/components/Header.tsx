import styled from "../assets/styles";
import { theme } from '../assets/styles/mainStyles';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
    padding-right: 136px;
    padding-left: 136px;
    h1 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bolder;
        font-size: 48px;
        color: ${theme.colors.primary};
    }
`