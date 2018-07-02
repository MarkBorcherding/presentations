const querystringify = function(params) {
  const provided = []
  for(var key in params) {
    if(params[key] != undefined){
      provided.push(lib.encode(key) + "=" + lib.encode(params[key]))
    }
  }
  return provided.join("&")
}
