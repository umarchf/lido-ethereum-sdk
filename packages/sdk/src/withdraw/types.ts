import type { Address } from 'viem';

import type { LidoSDKCommonProps } from '../core/types.js';
import type { Bus } from './bus.js';

export type LidoSDKWithdrawProps = LidoSDKCommonProps;

export type LidoSDKWithdrawModuleProps = { bus: Bus };

export type RequestStatus = {
  amountOfStETH: bigint;
  amountOfShares: bigint;
  owner: Address;
  timestamp: bigint;
  isFinalized: boolean;
  isClaimed: boolean;
};

export type RequestStatusWithId = {
  amountOfStETH: bigint;
  amountOfShares: bigint;
  owner: Address;
  timestamp: bigint;
  isFinalized: boolean;
  isClaimed: boolean;
  id: bigint;
  stringId: string;
};
