'use strict'

class User {

  constructor (name) {
    this.name = name;
  }

  get userName () {
    return this.name;
  }

  set userName (name) {
   this.name = name;
  }
}