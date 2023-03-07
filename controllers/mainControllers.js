const controller = {
    index: (req, res) => {
        res.render('index');
    },
    login: (req, res) => {
        res.render('./users/login');
    },
    contact: (req, res) => {
        res.render('./users/contact');
    },
    productCart: (req, res) => {
        res.render('./products/productCart');
    },
};

module.exports = controller;