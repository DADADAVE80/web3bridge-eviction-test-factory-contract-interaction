// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.21;

interface ISchoolFactory {
    function createSchool(string memory name) external;
}