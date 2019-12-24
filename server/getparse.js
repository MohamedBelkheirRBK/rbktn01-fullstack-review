module.exports = (req, res, next) => {
  req.getParams = {};
  req.url.slice(req.url.indexOf('?')+1).split('&').forEach((element)=>{
    element = element.split('=');
    req.getParams[element[0]] = element[1]
  })
  next()
}