import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Image, Modal, Row } from 'react-bootstrap';
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import data from "../../../../database/blogsData.json";
import { deleteBlogThunk } from "../../../../redux/features/blogs/thunk/deleteBlogThunk";
import { getBlogThunk } from "../../../../redux/features/blogs/thunk/fetchBlogsThunk";

const ManageBlogs = () => {

  const {blogs, loading, error} = useSelector(state => state.blogs);

  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState([])
    const [allProducts, setAllProducts] = useState({});
    const [showupdatingMOdal, setShowupdatingMOdal] = useState(false);
    const handleupdatingMOdalClose = () => setShowupdatingMOdal(false);
    const handleupdatingMOdalShow = () => setShowupdatingMOdal(true);


//  get all blog data 
    useEffect(() => {
      dispatch(getBlogThunk())
    }, [dispatch]);

    // delete blog handler 
    const deleteBlogHandler = (id) => {
            dispatch(deleteBlogThunk(id))
    }

    const handleUpdateSubmit = (e) => {
      e.preventDefault()

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
           {/* onClick={() => getProductUpdate(product._id)}  */}
          <Button variant="outline-dark" className=" ms-3" >Update</Button></h5>
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

                <h4>All Blog</h4>
                <Row className="heading g-0 py-3 mx-5">

<Col md={3} xs={6}><h3 className="mb-0 fs-5 text-start ps-3">Title</h3></Col>

<Col md={2} xs={6}><h3 className="mb-0 fs-5">Category</h3></Col>
<Col md={3} xs={6}><h3 className="mb-0 fs-5">Author</h3></Col>
<Col md={2} xs={6}><h3 className="mb-0  fs-5">Update</h3></Col>
<Col md={2} xs={6}><h3 className="mb-0  fs-5 ">Delete</h3></Col>
               </Row>
                {content}
            </Container>
            <Modal show={showupdatingMOdal} onHide={handleupdatingMOdalClose} backdrop="static" keyboard={false}>
                
                <Modal.Body>
                    <Form onSubmit={handleUpdateSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" className="mb-3" >
                                <Form.Control
                                    size="lg"

                                    type="text"
                                    defaultValue={selectedProduct.name}
                                    name="name"
                                    // onBlur={handleOnBlurProductForm}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="12" className="mb-3" >
                                <Form.Control
                                    size="lg"

                                    type="text"
                                    defaultValue={selectedProduct.img}
                                    name="img"
                                    // onBlur={handleOnBlurProductForm}

                                />
                            </Form.Group>
                            <Form.Group as={Col} md="12" className="mb-3" >
                                <Form.Control
                                    size="lg"

                                    type="number"
                                    defaultValue={selectedProduct.price}
                                    min="0"
                                    max="9999999"
                                    name="price"
                                    // onBlur={handleOnBlurProductForm}

                                />
                            </Form.Group>


                        </Row>


                        <Form.Group className="mb-3" as={Col} md="12" controlId="exampleForm.ControlTextarea1">

                            <Form.Control as="textarea"
                                rows={3}
                                defaultValue={selectedProduct.description}
                                name="description"
                                // onBlur={handleOnBlurProductForm}

                            />
                        
                        </Form.Group>
                        <Form.Group className="mb-3" as={Col} md="12" controlId="exampleForm.ControlTextarea1">

                            <Form.Control as="textarea"
                                rows={3}
                                defaultValue={selectedProduct.size}
                                name="size"
                                // onBlur={handleOnBlurProductForm}

                            />
                        
                        </Form.Group>
                        <p className="text-center my-3"> <Button type="submit" variant="danger" className="banner-btn"> Update Product</Button></p>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleupdatingMOdalClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
     
    </>
  );
};

export default ManageBlogs;
