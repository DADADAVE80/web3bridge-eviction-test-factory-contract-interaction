// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.21;

contract School {
    string public name;
    address public owner;
    uint256 public studentCount;

    constructor(string memory _name) {
        name = _name;
        owner = msg.sender;
    }

    function enrollStudent() public {
        studentCount++;
    }
}