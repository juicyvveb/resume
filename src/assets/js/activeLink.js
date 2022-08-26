const scroll = function(){
  let containers = Array.from(document.querySelectorAll('.container'));
  let arr = containers.filter(el => el.getBoundingClientRect().y < el.clientHeight / 2);
  return resolve(arr)
}

function resolve(arr){
  arr.shift();
  return arr.pop().id
}

export {scroll}