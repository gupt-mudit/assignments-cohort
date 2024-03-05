/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(t) {
  let m={};
  for( let i in t ){
 if(m[t[i].category]===undefined){
  m[t[i].category]=t[i].price;
 }
 else{
  m[t[i].category]=m[t[i].category]+t[i].price;
 }
  }
  let res=[];
  let i=0;
  for(keys in m){
     res[i]={category: keys, totalSpent: m[keys]};
     i++;
  }
  return res;
}

module.exports = calculateTotalSpentByCategory;
