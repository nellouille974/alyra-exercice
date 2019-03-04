const chai = require('chai');
const { createMockProvider, getWallets, deployContract } = require('ethereum-waffle');
// CONTRACTS
const SimpleContractMock = require('../build/SimpeContract.json');

const { expect } = chai; // récupere que la methode expect de tout l objet chai
chai.use(solidity);

describe('Test SimpleContract', () => {

	const provider = createMockProvider();
	const [ wallet, anotherWallet ] = getWallets(provider);
	let contract;

	beforeEach(async () => {
		contract = await deployContract(wallet, SimpleContractMock, ['Simple Name']);

	});

	it('Should give a name', async () => {
		const name = await contract.name();
		expect(name).to.eq('Simple Name');

	});

	it('Should change the name', async () => {
    	await contract.setName("New Name");
    	const name = await contract.name();
    	expect(name).to.eq("New Name");

	});

	it('Should a event', async () => {
	    await expect(contract.setName("New Name"))
	      .to.emit(name, 'NameChanged')
	      .withArgs(name);
		});
});
