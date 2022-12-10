import { editBlog } from "../blogActions";

// export const editBlogThunk = (id, blog) => {
//     console.log(id, blog);
//     return async (dispatch) => {
//         const response = await fetch(`http://localhost:8000/blog/${id}`,{
//             method: "PUT",
//             body: JSON.stringify({
//                     title: blog.title,
//                     // author: blog.author,
//                     // image: blog.image,
//                     // category: blog.category,
//                     // date: blog.date,
//                     // desc1: blog.desc1,
//                     // desc2: blog.desc2,
//                     // desc3: blog.desc3,
                    
//             }),
//             headers: {
//                 "Content-type": "application/json"
//             }

//         });
//         const data = await response.json();
//         console.log(data);

//         if(data.acknowledged){
//             dispatch(editBlog({
//                 _id: data.insertedId,
//                 ...blog
//             }))
//         }

//     }
// }

export const editBlogThunk = (id, blog) => {
    console.log(id, blog);

    return async(dispatch) => {
        const response = await fetch(`http://localhost:8000/blog/${id}`,{
            method: "PUT",
            body: JSON.stringify({
                title: blog.title,
                
            }),
            headers: {
                "Content-type": "application/json"
            }
        });
        const data = await response.json();
        console.log(data)

        if(data.acknowledged){
            dispatch(editBlog({
                _id: data.insertedId,
                ...blog
            }))
        }
        

    }

}