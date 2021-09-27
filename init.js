module.exports = {
  sum(a, b) {
    if(!((a>=0 && a<=9)) || !((b>=0 && b<=9))){
                 throw new Error('Invalid arguments');
               }
                 return parseInt(a) + parseInt(b);
          }
     var res = sum('r',5);
     console.log(res);
  
};
