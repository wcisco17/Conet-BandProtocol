import { BandProtocolClient } from 'band.js';
import CommunityClient from 'band.js/dist/services/CommunityClient';
import { useEffect, useState } from 'react';

export const useCreateCommunity = (clients: any, communityTitle: string, communitySymbol: string) => {
    const [community, setCommunity] = useState<CommunityClient>(clients);
    const [title, setTitle] = useState('');
    const [symbol, setSymbol] = useState('');

    const bandProtocolCreateCommunity = async (): Promise<any> => {
        // Set Protocol Provider
        const bandClient = await BandProtocolClient.make({ provider: window.web3.currentProvider, });

        // Create community client
        const communityClient = await bandClient.createCommunity({
            name: title,
            symbol: symbol,
            bonding: {
                collateralEquation: ["8", "1", "0", "2"],
                liquiditySpread: "30000000000000000"
            },
            params: {
                expirationTime: "300",
                minParticipationPct: "10000000000000000",
                supportRequiredPct: "800000000000000000"
            }
        });

        setTitle(communityTitle);
        setSymbol(communitySymbol);
        setCommunity(communityClient);
    }

    useEffect(() => {
        bandProtocolCreateCommunity()
    }, []);

    return {
        community
    }
}
