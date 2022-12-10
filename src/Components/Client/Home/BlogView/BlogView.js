import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filterByCategory, filterByTitle } from "../../../../redux/features/filters/filtersActions";

const BlogView = ({ blog }) => {
  const { _id, image, title, category, desc1, date } = blog;
  const dispatch = useDispatch();
//  filter by category handler function 
  const filterByCategoryHandler = (category) => {
    dispatch(filterByCategory(category))

  }
//  filter by category handler function 
  const filterByFilterHandler = (title) => {
    dispatch(filterByTitle(title))


  }

  return (
    <>
      <div className="col-md-6 mb-3">
        <div className="blog-container">
          <div className="row">
            <div className="col-md-6">
              <div className="position-relative">
                <div className="blog_img ">
                  <img className="img-fluid " src={image} alt="" />
                </div>
                <div  className="top-category position-absolute top-0 left-0 ">
                  <h5 onClick={() => filterByCategoryHandler(category)} className="px-2 py-1 " style={{ backgroundColor: "#9932cc", color: "#fff",cursor:"pointer" }}>
                    {category}
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <h4 onClick={() => filterByFilterHandler(title)} style={{cursor:"pointer"}}>{title}</h4>
                <h4  style={{cursor:"pointer"}}>{date}</h4>
                <p>{desc1.slice(0, 100)}</p>
                <div className="blog-btn">
                  <Link to={`blog/${_id}` } style={{ color: "#9932cc" }} >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogView;
