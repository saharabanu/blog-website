import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { editBlogThunk } from '../../redux/features/blogs/thunk/editBlogThunk';

const EditBlogModal = ({setShoww, data}) => {
  const {show, setShow} = setShoww;
 
  // const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [editTitle, setEditTitle] = useState("");
  const {title,_id} = data;
  const handleClose = () => setShow(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(editBlogThunk(_id,{
          ...data,
        title: editTitle,
        
        
      }))
    
console.log(data);
    
    //   setEditMode(false)
  };
  return (
    <>
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
         <input type="text" placeholder="title" id='model'defaultValue={title} name="model" onChange={(e) => setEditTitle(e.target.value)}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditBlogModal