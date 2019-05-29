
# Conet-BandProtocol
NEXTJS, Typescript, and BandProtocol's Api.


## This project uses Band Protocol's API to create a community on the Rinkebery Blockchain.

The Purpose of this project is to utilize the API and create a smooth interface on top of it, and for anyone that might have
trouble setting things up. Here is the link to the docs https://developer.bandprotocol.com/docs/community.html#band-native-token

## Run project

```typescript
  npm install
```

```typescript
  npm run dev
```

## Using React Hooks to create a community.

This hook takes in three parameters clients, communityTitle, communitySymbol.

```typescript
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
```

## Finished project and Steps

- First Step (Create Community name) 
<img width="2047" alt="Screen Shot 2019-05-27 at 12 51 47 AM" src="https://user-images.githubusercontent.com/35783824/58385421-66942280-801a-11e9-8c67-2637db370651.png">

-Second Step (Create Symbol) 
<img width="2048" alt="Screen Shot 2019-05-27 at 12 52 00 AM" src="https://user-images.githubusercontent.com/35783824/58385427-7ca1e300-801a-11e9-8fe2-bce6a4c16ee6.png">

-Third Step - Creating Community
<img width="2048" alt="Screen Shot 2019-05-27 at 12 52 24 AM" src="https://user-images.githubusercontent.com/35783824/58385436-93e0d080-801a-11e9-9bb1-b0b82115cf40.png">



