import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x91ff28B745DDabbB6B008E47E0B13E7Bb31b843a'
);

export default instance;