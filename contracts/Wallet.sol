// SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

/// @title ETH Wallet Contract
/// @author Alviss Raghnall
/// @notice Stores ETH balance, and processes transactions.
/// @dev Explain to a developer any extra details
contract Wallet {

    mapping(address => uint256) public addressToAmountReceived;

    function balance () external view returns (uint) {
        return address(this).balance;
    }
    
}