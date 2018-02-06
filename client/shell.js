#!/usr/bin/env node
const readline = require('readline');
const child_process = require('child_process');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question(
	'You are abouut to install multiple dependencies, proceed?',
	answer => {
		if (answer === 'yes') {
			child_process.execSync('sudo npm install -g grunt-cli', {
				stdio: [0, 1, 2, 3, 4]
			});
			child_process.execSync('sudo gem install sass --no-user-install', {
				stdio: [0, 1, 2, 3, 4]
			});
			child_process.execSync('sudo gem update --system', {
				stdio: [0, 1, 2, 3]
			});
			child_process.execSync('sudo gem install compass', {
				stdio: [0, 1, 2, 3]
			});
		}

		rl.close();
	}
);
