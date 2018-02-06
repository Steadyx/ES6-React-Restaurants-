#!/usr/bin/env node

const readline = require("readline");
const { execSync, spawn, spawnSync } = require("child_process");
const fs = require("fs");
const os = require("os");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	prompt: "OHAI> "
});

const resetTerm = () => {
	return process.stdout.write("\033c");
};

const gruntGemInstalls = () => {
	spawnSync("sudo npm install -g grunt-cli", {
		detached: true,
		stdio: "inherit",
		shell: true
	});
	spawnSync("sudo gem install sass --no-user-install", {
		detached: true,
		stdio: "inherit",
		shell: true
	});
	spawnSync("sudo gem update --system", {
		detached: true,
		stdio: "inherit",
		shell: true
	});
	spawnSync("sudo gem install compass", {
		detached: true,
		stdio: "inherit",
		shell: true
	});
};

const sshInstall = (err, stdin, stderr) => {
	if (err) throw err;

	console.log(`Starting directory: ${process.cwd()}`);
	try {
		process.chdir("../.ssh");
		console.log(`New directory: ${process.cwd()}`);
	} catch (err) {
		console.error(`chdir: ${err}`);
	}
	if (process.cwd() === "/home/ec2-user/.ssh") {
		spawnSync("ssh-keygen", {
			detached: true,
			stdio: "inherit",
			shell: true
		});
	}
};

const composerInstall = (err, stdin, stderr) => {
	if (err) throw err;

	console.log(`Starting directory: ${process.cwd()}`);
	try {
		process.chdir("/tmp");
		console.log(`${os.EOL}New directory: ${process.cwd()}`);
	} catch (err) {
		console.error(`chdir: ${err}`);
	}
	if (process.cwd() === "/tmp") {
		spawnSync("curl -sS https://getcomposer.org/installer | php", {
			detached: true,
			stdio: "inherit",
			shell: true
		});
		spawnSync("sudo mv composer.phar /usr/local/bin/composer", {
			detached: true,
			stdio: "inherit",
			shell: true
		});
	}
	try {
		process.chdir("../home/ec2-user/environment");
		console.log(`${os.EOL}New directory: ${process.cwd()}`);
	} catch (err) {
		console.error(`chdir: ${err}`);
	}
};

const apacheUninstall = () => {
	spawnSync("sudo service httpd stop", {
		detached: true,
		stdio: "inherit",
		shell: true
	});
	spawn("sudo yum remove httpd* php*", {
		detached: true,
		stdio: "inherit",
		shell: true
	});
};

const php7Install = (err) => {
	execSync("sudo yum install httpd24", {
		detached: true,
		stdio: "inherit",
		shell: true
	});
	execSync("sudo yum install php70", {
		detached: true,
		stdio: "inherit",
		shell: true
	});
	execSync(
		"sudo yum install php70-zip php70-gd php70-imap php70-mbstring php70-mysqlnd php70-opcache php70-pdo php70-pecl-apcu",
		{
			detached: true,
			stdio: "inherit",
			shell: true
		}
	);
	execSync("sudo service httpd restart", {
		detached: true,
		stdio: "inherit",
		shell: true
	});
};

const question2 = () => {
	rl.question(
		`${
			os.EOL
		}\x1b[33m\x1b[1m Create SSH Key ? : \n\n y = yes-- - any other key = no: `,
		(answer) => {
			if (answer === "y") {
				sshInstall();
			} else {
				console.log("come back later!");
			}
			rl.resume();
			resetTerm();
		}
	);
};

const question3 = () => {
	rl.question(
		`${
			os.EOL
		}\x1b[33m\x1b[1m Install Composer? : \n\n y = yes-- - any other key = no: `,
		(answer) => {
			if (answer === "y") {
				composerInstall();
			} else {
				console.log("come back later!");
			}
			rl.close();
			// resetTerm()
		}
	);
};

const question4 = () => {
	rl.question(
		`${
			os.EOL
		}\x1b[33m\x1b[1m Install php7? : \n\n y = yes-- - any other key = no: `,
		(answer) => {
			if (answer === "y") {
				php7Install();
			} else {
				console.log("come back later!");
			}
			rl.close();
			// resetTerm()
		}
	);
};

const questions = () => {
	rl.question(
		"\x1b[33m\x1b[1m You are abouut to install multiple dependencies, proceed ? \n\n y = yes-- - any other key = no: \x1b[37m",
		(answer) => {
			if (answer === "y") {
				// gruntGemInstalls()
			} else {
				console.log("come back later!");
			}
			console.log(`${os.EOL}\x1b[32m All Files installed Succesfully!`);
			question4();
		}
	);
};
questions();

// fs.unlink(filename, (err) => {
//     if(err) throw  err;
//     console.log(`
//File: $ { filename } successfully deleted `);
//         const filename = __filename;
// })
