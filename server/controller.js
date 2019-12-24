var { repo, save, parse } = require('../database/index');
var { getReposByUsername } = require('../helpers/github.js');




module.exports.getHandler = (req, res) => {

  repo.find().sort({watchers: -1}).limit(25).exec((err, data)=>{
    res.end(JSON.stringify(data))
  })
}


module.exports.postHandler = (req, res) => {

  query = {'owner.name': req.body.username.toLowerCase()}
  repo.find(query, (err, data) => {

    if(err) console.error(err);


    if(data.length) {
      console.log('got from DB')
      res.end(JSON.stringify(data))
      }

     else
      getReposByUsername(req.getParams.username, (err, response, body)=>{

        if(err) {
          console.log(err)
          res.status(500)
          res.end()
        }

        else {
          console.log("got from github")
          var parsedData = JSON.parse(body).items.map(parse)
          save(parsedData)
          res.end(JSON.stringify(parsedData))

        }

    })


  })
}