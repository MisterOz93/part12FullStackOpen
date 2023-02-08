const express = require('express');
const router = express.Router();
const redis = require('../redis');

router.get('/', async (req, res) => {
    let addedTodos = await redis.getAsync('added_todos')
    if (!addedTodos){
        await redis.setAsync('added_todos', 0)
        addedTodos = await redis.getAsync('added_todos')
    }

    res.json({addedTodos})
})

module.exports = router;