import * as React from 'react';
import { Fragment, useState } from 'react';
import Box from '../components/Box';
import SendButton from '../components/Buttons';
import Form from '../components/Form';

export default () => {
    const [boarding, setOnboarding] = useState(1);
    const [communityName, setcommunityName] = useState('');
    const [communitySymbol, setcommunitySymbol] = useState('');

    return (
        <Fragment>
            {
                boarding === 1 && (
                    <Fragment>
                        <Box title="Create a community name">
                            <Form
                                title='Enter community name'
                                onSubmit={(text: any) => {
                                    setcommunityName(text)
                                    setOnboarding(2)
                                }}
                            />

                        </Box>
                    </Fragment>
                )
            }

            {
                boarding === 2 && (
                    <Fragment>
                        <Box title="Create a community Symbol">
                            <Form
                                title='Enter community Symbol'
                                onSubmit={(text: any) => {
                                    setcommunitySymbol(text)
                                    setOnboarding(3)
                                }}
                            />
                        </Box>
                    </Fragment>
                )
            }
            {
                boarding === 3 && (
                    <SendButton
                        title={communityName}
                        symbol={communitySymbol}
                    />

                )
            }
        </Fragment>
    )
}

