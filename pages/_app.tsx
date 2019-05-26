import App, { AppComponentProps, Container } from 'next/app';
import * as React from 'react';
import { GlobalStyled } from '../src/assets/styles/globalStyles';

export default class RootApp extends App<AppComponentProps> {
    static async getInitialProps({ Component, router, ctx }: any) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        };

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <GlobalStyled />
                <Component {...pageProps} />
            </Container>
        );
    }
}