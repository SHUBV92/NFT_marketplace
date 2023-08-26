import React, { useState, useEffect } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import axios from 'axios';

import { create as ipfsHttpClient } from 'ipfs-http-client';

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0');
// const client = ipfsHttpClient();

console.log({ client });

export const NFTContext = React.createContext();

export const NFTProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('');
  const nftCurrency = 'ETH';

  // Check the connection of the wallet
  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return alert('Please install MetaMask');

    const accounts = await window.ethereum.request({ method: 'eth_accounts' });

    if (accounts.length) {
      setCurrentAccount(accounts[0]);
    } else {
      console.log('No Accounts found');
    }
  };

  // Run on Render
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) return alert('Please install MetaMask');

    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });

    setCurrentAccount(accounts[0]);

    window.location.reload();
  };

  const uploadToIPFS = async (file, setFileUrl) => {
    console.log({ file });
    try {
      const added = await client.add({ content: file });

      console.log({ added });

      const url = `https://ipfs.infura.io/ipfs${added.path}`;

      setFileUrl(url);

      return url;
    } catch (error) {
      console.log('Error uploding file to IPFS');
    }
  };

  return (
    <NFTContext.Provider
      value={{ nftCurrency, connectWallet, currentAccount, uploadToIPFS }}
    >
      {children}
    </NFTContext.Provider>
  );
};
