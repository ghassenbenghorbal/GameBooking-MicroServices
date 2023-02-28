const {models} = require("../../sequelize");
const router = require("express").Router();


router.get("/team", async (req, res) => {
    try {
        const teams = await models.team.findAll();
        res.send(teams);
    }
    catch (err) {
        console.log(err);
        res.send({
            status:500,
            erreur:err
        })
    }
}
);

router.post("/team", async (req, res) => {
    try{
        const team = await models.team.create(req.body);
        team.save();
        res.send({
            status:200,
        });
    } catch(err){
        console.log(err);
        res.send({
            status:500,
            erreur:err
        })
    }
}
);

router.get("/team/:id", async (req, res) => {
    try{
        const team = await models.team.findByPk(req.params.id);
        res.send(team);
    } catch(err){
        console.log(err);
        res.send({status:500})
    }
}
);

router.put("/team/:id", async (req, res) => {
    try{
        const team = await models.team.findByPk(req.params.id);
        team.name = req.body.name;
        team.country = req.body.country;
        team.region = req.body.region;
        team.flag = req.body.flag;
        await team.save();
        res.send({
            status:200,
        });
    } catch(err){
        console.log(err);
        res.send({status:500})
    }
}
);

router.delete("/team/:id", async (req, res) => {
    try{
        const team = await models.team.findByPk(req.params.id);
        await team.destroy();
        res.send({
            status:200,
        });
    } catch(err){
        console.log(err);
        res.send({status:500})
    }
}
);

module.exports = router;