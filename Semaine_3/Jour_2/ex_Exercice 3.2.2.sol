pragma solidity ^0.4.25;
contract Cogere {

  mapping (address => uint) organisateurs;

  constructor() internal {
    organisateurs[msg.sender] = 100;
  }

  function transfererOrga(address orga, uint parts) public {
    organisateurs[orga] += parts;
    organisateurs[msg.sender] = sub(organisateurs[msg.sender],parts);
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
contract CagnotteFestival is Cogere {


  mapping (address => uint) festivaliers;
  uint private depensesTotales;
  uint public montantMinSponsor;
  string[] sponsors;

  function acheterTicket() public payable {
    require(msg.value > 500 finney, "Place à 0.5 Ether");
    festivaliers[msg.sender];
  }

  function payer(address  destinataire, uint montant) public payable {
    require(estOrga(msg.sender));
    require(destinataire != address(0));
    require(montant > 0);

    destinataire.transfer(montant);
  }

  function sponsoriser(string memory nom) public payable {
    require(msg.value >= montantMinSponsor);
    sponsors.push(nom);
  }
  
  function comptabiliserDepenses(uint montant) private {
    depensesTotales += montant;
  }

}
