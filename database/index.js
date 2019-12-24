const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  name: String,
  url: String,
  desc: String,
  watchers: Number,
  stars: Number,
  issues: Number,
  owner: {
    name: String,
    url: String,
    img: String
  }
});

let Repo = mongoose.model('Repo', repoSchema);

let parseRepo = function(element) {
  return {
    name: element.name,
    url: element.html_url,
    desc: element.description,
    watchers: element.watchers_count,
    stars: element.stargazers_count,
    issues: element.open_issues,
    owner: {
      name: element.owner.login.toLowerCase(),
      url: element.owner.html_url,
      img: element.owner.avatar_url
    }
  }
}

let save = (data) => {
  data.forEach(element => {

    Repo(element).save((err)=>{
      if (err) console.error(err)
    })

  })

}



// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('connected!')
// });

module.exports.save = save;
module.exports.repo = Repo;
module.exports.parse = parseRepo;