const Queue = require('./queue')
const Helper = require('./helper')

const catQueue = new Queue();
const dogQueue = new Queue();
const peopleQueue = new Queue();
let peopleCounter = 0;

const enqueueCats = () => {
  Helper.cats.forEach(cat => {
    catQueue.enqueue(cat)
  })
}

const enqueueDogs = () => {
  Helper.dogs.forEach(dog => {
    dogQueue.enqueue(dog)
  })
}

enqueueCats()
enqueueDogs()

module.exports = {catQueue, dogQueue, peopleQueue, peopleCounter};
