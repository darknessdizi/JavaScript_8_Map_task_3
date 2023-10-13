import Settings from './settings';

const obj = new Settings();
obj.user.set('music', 'rock');

console.log(obj.finalSettings);
