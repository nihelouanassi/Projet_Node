import axios from "axios";

export const getAllPosts = async () => {
    const res = await axios.get(`http://localhost:3000/posts/`);
    return res.data;
    
}


export const savePost = async (title,content) => {
    const res = await axios.post(`http://localhost:3000/post/createPost`,{title:title,content:content});
    return res.data;
    
}


