
module.exports = {
    addProperty: (req, res) => {
        const db = req.app.get('db');
        const { name, description, address, city, stateA, zip, image, loan, mortgage, desiredRent, userid } = req.body;
        db.add_property([name, description, address, city, stateA, zip, image, loan, mortgage, desiredRent, userid]).then(res => {
                res.status(200).send(res);
        }).catch(err => console.log(err))
    },
    getProperties: (req, res) => {
        const db = req.app.get('db');
        const userid = req.session.user.id
        
        db.get_properties([userid]).then((properties) => {
            console.log(properties)
            res.status(200).send([...properties]);
        })
    },
    delete: (req, res) => {
        const db = req.app.get('db');
        const propertyid  = parseInt(req.params.id);
        console.log(typeof req.params.id)
        db.delete_property([propertyid]).then((properties) => {

            res.status(200).send(properties);
        }).catch(err => console.log(err))
        
    }
}