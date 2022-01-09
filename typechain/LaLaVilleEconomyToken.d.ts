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
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface LaLaVilleEconomyTokenInterface extends ethers.utils.Interface {
  functions: {
    "allocate(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "balances(address)": FunctionFragment;
    "buildContractRewards(address)": FunctionFragment;
    "buildContracts(bytes32)": FunctionFragment;
    "busyBuilders(address)": FunctionFragment;
    "bytes32ToString(bytes32)": FunctionFragment;
    "changeBuilder(bytes32,bool,address)": FunctionFragment;
    "contractOwner()": FunctionFragment;
    "deposit(uint256)": FunctionFragment;
    "getTotalBorrowPool()": FunctionFragment;
    "random()": FunctionFragment;
    "replyContractRequest(bytes32,bool)": FunctionFragment;
    "requestContract(uint256,address)": FunctionFragment;
    "rewardBuilder(bytes32)": FunctionFragment;
    "uintToString(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "allocate",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "balances", values: [string]): string;
  encodeFunctionData(
    functionFragment: "buildContractRewards",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "buildContracts",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "busyBuilders",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "bytes32ToString",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "changeBuilder",
    values: [BytesLike, boolean, string]
  ): string;
  encodeFunctionData(
    functionFragment: "contractOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalBorrowPool",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "random", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "replyContractRequest",
    values: [BytesLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "requestContract",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardBuilder",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "uintToString",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "allocate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "buildContractRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "buildContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "busyBuilders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bytes32ToString",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeBuilder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTotalBorrowPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "random", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "replyContractRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardBuilder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uintToString",
    data: BytesLike
  ): Result;

  events: {
    "BuildContractConfirmed(string,address)": EventFragment;
    "BuildContractCreated(string,address,address,bool)": EventFragment;
    "BuildContractDeclined(string,address)": EventFragment;
    "BuilderChanged(string,address)": EventFragment;
    "DepositSuccess(address,uint256)": EventFragment;
    "RewardBuilder(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BuildContractConfirmed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BuildContractCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BuildContractDeclined"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BuilderChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DepositSuccess"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardBuilder"): EventFragment;
}

export type BuildContractConfirmedEvent = TypedEvent<
  [string, string] & { contractId: string; performer: string }
>;

export type BuildContractCreatedEvent = TypedEvent<
  [string, string, string, boolean] & {
    contractId: string;
    owner: string;
    busyBuilder: string;
    setBusy: boolean;
  }
>;

export type BuildContractDeclinedEvent = TypedEvent<
  [string, string] & { contractId: string; performer: string }
>;

export type BuilderChangedEvent = TypedEvent<
  [string, string] & { contractId: string; newBuilder: string }
>;

export type DepositSuccessEvent = TypedEvent<
  [string, BigNumber] & { from: string; value: BigNumber }
>;

export type RewardBuilderEvent = TypedEvent<
  [string, BigNumber] & { performer: string; reward: BigNumber }
>;

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
    allocate(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    balances(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    buildContractRewards(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    buildContracts(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, string, string] & {
        reward: BigNumber;
        status: number;
        performer: string;
        customer: string;
      }
    >;

    busyBuilders(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    bytes32ToString(
      _bytes32: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    changeBuilder(
      contractId: BytesLike,
      removeContract: boolean,
      newBuilder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    contractOwner(overrides?: CallOverrides): Promise<[string]>;

    deposit(
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getTotalBorrowPool(overrides?: CallOverrides): Promise<[BigNumber]>;

    random(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rand: BigNumber }>;

    replyContractRequest(
      contractId: BytesLike,
      accept: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requestContract(
      rewardTokens: BigNumberish,
      performer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rewardBuilder(
      contractId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    uintToString(
      v: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { ret: string }>;
  };

  allocate(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  buildContractRewards(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  buildContracts(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, string, string] & {
      reward: BigNumber;
      status: number;
      performer: string;
      customer: string;
    }
  >;

  busyBuilders(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  bytes32ToString(
    _bytes32: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  changeBuilder(
    contractId: BytesLike,
    removeContract: boolean,
    newBuilder: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  contractOwner(overrides?: CallOverrides): Promise<string>;

  deposit(
    amount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getTotalBorrowPool(overrides?: CallOverrides): Promise<BigNumber>;

  random(overrides?: CallOverrides): Promise<BigNumber>;

  replyContractRequest(
    contractId: BytesLike,
    accept: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requestContract(
    rewardTokens: BigNumberish,
    performer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rewardBuilder(
    contractId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  uintToString(v: BigNumberish, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    allocate(
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    buildContractRewards(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    buildContracts(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, string, string] & {
        reward: BigNumber;
        status: number;
        performer: string;
        customer: string;
      }
    >;

    busyBuilders(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    bytes32ToString(
      _bytes32: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    changeBuilder(
      contractId: BytesLike,
      removeContract: boolean,
      newBuilder: string,
      overrides?: CallOverrides
    ): Promise<void>;

    contractOwner(overrides?: CallOverrides): Promise<string>;

    deposit(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    getTotalBorrowPool(overrides?: CallOverrides): Promise<BigNumber>;

    random(overrides?: CallOverrides): Promise<BigNumber>;

    replyContractRequest(
      contractId: BytesLike,
      accept: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    requestContract(
      rewardTokens: BigNumberish,
      performer: string,
      overrides?: CallOverrides
    ): Promise<void>;

    rewardBuilder(
      contractId: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    uintToString(v: BigNumberish, overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "BuildContractConfirmed(string,address)"(
      contractId?: null,
      performer?: null
    ): TypedEventFilter<
      [string, string],
      { contractId: string; performer: string }
    >;

    BuildContractConfirmed(
      contractId?: null,
      performer?: null
    ): TypedEventFilter<
      [string, string],
      { contractId: string; performer: string }
    >;

    "BuildContractCreated(string,address,address,bool)"(
      contractId?: null,
      owner?: null,
      busyBuilder?: null,
      setBusy?: null
    ): TypedEventFilter<
      [string, string, string, boolean],
      {
        contractId: string;
        owner: string;
        busyBuilder: string;
        setBusy: boolean;
      }
    >;

    BuildContractCreated(
      contractId?: null,
      owner?: null,
      busyBuilder?: null,
      setBusy?: null
    ): TypedEventFilter<
      [string, string, string, boolean],
      {
        contractId: string;
        owner: string;
        busyBuilder: string;
        setBusy: boolean;
      }
    >;

    "BuildContractDeclined(string,address)"(
      contractId?: null,
      performer?: null
    ): TypedEventFilter<
      [string, string],
      { contractId: string; performer: string }
    >;

    BuildContractDeclined(
      contractId?: null,
      performer?: null
    ): TypedEventFilter<
      [string, string],
      { contractId: string; performer: string }
    >;

    "BuilderChanged(string,address)"(
      contractId?: null,
      newBuilder?: null
    ): TypedEventFilter<
      [string, string],
      { contractId: string; newBuilder: string }
    >;

    BuilderChanged(
      contractId?: null,
      newBuilder?: null
    ): TypedEventFilter<
      [string, string],
      { contractId: string; newBuilder: string }
    >;

    "DepositSuccess(address,uint256)"(
      from?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { from: string; value: BigNumber }
    >;

    DepositSuccess(
      from?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { from: string; value: BigNumber }
    >;

    "RewardBuilder(address,uint256)"(
      performer?: null,
      reward?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { performer: string; reward: BigNumber }
    >;

    RewardBuilder(
      performer?: null,
      reward?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { performer: string; reward: BigNumber }
    >;
  };

  estimateGas: {
    allocate(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    buildContractRewards(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    buildContracts(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    busyBuilders(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    bytes32ToString(
      _bytes32: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    changeBuilder(
      contractId: BytesLike,
      removeContract: boolean,
      newBuilder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    contractOwner(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getTotalBorrowPool(overrides?: CallOverrides): Promise<BigNumber>;

    random(overrides?: CallOverrides): Promise<BigNumber>;

    replyContractRequest(
      contractId: BytesLike,
      accept: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requestContract(
      rewardTokens: BigNumberish,
      performer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rewardBuilder(
      contractId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    uintToString(
      v: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allocate(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    buildContractRewards(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    buildContracts(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    busyBuilders(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bytes32ToString(
      _bytes32: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    changeBuilder(
      contractId: BytesLike,
      removeContract: boolean,
      newBuilder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    contractOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getTotalBorrowPool(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    random(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    replyContractRequest(
      contractId: BytesLike,
      accept: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requestContract(
      rewardTokens: BigNumberish,
      performer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rewardBuilder(
      contractId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    uintToString(
      v: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
