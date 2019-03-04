pragma solidity ^0.5.3;

contract SimpeContract {
	
	string public name;
	event NameChanged(string name);
	address private owner;

	modifier isOwner() {
		require(msg.sender == owner);
		_;
	}
	
	constructor(string memory _name) public  {
		name = _name;
	}

	function setName(string memory _name) public {
		name = _name;
		emit NameChanged(_name);
	}
}