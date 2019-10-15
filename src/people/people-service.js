const Store = require('../utils/store')

const PeopleService = {
  getAll(){
    return Store.peopleQueue.toArray()
  },

  getFrontMe(id){
    return Store.peopleQueue.frontOf(id)
  },

  getFirst(){
    return Store.peopleQueue.first!==null ? Store.peopleQueue.first.value : {}
  },

  add(name){
    Store.peopleCounter++
    Store.peopleQueue.enqueue({id: Store.peopleCounter, name})
    return Store.peopleQueue.last!==null ? Store.peopleQueue.last.value : {}
  },

  remove(){
    Store.peopleQueue.dequeue()
    return {}
  },
}

module.exports = PeopleService;
