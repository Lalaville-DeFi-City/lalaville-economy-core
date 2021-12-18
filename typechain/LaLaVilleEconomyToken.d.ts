/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface LaLaVilleEconomyTokenInterface extends ethers.utils.Interface {
  functions: {
    "contractOwner()": FunctionFragment;
    "getTotalBorrowPool()": FunctionFragment;
    "totalTokens()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "contractOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalBorrowPool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalTokens",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "contractOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalBorrowPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalTokens",
    data: BytesLike
  ): Result;

  events: {};
}

export class LaLaVilleEconomyToken extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: LaLaVilleEconomyTokenInterface;

  functions: {
    contractOwner(overrides?: CallOverrides): Promise<[string]>;

    getTotalBorrowPool(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalTokens(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  contractOwner(overrides?: CallOverrides): Promise<string>;

  getTotalBorrowPool(overrides?: CallOverrides): Promise<BigNumber>;

  totalTokens(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    contractOwner(overrides?: CallOverrides): Promise<string>;

    getTotalBorrowPool(overrides?: CallOverrides): Promise<BigNumber>;

    totalTokens(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    contractOwner(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalBorrowPool(overrides?: CallOverrides): Promise<BigNumber>;

    totalTokens(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    contractOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTotalBorrowPool(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
