import $ from 'jquery';

module.exports.get = (callback) => {
  $.ajax({
    url: "http://127.0.0.1:1128/repos",
    method: "GET",
    success: (data)=>{
      callback(JSON.parse(data))
    },
    error: function(){console.log('bad shit happened')},
  })
}

module.exports.find = (user, callback) => {
  console.log(user)

  $.post("http://127.0.0.1:1128/repos", JSON.stringify({username: user})).done((data)=>{
    callback(JSON.parse(data))
  })
  // $.ajax({
  //   url: "http://127.0.0.1:1128/repos",
  //   method: "POST",
  //   data: JSON.stringify({username: user}),
  //   contentType: 'application/json',
  //   success:  (data)=>{
  //     callback(JSON.parse(data))
  //   },
  // })
}