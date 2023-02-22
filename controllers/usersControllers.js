const fs = require('fs');
const path = require('path');
const usersPath = path.join(__dirname, '../models/users.json')
const usersFile = fs.readFileSync(usersPath, 'utf-8');
const usersList = JSON.parse(usersFile);

const controller = {
    register: (req, res) => {
        res.render('./users/register');
    },
    create: (req, res) => {
        const image = req.file;
        const newUser = {
            id: usersList.length + 1,
            ...req.body,
            avatar: image != undefined ? image.filename : "default.png"
        }
        usersList.push(newUser);
        console.log(newUser);
        const newUserJson = JSON.stringify(usersList);
        fs.writeFileSync(usersPath, newUserJson);     
        res.redirect('/login');
    }
}


module.exports = controller