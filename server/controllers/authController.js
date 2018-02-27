
module.exports = {
    login: (req, res) => {
        console.log("hkjkhj")
        const db = req.app.get('db');
        const { username, password } = req.body;
        db.get_user([username, password]).then(user => {
            if (user[0]) {
                req.session.user = { id: user[0].userid, username: user[0].username }
                res.status(200).send(req.session.user);
            } else {
                res.status(500).send('User not found');
            }
        })
    },
    register: (req, res) => {
        const db = req.app.get('db');
        const { username, password } = req.body;
        console.log(username, password);
            db.add_user([username, password]).then((user) => {
                req.session.user = { id: user[0].userid, username: user[0].username }
                res.status(200).send(req.session.user);
            })  
    },
    logout: (req, res) => {
        req.session.destroy();
        res.status(200).send('Logged Out');
    }
}
