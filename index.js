
const tasks = [

  {

    'name': 'write',

    'duration': 120,


  },

  {

    'name': 'Workout',

    'duration': 60

  },

  {

    'name': 'Procrastinate',

    'duration': 240

  }

];
//const array = tasks.map(task => task.duration)
//const arrayfilter = tasks.find(task => task.name.startsWith('w'))//.map(task => task.name);
//
//const array1 = tasks.map(task => {
//  task.duration /= 60
//  return task;
//});
//
//const array2 = tasks
//  .map((task, index,array) => ({ name: task.name, duration: task.duration, //importancia: task.duration * (index + 1)/array.length }))
//  //.sort(x => x.importancia)
//  .sort(x => x.name).reverse()
//
//const array3=tasks.find(x=>x.duration==60);

//var array4=tasks.map(task => task.duration).reduce((previus,current)=>previus+current,0)
//var array4=tasks.reduce((previus,current)=>previus+current.duration,0);
//const array5 = tasks.reduce((previus, current) => previus.length < //current.name.length ?
//   current.name :  previus, "");



//const array6= tasks.reduce((previus,current)=>{previus+(current.name),0})

//const array6 = tasks.reduce(function (previus, current) {
//  if (previus.legnth < current.name.length) {
//previus=current.name;
//  }
//  else{
//previus=previus;
//  }
//  return previus;
//},"")

const [template] = document.getElementsByClassName('app');




template.innerHTML = `<h1>${tasks.map(x=>`<li>${x.name}-${x.duration}</li>`).join("")}</h1>`
//template.innerHTML = `<h1>${tasks.map(({name,duration})=>`<li>${name}-${duration}</li>`).join("")}</h1>`




//console.log(arrayfilter);
//console.log(array);
//console.log(array1);
//console.log(array2);
//console.log(array3);
//console.log(array6);
