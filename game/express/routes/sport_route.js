const {models} = require('../../sequelize');
const router = require('express').Router();

router.get('/sport', async (req, res) => {
    try {
        const sports = await models.sport.findAll();
        res.send(sports);
    }
    catch (err) {
        console.log(err);
    }
});

router.post('/sport', async (req, res) => {
    try{
        const sport = await models.sport.create(req.body);
        sport.save();
        res.send({
            status:200,
        });
    } catch(err){
        console.log(err);
    }
}
);

router.get('/sport/:id', async (req, res) => {
    try{
        const sport = await models.sport.findByPk(req.params.id);
        res.send(sport);
    } catch(err){
        console.log(err);
    }
}
);

router.put('/sport/:id', async (req, res) => {
    try{
        const sport = await models.sport.findByPk(req.params.id);
        sport.name = req.body.name;
        await sport.save();
        res.send({
            status:200,
        });
    } catch(err){
        console.log(err);
    }
}
);

router.delete('/sport/:id', async (req, res) => {
    try{
        const sport = await models.sport.findByPk(req.params.id);
        await sport.destroy();
        res.send({
            status:200,
        });
    } catch(err){
        console.log(err);
    }
}
);

module.exports = router;


