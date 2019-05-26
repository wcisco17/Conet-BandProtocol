import Link from 'next/link';
import styled from "../assets/styles";
import { theme } from '../assets/styles/mainStyles';

export const Button = styled.button`
    width: 195px;
    height: 44px;
    cursor: pointer;
    background: #FFFFFF;
    border-radius: 5px;
    font-style: normal;
    font-weight: bolder;
    font-size: 18px;
    color: ${theme.colors.primary};
`;

export const SendButton = styled.a`
    width: 185px;
    height: 70px;
    background: ${theme.colors.primary};
    ${theme.flex}
    border-radius: 5px;
    cursor: pointer;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #FFFFFF;
`;

interface IProps {
    title: any;
    symbol: any;
}

export default ({ title, symbol }: IProps) => {
    return (

        <Link
            href={{
                pathname: '/public',
                query: {
                    title,
                    symbol,
                }
            }}

        >
            <SendButton >
                Create Community
                </SendButton>
        </Link>
    )
}