function genration(x,y){
   const gen={
    "-3": ["great grandfather", "great grandmother"],
       "-2": ["grandfather","grandmother"],
       "-1":["father", "mother"],
       "0": ["me!", "me!"],
       "1":["son", "daughter"],
       "2" :["grandson","granddaughter"],
       "3" :["great grandson","great granddaughter"]
   }
   return y=="m"? gen[x][0]:gen[x][1];
}
const generat=genration(2,"f");
console.log(generat);