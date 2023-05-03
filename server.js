const express = require('express')
const app = express()
const PORT = 8000

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

const blackpink = {
    "rose": {
        "role": "Vocalist",
        "country": "Australia", 
        "song": "On the Ground"
    },
    "lisa": {
        "role": "Dancer",
        "country": "Thailand", 
        "song": "Money"
    },
    "jennie": {
        "role": "Rapper",
        "country": "New Zealand", 
        "song": "Solo"
    },
    "jisoo": {
        "role": "Visual",
        "country": "Korea", 
        "song": "Flower"
    }
}

app.get('/api', (req,res) =>{
    res.json(blackpink)
})

app.get('/api/:member', (req,res) =>{
    const member = req.params.member.toLowerCase()
    res.json(blackpink[member])
    }
)

app.listen(PORT, (req,res) => {
    console.log(`Listenin' on port ${PORT}`)
})