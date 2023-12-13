const express = require('express')
const router = express.Router()

router.post('/JerseyData', (req,res)=>{
    try {
        console.log(global.items)
        res.send([global.items, global.Category])
    } catch (error) {
        console.error(error.message);
        res.send("Server Error")
    }
})


module.exports = router;