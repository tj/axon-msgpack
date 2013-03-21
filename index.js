
/**
 * Module dependencies.
 */

var axon = require('axon');
var msgpack = require('msgpack-js');

axon.codec.define('msgpack', {
  encode: msgpack.encode,
  decode: msgpack.decode
});
