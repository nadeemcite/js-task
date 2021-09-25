 module.exports = {
  sum(a,b) {
    try{
    if(typeof a==='number' && typeof b ==='number')
    {
      return (a+b);
    }
    else
    {
      throw new Error("The arguments are not a digit");
    }
  }
    catch(e)
    {
      return (e);

    }
    
  },
   ci(priciple, rate_per_annum=6.5, time_in_months=10){
    let ci_object={}
    let amount=priciple*Math.pow((1+(rate_per_annum/100)),(time_in_months/12))
    let interest=amount-priciple
    ci_object.interest=interest
    ci_object.amount=amount
    console.log(ci_object)
    

  }

  
  
};
