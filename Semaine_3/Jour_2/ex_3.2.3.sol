//Write your own contracts here. Currently compiles using solc v0.4.15+commit.bbb8e64f.
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
     * @dev Multiplies two unsigned integers, reverts on overflow.
     */
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        // Gas optimization: this is cheaper than requiring 'a' not being zero, but the
        // benefit is lost if 'b' is also tested.
        // See: https://github.com/OpenZeppelin/openzeppelin-solidity/pull/522
        if (a == 0) {
            return 0;
        }

        uint256 c = a * b;
        require(c / a == b);

        return c;
    }

    /**
     * @dev Integer division of two unsigned integers truncating the quotient, reverts on division by zero.
     */
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        // Solidity only automatically asserts when dividing by 0
        require(b > 0);
        uint256 c = a / b;
        // assert(a == b * c + a % b); // There is no case in which this doesn't hold

        return c;
    }

    /**
     * @dev Subtracts two unsigned integers, reverts on overflow (i.e. if subtrahend is greater than minuend).
     */
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b <= a);
        uint256 c = a - b;

        return c;
    }

    /**
     * @dev Adds two unsigned integers, reverts on overflow.
     */
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a);

        return c;
    }

    /**
     * @dev Divides two unsigned integers and returns the remainder (unsigned integer modulo),
     * reverts when dividing by zero.
     */
    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b != 0);
        return a % b;
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
