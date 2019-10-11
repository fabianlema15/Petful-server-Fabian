const Utils = {
  queueToArray(Queue){
    const arr = []
    if (Queue.first!== null){
      let tmpQueue = Queue.first;
      while (tmpQueue.next!== null){
        arr.push(tmpQueue.value)
        tmpQueue = tmpQueue.next
      }
      arr.push(tmpQueue.value)
    }
    return arr
  }
}


module.exports = Utils
