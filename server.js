const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);



const sole = () => {
  console.log('this prints to the console')
}

sole()




// Runkit.com API?
// exports.endpoint = function(request, response) {
//   response.end("Hello World from Runkit!\n")
// }

// Then to check if it works...
// TERMINAL
// $ curl -L https://runkit.io/test/hello-world/branches/master
// $ => Hello World from Runkit!

// OR --
// SUPPOSED code to make below work, located at...
// runkit.com/runkit/hello-world-api
// $ curl -L https://runkit.io/runkit/hello-world-api/1.0.0
// $ => Hello World!

// EMBED runkit code on another page...
// <!-- Insert this line in your HTML. -->
        // <script src="https://embed.runkit.com"
        //          data-element-id="my-element"></script>

// <!-- anywhere else on your page -->
        // <div id="my-element">
        //     console.log("hello world");
        // </div>
