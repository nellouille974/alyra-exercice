pragma solidity ^0.5.3;
pragma experimental ABIEncoderV2;

contract marketPlaceIllustrator {
    
    // Variable
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
        bytes32 hashOffer;
    }
    
    // Array
    bytes32[] public offersHashDictionnary ; // liste de tous les hashs
    
    // Mapping
    mapping(address => Customer) public customers;
    mapping(address => Illustrator) public illustrators;
    mapping(bytes32 => Offer) public offersMapping;
    
    // Event
    event appliedToOffer(address[] offer);
    
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
    function addOffer(string memory title, string memory description,uint256 minReputation, uint256 enumeration, uint256 timeLimit) public payable returns (Offer memory) {
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
        bytes32  offerHash = generateOfferHash(offer);
        offer.hashOffer = offerHash;
        offersMapping[offerHash] = offer;
        offersHashDictionnary.push(offerHash); 

        return offer;
    }
    
    // Return all offers
    function offers() public view returns (Offer[] memory) {
        Offer[] memory list = new Offer[](offersHashDictionnary.length);
    for (uint i = 0; i < offersHashDictionnary.length; ++i) {
        list[i] = offersMapping[offersHashDictionnary[i]];
    }
        return list;
    }
    
    // Apply offer
    function applyToOffer(bytes32  hashOffer) public {
        Offer storage offer = offersMapping[hashOffer];
        require(offer.state == stateOffer.OPEN );
        require(illustrators[msg.sender].reputation >= offer.minReputation );
        offer.listOfCandidates.push(msg.sender);
        emit appliedToOffer(offer.listOfCandidates);

    }
    
    // Hash offer address title and description 
    function generateOfferHash(Offer memory offer) private pure returns (bytes32)  {
        
        return keccak256(abi.encodePacked(offer.customer, offer.title, offer.description));
        
    }
    
    // Accept offer
    function acceptOffer(address illustrator , bytes32 hashOffer) public returns (Offer memory) {
        Offer storage offer = offersMapping[hashOffer];
        require(offer.customer == msg.sender);
        require(offer.state == stateOffer.OPEN );
        require(illustrators[illustrator].reputation >= offer.minReputation);
        offer.illustrator = illustrator;
        offer.state = stateOffer.IN_PROGRESS;
        return offer;
    }
    
    // Hash url of work
   function hashUrlWork(string memory url) pure public returns (bytes32) {
       return  keccak256(bytes(url));
   }
   
   // Delivery
   function deliveryHashWork(bytes32 hashUrl, bytes32 hashOffer) public {
        Offer storage offer = offersMapping[hashOffer];
        require(offer.illustrator == msg.sender);
        require(offer.state == stateOffer.IN_PROGRESS);
        offer.hashUrl = hashUrl;
        offer.state = stateOffer.CLOSE;
        uint commision = offer.enumeration * 2 / 100;
        msg.sender.transfer(offer.enumeration - commision);
       
   }
    
}
