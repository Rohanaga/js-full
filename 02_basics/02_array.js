const marvel_heroes = ["thor","spiderman","Ironman"]
const dc_heroes = ["superman","batman","flash"]

//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes);
//console.log(marvel_heroes[3][1]);

//const allHeroes = marvel_heroes.concat(dc_heroes)
//console.log(allHeroes);

const all_new_heroes = [...marvel_heroes,...dc_heroes]
 console.log(all_new_heroes);//spread operator

 const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
 const real_another_array = another_array.flat(Infinity)

  console.log(real_another_array);

  console.log(Array.isArray("Rohan"));
  console.log(Array.from("Rohan"));
  console.log(Array.from({name: "Rohan"}));

  let score1 = 100
  let score2 = 300
  let score3 = 500
  console.log(Array.of(score1,score2,score3));

