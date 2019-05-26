import Link from 'next/link';
import { Fragment, PropsWithChildren } from "react";
import styled from "../assets/styles";
import { theme } from '../assets/styles/mainStyles';
import { Button } from "./Buttons";
import { Header } from "./Header";

export const Container = styled.section`
    background-color: ${theme.colors.primaryBackground};
    height: 80vh;

    .container-box {
        ${theme.flex};
        padding: 260px 0px;
    }
`;

export const Footer = styled.footer`
    background-color: ${theme.colors.primary};    
    height: 20vh;
    color: white;
    padding: 62px 126px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .demo {
        line-height: 2rem;
    }
`;

export const Wrapper = ({ children }: PropsWithChildren<any>) =>
    (
        <Fragment>
            <Container>
                <Header>
                    <Link href='/'>
                        <h1 style={{ cursor: 'pointer' }} >Conet</h1>
                    </Link>
                    <Link href='/public'>
                        <Button>
                            Public Protocol’s
                        </Button>
                    </Link>
                </Header>
                <div className='container-box' >
                    {children}
                </div>
            </Container>
            <Footer>
                <div>
                    <h1>
                        @Conet.co
                    </h1>
                </div>
                <div className='demo' >
                    <h3>Demo by Williams</h3>
                    <h3>Github:

                      <a href="https://github.com/wcisco17">
                            https://github.com/wcisco17
                      </a>
                    </h3>
                </div>
            </Footer>
        </Fragment>
    )