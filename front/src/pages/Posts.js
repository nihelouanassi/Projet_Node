import { useState, useEffect } from "react"
import { getAllPosts,savePost } from "../services/post";
import React from 'react';
import { ListGroup, ListGroupItem, Modal, Button, Form } from 'react-bootstrap';

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [refreshData, setRefreshData] = useState(false);
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   

    useEffect(() => {
        const fetchData = async () => {
            const posts = await getAllPosts();

            console.log(posts);

            setPosts(posts)

        };


        fetchData();
        if (refreshData) {
            fetchData();
        }

    }, [refreshData]);


    


const handleSubmit = async event => {
    event.preventDefault();
    await  savePost(title,content);
        
        window.location.reload()
    handleClose();
};












    return (

        <>
           

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                value={title}
                                onChange={event => setTitle(event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Content</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="3"
                                value={content}
                                onChange={event => setContent(event.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Create Post
                    </Button>
                </Modal.Footer>
            </Modal>

            <ListGroup>
                {posts.map(item => (
                    <ListGroupItem key={item.id}>{item.title}</ListGroupItem>
                ))}

            </ListGroup>

            <Button variant="primary" onClick={handleShow}>
                Create Post
            </Button>

        </>




    )

}

export default Posts