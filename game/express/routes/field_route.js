const {models} = require('../../sequelize');
const router = require('express').Router();

router.get('/field', async (req, res) => {
    try {
        const fields = await models.field.findAll();
        res.send(fields);
    }
    catch (err) {
        console.log(err);
    }
});

router.post('/field', async (req, res) => {
    try{
        const field = await models.field.create(req.body);
        field.save();
        res.send({
            status:200,
        });
    } catch(err){
        console.log(err);
    }
}
);

router.get('/field/:id', async (req, res) => {
    try{
        const field = await models.field.findByPk(req.params.id);
        res.send(field);
    } catch(err){
        console.log(err);
    }
}
);

router.put('/field/:id', async (req, res) => {
    try{
        const field = await models.field.findByPk(req.params.id);
        field.name = req.body.name;
        field.city = req.body.city;
        field.country = req.body.country;
        field.address = req.body.address;
        field.size = req.body.size;
        await field.save();
        res.send({
            status:200,
        });
    } catch(err){
        console.log(err);
    }
}
);

router.delete('/field/:id', async (req, res) => {
    try{
        const field = await models.field.findByPk(req.params.id);
        await field.destroy();
        res.send({
            status:200,
        });
    } catch(err){
        console.log(err);
    }
}
);

module.exports = router;
