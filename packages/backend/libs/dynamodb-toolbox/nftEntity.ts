import { PARTITION_KEY, SORT_KEY } from '@resources/dynamoDB';
import { Entity } from 'dynamodb-toolbox';
import { nftTable } from './nftTable';

export const NFT = new Entity({
  name: 'NFT',
  attributes: {
    [PARTITION_KEY]: { type: 'string', partitionKey: true, default: 'Nft' },
    [SORT_KEY]: { type: 'string', sortKey: true },
    positionX: { type: 'number' },
    positionY: { type: 'number' },
    src: { type: 'string' },
  },
  table: nftTable,
} as const);
