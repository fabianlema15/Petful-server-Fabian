const Store = require('../utils/store')
const Utils = require('../utils/utils')

const DogService = {
  getAll(){
    return Store.dogQueue.toArray()
  },

  getFirst(){
    return Store.dogQueue.first!==null ? Store.dogQueue.first.value : {}
  },

  remove(){
    Store.dogQueue.dequeue()
    return {}
  },

  getNext(id){
    let dog = {}
    if (Store.dogQueue.first!== null){
      let found = false;
      let tmpQueue = Store.dogQueue.first
      while (!found && tmpQueue.next!== null){
        if (id === tmpQueue.value.id){
          found = true;
          if (tmpQueue.next)
            dog = tmpQueue.next.value
        }
        tmpQueue = tmpQueue.next
      }
    }
    return dog
  },

  getPrev(id){
    let dog = {}
    if (Store.dogQueue.first!== null){
      let found = false;
      let tmpQueue = Store.dogQueue.first
      while (!found && tmpQueue!== null){
        if (id === tmpQueue.value.id){
          found = true;
          if (tmpQueue.prev)
            dog = tmpQueue.prev.value
        }
        tmpQueue = tmpQueue.next
      }
    }
    return dog
  },

}

module.exports = DogService;
