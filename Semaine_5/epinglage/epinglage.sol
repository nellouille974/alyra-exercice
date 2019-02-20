pragma solidity ^0.5.3;
pragma experimental ABIEncoderV2;
import "github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol";

contract epinglage {
    
    using SafeMath for uint256;
    
    uint256[] listIdDoc;
    mapping (uint256 => address) addressUtilisateur;
    event Epingler(uint id);
    
    function payerStockage(uint idDoc) public payable {
        require(msg.value  >= 100 finney,"Minimum de 0.1 ether requis");
        listIdDoc.push(idDoc);
        addressUtilisateur[idDoc] = msg.sender;
        emit Epingler(idDoc);
    }

}
