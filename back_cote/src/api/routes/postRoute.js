

module.exports = (server) => {
    const postController = require("../controllers/postController");
    const cors = require('cors');
   
    const authenticate =require("../middlewares/jwtMiddleware");

   
 


server.get("/posts",authenticate.authenticate, cors(), postController.listAllPosts);
server.post("/post/createPost",authenticate.checkAdmin,cors(),postController.createAPost);

}

 