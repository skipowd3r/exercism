import { jsxAttribute } from "@babel/types";

export const isPangram = string => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let newString = string.toLowerCase().replace(/[^A-Za-z]+/g,"").trim().split('')
   //impossible case
  if(newString.length < 26){
    return false;
  //doesn't include all alphabet letters
  }else {
    for(let i=0; i<alphabet.length; i++){
      if(!newString.includes(alphabet[i])){
        return false;
      }
    }
    return true;
  }
};