const fs = require('fs');
const path = require('path');

const usersFile = fs.readFileSync(path.join(__dirname, '../models/users.json'), 'utf-8');
const listUsers = JSON.parse(usersFile);