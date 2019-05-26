import styled from "../assets/styles";
import { theme } from '../assets/styles/mainStyles';

interface IProps {
    title: string;
    children: any;
}

export const Box = styled.div`
    position: absolute;
    width: 400px;
    height: 234px;
    background: #FFFFFF;
    border-radius: 10px;
    flex-direction: column;
    ${theme.flex};
`;

export const Title = styled.h1`
    padding-top: 1rem;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    font-family: ${theme.fontFamily.main};
    text-align: center;
    color: ${theme.colors.primary};
`;

export default ({ title, children }: IProps) => {
    return (
        <Box>
            <Title>
                {title}
            </Title>
            {children}
        </Box>
    );
}