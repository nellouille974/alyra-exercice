pragma solidity ^0.4.25;
contract CagnotteFestival {

  mapping (address => uint) organisateurs;

  constructor() public {
    organisateurs[msg.sender] = 100;
  }

  function transfererOrga(address orga, uint parts) public {
    organisateurs[orga] += parts;
    sub(organisateurs[msg.sender],parts);
  }

  function estOrga(address orga) public view returns (bool)  {
    if(organisateurs[orga] > 0) {
      return true;
    } else return false;
  }

    /**
  * @dev Subtracts two numbers, reverts on overflow (i.e. if subtrahend is greater than minuend).
  */
  function sub(uint256 a, uint256 b) internal pure returns (uint256) {
    require(b <= a);
    uint256 c = a - b;

    return c;
  }
}
