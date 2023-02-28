const {models} = require('../../sequelize');
const router = require('express').Router();

router.get("/game",async (req,res)=>{
    try{
        const games = await models.game.findAll();
        res.send(games)
    }catch(err){
        console.log(err)
        res.send({
            status:500,
        });
    }
});

router.get('/game/:id',async (req,res)=>{
        try{
            const game = await models.game.findById(req.params.id);
            res.send(game)
        } catch(err){
            console.log(err)
            res.send({
                status:500,
            });
        }
});

router.post('/game',async (req,res)=>{
    try{
        const game = await models.game.create(req.body);
        game.save();
        res.send({
            status:200,
        });
    } catch(err){
        console.log(err);
        res.send({
            status:500,
        });
    }
})

router.put('/game/:id',async (req,res)=>{
    try{
        const game = await models.game.findById(req.params.id);
        game.score_Team_1 = req.body.score_Team_1;
        game.score_Team_2 = req.body.score_Team_2;
        game.team1_id = req.body.team1_id;
        game.team2_id = req.body.team2_id;
        game.field_id = req.body.field_id;
        game.starts_at = req.body.starts_at;
        await game.save();
        res.send({
            status:200,
        });
    } catch(err){
        console.log(err);
        res.send({
            status:500,
        });
    }
    }
)

router.delete('/game/:id',async (req,res)=>{
    try{
        const game = await models.game.findById(req.params.id);
        await game.destroy();
        res.send({
            status:200,
        });
    } catch(err){
        console.log(err);
        res.send({
            status:500,
        });
    }
}
)

module.exports = router;


