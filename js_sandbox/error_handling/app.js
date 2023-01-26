const user = {email: 'jdoe@gmail.com'};

try {
    // Produce a ReferenceError
    // myFunction();

    // Produce a TypeError
    //null.myFunction();

    // Will produce SintaxError
    //eval('Hello World');

    // Will produce a URIError
    //decodeURIComponent('%');

    if(!user.name) {
      //  throw 'User has no name';
      throw new SyntaxError('User has no name');
    }

    
} catch (e) {
    console.log(`User error: ${e.message}`);
    //console.log(`${e.name} ITS NULL STUPID!!!`);
    //console.log(e);
    // console.log(e.message);
    // console.log(e.name);
    // console.log(e instanceof ReferenceError);
} finally {
    console.log('Finally runs regardless of result...')
}

console.log('Program continues...');