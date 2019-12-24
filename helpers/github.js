const request = require('request');
const config = require('../config.js');

let getReposByUsername = (user, cb) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: 'https://api.github.com/search/repositories?q=user:'+user,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  console.log(options.url)
  request.get(options, cb);

}

module.exports.getReposByUsername = getReposByUsername;

