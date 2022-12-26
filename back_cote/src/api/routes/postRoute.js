module.exports = (server) => {
    const postController = require("../controllers/postController");
    const cors = require('cors');
 


server.get("/posts", cors(), postController.listAllPosts);
server.post("/post/createPost",cors(),postController.createAPost);

}