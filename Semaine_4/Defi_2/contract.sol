pragma solidity ^0.5.3;
pragma experimental ABIEncoderV2;
import "github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol";

contract Illustrator {
    
   using SafeMath for uint256;
   //event NewOffer(uint256 id,uint256 enumeration, uint256 timeLimit,string state, string description, uint256 minReputation);
   
   struct Offer {
       address user;
       string nameOfUser;
       uint256 enumeration;
       uint256 timeLimit;
       string state;
       string description;
       uint256 minReputation;
       address[] listOfCandidates; // comment eviter l erreur ?
   }
   
   //array of request
   Offer[] public offers;
   //associate each user with a value for reputation
   mapping (address => uint256) public reputation;
   //associate name with address
   mapping (address => string) public nameOfUser;
   
   function registration(address user, string memory name) public {
        nameOfUser[user] = name;
        reputation[user] += 1;
   }
   
   function addOffer(address user, string memory nameOfUser, uint256 enumeration, uint256 timeLimit,string memory state, string memory description, uint256 minReputation) public {
       require(reputation[user] >= 1);
       uint commision = enumeration * 2 / 100;
       uint montant = enumeration + commision;
       offers.push(Offer(user, nameOfUser, montant, timeLimit, state = "OPEN" ,description, minReputation, address[]));
       //emit NewOffer(id,enumeration, timeLimit, state, description, minReputation);
   }
   
   function getOffers() view public returns  (Offer[] memory) {
       return offers;
   }
   
   function applyOffer(address independant) public {
       
   }
   

}