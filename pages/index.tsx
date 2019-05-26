import * as React from 'react';
import { Wrapper } from '../src/components/Container';
import Home from '../src/models/Home';

export default (props: any) => {
    return (
        <Wrapper>
            <Home {...props} />
        </Wrapper>
    );
}