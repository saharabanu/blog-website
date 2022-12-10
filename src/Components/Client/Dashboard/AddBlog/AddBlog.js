import React from "react";
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addBlogThunk } from "../../../../redux/features/blogs/thunk/addBlogThuk";

const AddBlog = () => {
  const { register, handleSubmit,reset } = useForm();
  const dispatch = useDispatch()
  const onSubmit = data =>{
    const blog = {
      title: data.title,
      author: data.author,
      image: data.image,
      category: data.category,
      date: data.date,
      desc1: data.desc1,
      desc2: data.desc2,
      desc3: data.desc3,
      
    };
    
        // console.log(data);
        
          dispatch(addBlogThunk(blog))
          
        
        
        reset();
    
}
  return (
    <>
       <div className="ps-5 ">
            <h2>Add A Product</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="dashboard-from ms-3">

                        <input placeholder="Blog title" type="text" {...register("title", { required: true })} />
                        <br /> <br />
                        <input placeholder="Author" type="text" {...register("author", { required: true })} />
                        <br /> <br />
                        
                        <input placeholder="IMG Url Only" type="text" {...register("image", { required: true })} />
                        <br /> <br />
                        <input placeholder="date " type="date" {...register("date", { required: true })} />
                        <br /> <br />
                        <select name='category' id='category' {...register("category",{ required: true })}>
                        <option value='TECHNOLOGY'>TECHNOLOGY</option>
                        <option value='TRAVEL'>TRAVEL</option>
                        <option value='LIFESTYLE'>LIFESTYLE</option>
                        <option value='SPORTS'>SPORTS</option>
                        <option value='FASHION'>FASHION</option>
                        <option value='FOOD'>FOOD</option>
                      </select>
                    <br /> <br />
                        <textarea placeholder="Description 1" type="text" {...register("desc1", { required: true })} ></textarea>
                        
                        <br /> <br />
                        <textarea placeholder="Description 2" type="text" {...register("desc2", { required: true })} ></textarea>
                        
                        <br /> <br />
                        <textarea placeholder="Description 3" type="text" {...register("desc3", { required: true })} ></textarea>
                        <br /> <br />
                        
                        <Button  className="add-button"type="submit" variant="dark">Add Product</Button>
                    </form>
        </div>
    </>
  );
};

export default AddBlog;
