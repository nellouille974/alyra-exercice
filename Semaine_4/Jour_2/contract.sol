pragma solidity ^0.5.3;
import "github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol";

contract Credibilite {
    
   using SafeMath for uint256;
   event Remise(bytes32 hashUrl);

   mapping (address => uint256) public cred;

   bytes32[] private devoirs;

   
   function produireHash(string memory url) pure public returns (bytes32) {
       return  keccak256(bytes(url));
   }
   
   function transfer(address destinataire, uint256 valeur) public  {
       require(cred[msg.sender] > valeur);
       cred[msg.sender] = cred[msg.sender].sub(valeur);
       cred[destinataire] = cred[destinataire].add(valeur);
   }
   
   function remettre(bytes32 dev) public returns (uint256 ordre) {
       devoirs.push(dev);
       emit Remise(dev);
       return ordre = devoirs.length;

   }
}