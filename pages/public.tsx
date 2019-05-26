import Link from 'next/link';
import * as React from 'react';
import { theme } from '../src/assets/styles/mainStyles';
import { Wrapper } from '../src/components/Container';
import { Community } from '../src/models/Community';

interface IProps {
    query?: {
        title: string;
        symbol: string;
    }
}

export default class extends React.PureComponent<IProps> {
    static getInitialProps({ query }: any) {
        return { query }
    }

    isUndefined = () => (
        <Link href='/'>
            <h3 style={{ color: theme.colors.primary, cursor: 'pointer' }} >
                Go back Home to create a community
            </h3>
        </Link>
    )

    render() {
        const { title, symbol } = this.props.query;
        if (typeof title === 'undefined' || typeof symbol === 'undefined') {
            return <Wrapper>{this.isUndefined()}</Wrapper>;
        } else {
            return (
                <Wrapper>
                    {
                        title.length <= 0 || symbol.length <= 0
                            ? this.isUndefined() : (
                                <Community
                                    title={title}
                                    symbol={symbol}
                                />
                            )
                    }
                </Wrapper>
            )
        }
    }
}

