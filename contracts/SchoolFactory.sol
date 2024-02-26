// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.21;

import "./School.sol";

contract SchoolFactory {
    School[] public deployedSchools;

    function createSchool(string memory name) external {
        School newSchool = new School(name);
        deployedSchools.push(newSchool);
    }

    function getDeployedSchools() external view returns (School[] memory) {
        return deployedSchools;
    }
}