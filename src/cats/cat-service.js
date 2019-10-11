const Store = require('../utils/store')
const Utils = require('../utils/utils')

const CatService = {
  getAll(){
    return Utils.queueToArray(Store.catQueue)
  },

  getFirst(){
    return Store.catQueue.first!==null ? Store.catQueue.first.value : {}
  },

  remove(){
    Store.catQueue.dequeue()
    return {}
  },

  getNext(id){
    let cat = {}
    if (Store.catQueue.first!== null){
      let found = false;
      let tmpQueue = Store.catQueue.first
      while (!found && tmpQueue.next!== null){
        if (id === tmpQueue.value.id){
          found = true;
          if (tmpQueue.next)
            cat = tmpQueue.next.value
        }
        tmpQueue = tmpQueue.next
      }
    }
    return cat
  },

  getPrev(id){
    let cat = {}
    if (Store.catQueue.first!== null){
      let found = false;
      let tmpQueue = Store.catQueue.first
      while (!found && tmpQueue!== null){
        if (id === tmpQueue.value.id){
          found = true;
          if (tmpQueue.prev)
            cat = tmpQueue.prev.value
        }
        tmpQueue = tmpQueue.next
      }
    }
    return cat
  },

}

module.exports = CatService;
