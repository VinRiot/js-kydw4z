
const tasks = [

  {

    'name': 'write for Envato Tuts+',

    'duration': 120,


  },

  {

    'name': 'Work out',

    'duration': 60

  },

  {

    'name': 'Procrastinate on Duolingo',

    'duration': 240

  }

];
//const array = tasks.map(task => task.duration)
const arrayfilter = tasks.find(task => task.name.startsWith('w'))//.map(task => task.name);
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
const array3=tasks.find(x=>x.duration==60);



console.log(arrayfilter);
//console.log(array);
//console.log(array1);
//console.log(array2);
console.log(array3);