const User = function(name) {
    this.name = name;
    this.chatRoom = null;
}

User.prototype = {
    send: function(message, to) {
        this.chatRoom.send(message, this,to);
    },
    recieve: function(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}

const Chatroom = function() {
    let users = {}; // List of users

    return {
        register: function(user) {
            users[user.name] = user;
            user.chatRoom = this;
        },
        send: function(message, from, to) {
            if (to) {
                // Single user message
                to.recieve(message, from);
            } else {
                // Mass message
                for(key in users) {
                    if (users[key] !== from) {
                        users[key].recieve(message, from);
                    }
                }
            }
        }
    }
}

const alan = new User('Alan');
const alejandra = new User('Alejandra');
const hayley = new User('Hayley');

const chatroom = new Chatroom();

chatroom.register(alan);
chatroom.register(alejandra);
chatroom.register(hayley);

alan.send('On tas', hayley);
hayley.send('I love you', alan);
alejandra.send('odiame mas');