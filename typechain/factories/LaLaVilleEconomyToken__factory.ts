/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LaLaVilleEconomyToken,
  LaLaVilleEconomyTokenInterface,
} from "../LaLaVilleEconomyToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "contractOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalBorrowPool",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600060015534801561001557600080fd5b5060405161031938038061031983398181016040528101906100379190610092565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610104565b60008151905061008c816100ed565b92915050565b6000602082840312156100a457600080fd5b60006100b28482850161007d565b91505092915050565b60006100c6826100cd565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6100f6816100bb565b811461010157600080fd5b50565b610206806101136000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063516de6c2146100465780637e1c0c0914610064578063ce606ee014610082575b600080fd5b61004e6100a0565b60405161005b9190610119565b60405180910390f35b61006c6100b6565b6040516100799190610119565b60405180910390f35b61008a6100bc565b60405161009791906100fe565b60405180910390f35b600060036001546100b19190610134565b905090565b60015481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6100e981610165565b82525050565b6100f881610197565b82525050565b600060208201905061011360008301846100e0565b92915050565b600060208201905061012e60008301846100ef565b92915050565b600061013f82610197565b915061014a83610197565b92508261015a576101596101a1565b5b828204905092915050565b600061017082610177565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fdfea2646970667358221220077041abdba7c00bfe5fd1a5608222cf725c8703ec274cc95fe1a25eee2a24fe64736f6c63430008040033";

export class LaLaVilleEconomyToken__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LaLaVilleEconomyToken> {
    return super.deploy(
      _owner,
      overrides || {}
    ) as Promise<LaLaVilleEconomyToken>;
  }
  getDeployTransaction(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  attach(address: string): LaLaVilleEconomyToken {
    return super.attach(address) as LaLaVilleEconomyToken;
  }
  connect(signer: Signer): LaLaVilleEconomyToken__factory {
    return super.connect(signer) as LaLaVilleEconomyToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LaLaVilleEconomyTokenInterface {
    return new utils.Interface(_abi) as LaLaVilleEconomyTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LaLaVilleEconomyToken {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LaLaVilleEconomyToken;
  }
}
