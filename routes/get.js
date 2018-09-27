module.exports = (req, res) => {  
    res.send({ 
        service: global.service()
    })
}