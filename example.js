
/**
 * Module dependencies.
 */

var axon = require('axon');
require('./');

var pub = axon.socket('pub');
var sub = axon.socket('sub');

pub.format('msgpack');
sub.format('msgpack');

sub.bind(5000);
pub.connect(5000);

sub.on('message', function(msg){
  console.log(msg);
});

setInterval(function(){
  pub.send({
    string: 'Hello',
    buffer: new Buffer('World')
  });
}, 1000);

