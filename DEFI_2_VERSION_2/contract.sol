pragma solidity ^0.5.3;
pragma experimental ABIEncoderV2;
import "github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol";

contract marketPlaceIllustrator {
    
    using SafeMath for uint256;
    
    //variable
    enum stateOffer { OPEN , IN_PROGRESS , CLOSE }
    
    // Customer
    struct Customer {
        string name;
        uint256 reputation;
    }
    
    // Illustrator
    struct Illustrator {
        string name;
        uint256 reputation;
    }
    
    // Offer
    struct Offer {
        address customer;
        address illustrator;
        string title;
        string description;
        uint256 minReputation;
        stateOffer state;
        address[] listOfCandidates;
        uint256 enumeration;
        uint256 timeLimit;
        bytes32 hashUrl;
    }
    
    // Array
    Offer[] public offers ; // liste de toutes les offres

    // Mapping
    mapping(address => Customer) public customers;
    mapping(address => Illustrator) public illustrators;
    
    // Registration
    function customerRegistration(string memory name) public {
        Customer storage customer = customers[msg.sender];
        customer.name = name;
        customer.reputation = 1;
    }
    function illustratorRegistration(string memory name) public {
        Illustrator storage illustrator = illustrators[msg.sender];
        illustrator.name = name;
        illustrator.reputation = 1;
    }
    
    // Add offer
    function addOffer(string memory title, string memory description,uint256 minReputation, uint256 enumeration, uint256 timeLimit) public payable {
        require(customers[msg.sender].reputation == 1);
        Offer memory offer;
        uint commision = enumeration + (enumeration * 2 / 100);
        offer.customer = msg.sender;
        offer.illustrator = address(0);
        offer.title = title;
        offer.description = description;
        offer.minReputation = minReputation;
        offer.state = stateOffer.OPEN;
        offer.enumeration = msg.value + commision;
        offer.timeLimit = timeLimit;
        offer.hashUrl = 0;
        offers.push(offer); 
    }
    
    // Apply offer
    function applyToOffer(uint index) public {
        require(offers[index].state == stateOffer.OPEN );
        require(illustrators[msg.sender].reputation >= offers[index].minReputation );
        offers[index].listOfCandidates.push(msg.sender);
    }
    
    // Accept offer
    function acceptOffer(address illustrator ,uint index) public  {
        require(offers[index].customer == msg.sender);
        require(offers[index].state == stateOffer.OPEN );
        require(illustrators[illustrator].reputation >= offers[index].minReputation);
        offers[index].illustrator = illustrator;
        offers[index].state = stateOffer.IN_PROGRESS;
    }
    
    // Hash url of work
   function hashUrlWork(string memory url) pure public returns (bytes32) {
       return  keccak256(bytes(url));
   }
   
   // Delivery
   function deliveryHashWork(string memory url, uint index) public {
        require(offers[index].illustrator == msg.sender);
        require(offers[index].state == stateOffer.IN_PROGRESS);
        offers[index].hashUrl = hashUrlWork(url);
        offers[index].state = stateOffer.CLOSE;
        uint commision = offers[index].enumeration * 2 / 100;
        address(msg.sender).transfer(offers[index].enumeration - commision);
       
   }
   
   // List offers
     function list() public view returns (Offer[] memory) {
       return offers;
   }

}
