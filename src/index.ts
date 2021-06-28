import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

user.on('change', () => {
	console.log('Change #1');
});
user.on('change', () => {
	console.log('Change #2');
});
user.on('click', () => {
	console.log('Clicked');
});
user.on('save', () => {
	console.log('Save was triggered');
});

user.trigger('click');
user.trigger('change');
user.trigger('save');

console.log(user);
