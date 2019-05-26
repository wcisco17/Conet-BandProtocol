import * as React from 'react';
import { useCreateCommunity } from '../assets/helper/index';
import Box from '../components/Box';

interface IProps {
    title: string;
    symbol: string;
}

export const Community = ({ title, symbol }: IProps) => {
    const { community } = useCreateCommunity({}, title, symbol);

    if (!community!.parameter) {
        console.log('undefined')
        return (
            <Box title={'Check Meta Mask...'} >
                <h3 style={{ color: 'black' }} >
                    Loading ....
                </h3>
            </Box>
        )
    } else {
        console.log(community.parameter);
        return (
            <Box title={`Community Name: ${title}`} >
                <h3 style={{ color: 'black' }} >
                    Community Symbol: {symbol}
                </h3>
            </Box>
        );
    }


}