require('babel-polyfill');
require('isomorphic-fetch');
const Client4 = require('mattermost-redux/client/client4.js').default;
const client = new Client4;
var token;

client.setUrl('http://i-029ce04a898cc925b.spinmint.com');
client.login("test@test.com", "passwd")
.then(function(me){
    console.log(`logged in as ${me.email}`);
    return client.getToken();
})
.then(function(token){
    console.log(token);
    client.setToken(token);
    return client.getLogs(0, 10);
})
.then(function(log) {
    // console.log(log);
    console.log(log.length);
})
.catch(function(err){
    console.error(err);
});