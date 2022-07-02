import React from "react";
import img1 from "../../../../../assets/Gallery/galelry-img6.jpg";
import img2 from "../../../../../assets/Gallery/gallery-img2.jpg";
import img3 from "../../../../../assets/Gallery/gallery-img3.jpg";
import img4 from "../../../../../assets/Gallery/gallery-img4.jpg";
import img5 from "../../../../../assets/Gallery/gallery-img5.jpg";
import img6 from "../../../../../assets/Gallery/galley-img1.jpg";

const gallerydata = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img3,
  },
  {
    id: 4,
    img: img4,
  },
  {
    id: 5,
    img: img5,
  },
  {
    id: 6,
    img: img6,
  },
];

const Gallery = () => {
  return (
    <>
      <h4 className="text-center px-3 py-2 border mt-5 mb-3">About Author</h4>

      <div className="row">
        {gallerydata.map((item) => (
          <div className="col-md-4 mb-2" key={item.id}>
            <div className="gallery-img">
              <img style={{ height: "150px", width: "100%" }} src={item.img} alt="" />
              <div className="overlay"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
