//Demo cho du lieu dashboard


// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const baseUrl = "https://jsonplaceholder.typicode.com/posts"

// export default function Booklist() {
//     const [posts, setPosts] = useState([]);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         function getPost() {
//             axios.get(baseUrl).then((res) => {
//                 setPosts(res.data)
//                 setLoading(true)
//                 console.log("Call")
//             });
//         }
//         getPost()
//         const interval = setInterval(() => getPost(), 5000)
//         return () => {
//           clearInterval(interval);
//         }
//       },[]);

//     if(!loading) {
//         return <div>Loading...</div>;
//       }
//       else {
//           return (
//           <div>
//           <ul>
//               {
//               posts.map(post => (
//               <li key={post.id}>{post.title}</li>  
//              ))
//               }
//           </ul>
            
//           </div>
//           )
//       }
// }
