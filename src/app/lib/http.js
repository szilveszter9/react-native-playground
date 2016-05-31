'use strict';

export function get(url, cb) {
  let req = new XMLHttpRequest();
  req.onload = () =>
    req.status !== 200 ?
      cb(new Error('error on get, response status:', req.status)) :
      cb(null, req.response);
  req.open('GET', url);
  req.send();
}

export function getJSON(url, cb) {
  get(url, (err, response) => {
    if(err)
      cb(err);
    else {
      let obj;
      try{
        obj = JSON.parse(response);
      } catch(e){
        err = new Error('error on parse');
      }
      cb(err, obj);
    }
  });
}
