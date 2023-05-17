const fs = require('fs');

function contactMiddleware(req, res, next){
    const {name,email,phone,message} = req.body;
    const contactData = {
        name: name,
        email: email,
        phone: phone,
        message: message
      };

    const jsonData = JSON.stringify(contactData);
    fs.writeFile('./contacts/contactData.json', jsonData, (err) => {
        if (err) {
          console.error('Error al escribir el archivo JSON', err);
        }
      });
    next();
}

module.exports = contactMiddleware