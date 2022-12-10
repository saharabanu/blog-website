import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Image, Modal, Row } from 'react-bootstrap';
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import data from "../../../../database/blogsData.json";
import { deleteBlogThunk } from "../../../../redux/features/blogs/thunk/deleteBlogThunk";
import { editBlogThunk } from "../../../../redux/features/blogs/thunk/editBlogThunk";
import { getBlogThunk } from "../../../../redux/features/blogs/thunk/fetchBlogsThunk";
import EditBlogModal from "../../../modal/EditBlogModal";

const ManageBlogs = () => {
  const blog = useSelector(state => state.blog.blog);
  const {blogs, loading, error} = useSelector(state => state.blogs);
  const dispatch = useDispatch();
  const {title, desc1, author, image, desc2, category, date, desc3, _id} = blog || {};
  
  const [editData, setEditData] = useState({});
  const [show, setShow] = useState(false);

  
  const handleShow = (blog) => {
    setEditData(blog)
    setShow(true)
};

// const [show, setShow] = useState(false);

const [editTitle, setEditTitle] = useState("");
const [editImage, setEditImage] = useState("");
const [editCategory, setEditCategory] = useState("");
const [editAuthor, setEditAuthor] = useState("");
const [editDesc1, setEditDesc1] = useState("");
const [editDesc2, setEditDesc2] = useState("");
const [editDesc3, setEditDesc3] = useState("");

// console.log(title);
const handleClose = () => setShow(false);


//  get all blog data 
    useEffect(() => {
      dispatch(getBlogThunk())
    }, [dispatch, editData]);

    const handleSubmit = (e) => {
      e.preventDefault();
      
      dispatch(editBlogThunk(_id,{
        ...blog,
            title: blog.editTitle,
            image: editImage,
            category: editCategory,
            author: editAuthor,
            desc1: editDesc1,
            desc2: editDesc2,
            desc3: editDesc3
          
          
        }))
      
    console.log(blog);
      
      setShow(false)
    };

    // delete blog handler 
    const deleteBlogHandler = (id) => {
            dispatch(deleteBlogThunk(id))
    }
    

    
    let content;
 
   if (loading) {
     content = <div>
     <Spinner animation="border" variant="warning" />
   </div>
     
   }
   if (error) {
     content = <p className="bg-red-500 text-white">Something went wrong.......</p>
     
   }
   if (!loading && !error && blogs?.length === 0) {
     content = <p> No Blogs Found.......</p>
     
   }
   if (!loading && !error && blogs?.length ) {
     content = blogs.map(blog => (<Row
      key={blog._id}
      className="user-order-detail g-0 mx-5">
      <Col md={3} xs={12}><h5 className="mb-0 mt-2 fs-6 text-start ps-3">{blog.title}</h5></Col>
      <Col md={2} xs={6}><h5 className="mb-0 mt-2 fs-6 ">{blog.category} Tk</h5></Col>
      <Col md={3} xs={6}><h5 className="mb-0 mt-2 fs-6 ">{blog.author} </h5></Col>
     
      <Col md={2} xs={6}>
         
         <h5 className="my-2" >
          <Button variant="outline-dark" className=" ms-3" onClick={()=>handleShow(blog)}>Update</Button></h5>
      </Col>
      <Col md={1} xs={6}>
      
          <h5 className="my-2 text-center"><Button variant="danger" className=" ms-3" onClick={() => deleteBlogHandler(blog._id)}>Delete</Button></h5>
           
      </Col>

  </Row>) )
     
   }
 

  
  return (
    <>
     <div>
    
            <Container className="">

                <h4>All Blogs</h4>
                <Row className="heading g-0 py-3 mx-5">
               <Col md={3} xs={6}><h3 className="mb-0 fs-5 text-start ps-3">Title</h3></Col>
                <Col md={2} xs={6}><h3 className="mb-0 fs-5">Category</h3></Col>
                <Col md={3} xs={6}><h3 className="mb-0 fs-5">Author</h3></Col>
                <Col md={2} xs={6}><h3 className="mb-0  fs-5">Update</h3></Col>
                <Col md={2} xs={6}><h3 className="mb-0  fs-5 ">Delete</h3></Col>
               </Row>
             
                {content}
            </Container>
            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <input type="text" placeholder="title" id='title' defaultValue={title} name="title" onChange={(e) => setEditTitle(e.target.value)}/>

         {/* <input type="text" placeholder="Img Url" id='image'defaultValue={image} name="image" onChange={(e) => setEditImage(e.target.value)}/>

         <input type="text" placeholder="Category" id='category' defaultValue={category} name="category" onChange={(e) => setEditCategory(e.target.value)}/>

         <input type="text" placeholder="Author" id='author'defaultValue={author} name="author" onChange={(e) => setEditAuthor(e.target.value)}/>

         <input type="text" placeholder="desc1" id='desc1'defaultValue={desc1} name="model" onChange={(e) => setEditDesc1(e.target.value)}/>

         <input type="text" placeholder="desc2" id='desc2'defaultValue={desc2} name="desc2" onChange={(e) => setEditDesc2(e.target.value)}/>

         <input type="text" placeholder="desc3" id='desc3'defaultValue={desc3} name="desc3" onChange={(e) => setEditDesc3(e.target.value)}/> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>Save</Button>
        </Modal.Footer>
      </Modal>
          
           
        </div>
     
    </>
  );
};

export default ManageBlogs;
