//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.15;

import "@ensdomains/ens-contracts/contracts/registry/ENS.sol";
import "@ensdomains/ens-contracts/contracts/registry/ReverseRegistrar.sol";
import "@ensdomains/ens-contracts/contracts/resolvers/Resolver.sol";

import "hardhat/console.sol";

contract CNSController {
    ENS public ens;
    Resolver public resolver;
    address internal resolverAddress;
    ReverseRegistrar public reverseRegistrar;

    /**
     * Constructor.
     * @param ensAddr The address of the ENS registry.
     */
    constructor(address ensAddr, address resolverAddr) {
        require(address(ensAddr) != address(0), "Invalid address");
        require(address(resolverAddr) != address(0), "Invalid address");

        ens = ENS(ensAddr);
        resolver = Resolver(resolverAddr);
        resolverAddress = resolverAddr;
    }

    /**
     * Register a name, or change the owner of an existing registration.
     * @param label The hash of the label to register.
     */
    function register(
        bytes32 _node,
        bytes32 label,
        address owner
    ) public {
        _register(_node, label, owner);
    }

    /**
     * Register a name, or change the owner of an existing registration.
     * @param label The hash of the label to register.
     */
    function _register(
        bytes32 _node,
        bytes32 label,
        address owner
    ) internal {
        ens.setSubnodeRecord(_node, label, owner, resolverAddress, 0);
    }

    function get101() public returns (uint256) {
        return 101;
    }
}
