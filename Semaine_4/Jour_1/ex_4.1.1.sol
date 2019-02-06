pragma solidity ^0.5.3;
import "github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol";

contract Credibilite {
    
   using SafeMath for uint256;

   mapping (address => uint256) public cred;

   bytes32[] private devoirs;

   
   function produireHash(string memory url) pure public returns (bytes32) {
       return  keccak256(bytes(url));
   }
   
   function transfer(address destinataire, uint256 valeur) public  {
       require(cred[msg.sender] > valeur);
       require(cred[destinataire] + valeur < cred[destinataire]);
       cred[msg.sender] = cred[msg.sender].sub(valeur);
       cred[destinataire] = cred[destinataire].add(valeur);
   }
   
   function remettre(bytes32 dev) public returns (uint256 ordre) {
       devoirs.push(dev);
       return ordre = devoirs.length + 1;
   }
}