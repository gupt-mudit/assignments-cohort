/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length != str2.length){
    return false;
  }
let m1= {};
str1=str1.toLowerCase();
str2=str2.toLowerCase();
for(let i=0;i<str1.length;i++){
  if(m1[str1[i]]=== undefined){
    m1[str1[i]]=1;
  }
  else{
    m1[str1[i]]++;
  }
}
let m2= {};
for(let i=0;i<str2.length;i++){
  if(m2[str2[i]]=== undefined){
    m2[str2[i]]=1;
  }
  else{
    m2[str2[i]]++;
  }
}
for(let key in m1){
  if(m1[key]!=m2[key]){
    return false;
  }
}
return true;
}

module.exports = isAnagram;
