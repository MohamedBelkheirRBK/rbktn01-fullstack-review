module.exports.getParams = (req, res, next) => {
  req.getParams = {};
  req.url.slice(req.url.indexOf('?')+1).split('&').forEach((element)=>{
    element = element.split('=');
    req.getParams[element[0]] = element[1]
  })
  next()
}

module.exports.postParams = (req, res, next)=>{
  console.log(req.method)
    if(req.method === "POST"){
      var data = "";

      req.on("data", (chunk)=>{
        data +=chunk;
      })

      req.on("end", ()=>{
        req.body = JSON.parse(data)
        next();
      })
    }
    else
      next()




}