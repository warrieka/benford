let sorted = obj => Object.keys(obj)
  .sort()
  .reduce((accumulator, key) => {
    accumulator[key] = obj[key];

    return accumulator;
  }, {});

let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let benfort = d => Math.log10(1 + (1/d));

let benfort_probs = digits.map(i => ({digit: i, prob: benfort(i) }) )

let benford_rand = m => Math.pow(m , Math.random() )

let firstDigit = num => {
  if(num === 0 | typeof num !== 'number') return NaN
  let val = Math.abs(num);
  let digits = Math.floor( Math.log10(val) );
  return Math.floor( val / 10**digits )
}

let frequencyDistribution = arr => {
  let list = {};
  for(let i = 0; i < arr.length; i++){
     list[arr[i]] = (list[arr[i]] || 0) + 1 ;
  };
  let distr = Object.keys( sorted(list) ).map(e =>( 
    {digit: e, size: list[e], prob: list[e] / arr.length} ) 
    )
  return distr;
};

let benford_from_array = arr => {
    let noNull = arr.filter(d => !isNaN(d) | d == 0 );
    let digits = noNull.map(firstDigit);
    return frequencyDistribution(digits);
}

let benford_rand_series = (arr_size,max_value) => {
  let randArr = [...Array(arr_size).keys()].map(_ => benford_rand(max_value) );
  return benford_from_array(randArr);
}

export {benfort, benfort_probs, benford_rand, benford_from_array, benford_rand_series};
