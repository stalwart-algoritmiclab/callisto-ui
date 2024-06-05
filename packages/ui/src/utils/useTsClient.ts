import { Client } from 'stwart-client';

const apiURL = process.env.NEXT_PUBLIC_API_COSMOS;
const rpcURL = process.env.NEXT_PUBLIC_WS_TENDERMINT;
const prefix = process.env.NEXT_PUBLIC_ASSET;

export const env = {
  apiURL,
  rpcURL,
  prefix,
};

const useClientInstance = () => {
  const client = new Client(env);
  return client;
};
let clientInstance: ReturnType<typeof useClientInstance>;

export const useClient = () => {
  if (!clientInstance) {
    clientInstance = useClientInstance();
  }
  return clientInstance;
};
