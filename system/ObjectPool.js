class ObjectPool{
  constructor() {
    this.hash = {};
    this.uid = 1;
  }

  get(ClassName, ...args) {
    if(!ClassName.__poolId){
      ClassName.__poolId = this.uid++;
    };

    var classPool = this.hash[ClassName.__poolId];

    // the hash doesn't have a pool for this class
    if(!classPool)
    {
      this.hash[ClassName.__poolId] = [];
      return new ClassName(...args);
    } // there is a pool in the hash, with some objects in it, use it as expected
    else if(classPool.length > 0)
    {
      var object = classPool.pop();
      object.__pooled = false;
      return object;
    } // there is a pool in the hash but it's empty (length <= 0)
    else{
      return new ClassName(...args);
    }
  }

  put(object) {
    if(object.__pooled) return;

    if(!object.constructor.__poolId){
      console.error("The object wasn't created by the object pool", object);
    }

    var classPool = this.hash[object.constructor.__poolId];
    if(!classPool)
    {
      this.hash[object.constructor.__poolId] = [];
    }

    this.hash[object.constructor.__poolId].push(object);
    object.__pooled = true;
  }
}

const op = new ObjectPool();
export default op;
