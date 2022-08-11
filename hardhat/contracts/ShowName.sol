// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Import this file to use console.log
import "hardhat/console.sol";

contract ShowName {
    string public MyName;

    function set(string memory name) public {
        MyName = name;
    }

    function get() public view returns (string memory) {
        return MyName;
    }
}
