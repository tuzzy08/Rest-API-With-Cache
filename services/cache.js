const mongoose = require('mongoose');
const redis = require('redis');
const util = require('util');

const exec = mongoose.Query.prototype.exec;
const client = redis.createClient(process.env.REDIS_URL)
// Promisify the hget function to 
client.hget = util.promisify(client.hget);


mongoose.Query.prototype.cache = async function (options = '') {
  this.shouldCache = true;
  this.hashKey = options.hashKey || '';
  // return this to make the function chainable
  return this;
};
mongoose.Query.prototype.exec = async function () {
  // Check if this query should be cached, if not return original exec call
  if (!this.shouldCache) {
    return exec.apply(this, arguments);
  }
  // Create hash key
  const key = JSON.stringify(Object.assign({}));
};