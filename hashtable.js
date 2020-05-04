class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const hash = this._hash(key);
    if (!this.data[hash]) {
      this.data[hash] = [];
    }
    this.data[hash].push([key, value]);
    return this.data;
  }

  get(key) {
    const hash = this._hash(key);
    const currentObj = this.data[hash];
    const foundElem = currentObj.filter((v) => v[0] === key)[0];
    return foundElem[1];
  }

  keys() {
    const keyArr = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] && this.data[i].length) {
        if (this.data[i].length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            keyArr.push(this.data[i][j][0]);
          }
        } else {
          keyArr.push(this.data[i][0][0]);
        }
      }
    }
    return keyArr;
  }

  values() {
    const valuesArr = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] && this.data[i].length) {
        if (this.data[i].length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            valuesArr.push(this.data[i][j][1]);
          }
        } else {
          valuesArr.push(this.data[i][0][1]);
        }
      }
    }
    return valuesArr;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("oranges", 500);
myHashTable.set("apples", 9);
console.log(myHashTable.keys());
console.log(myHashTable.values());