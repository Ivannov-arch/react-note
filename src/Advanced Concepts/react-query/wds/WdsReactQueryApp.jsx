 
//#region : until minute 18

// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

// function wait(duration) {
//     return new Promise(resolve => setTimeout(resolve, duration))
// }

// const POSTS = [
//     { id: 1, title: 'Post 1' },
//     { id: 2, title: 'Post 2' },
// ]

// // /posts => ["posts"]
// // /posts/id => ["posts", post.id]
// // /posts?authorId=1 => ["posts", {authorId: 1}]
// // /posts/id/comments => ["posts", post.id, "comments"]

// export default function WdsReactQueryApp() {

//     const queryClient = useQueryClient()
//     const postsQuery = useQuery({
//         queryKey: ['postsWDS'],
//         queryFn: (obj) => wait(1000).then(() => {
//             console.log(obj)
//             return[...POSTS]}),

//     })
//     // postsQuery.status === "success"

//     // useMutation() -------------------------------------------
//     const newPostMutation = useMutation({
//         mutationFn: title => {
//             return wait(1000).then(() => {
//                 POSTS.push({ id: crypto.randomUUID(), title})
//             })
//         },
//         onSuccess: () => {
//             queryClient.invalidateQueries(["postsWDS"])
//         }
//     })

//     if (postsQuery.isLoading) return <h1>Loading...</h1>
//     if (postsQuery.isError) {
//         return <pre>{JSON.stringify(postsQuery.error)}</pre>
//     }

//   return (
//     <div>
//         {postsQuery.data.map(post => (
//             <div key={post.id}>{post.title}</div>
//         ))}
//         <button disabled={newPostMutation.isPending} onClick={() => newPostMutation.mutate("New Post")}>Add New</button>
//     </div>
//   )
// }
//#endregion

import Buttons from "../../../Components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import PostsList1 from "./components/PostsList1";
import PostsList2 from "./components/PostsList2";
import Post from "./components/Post";
import CreatePost from "./components/CreatePost";
import PostListPaginated from "./components/PostListPaginated";
import PostInfinite from "./components/PostInfinite";
// import { useQueryClient } from "@tanstack/react-query";
// import { getPostsPaginated } from "./api/posts";

export default function WdsReactQueryApp() {
  const [currentPage, setCurrentPage] = useState(<PostsList1 />);
  // const queryClient =  useQueryClient()

  // function onHoverPrefetch() {
  //     queryClient.prefetchQuery({
  //         queryKey: ["postsWDS", page, limit],
  //         queryFn: () => getPostsPaginated(page, limit)})
  // }

  return (
    <div>
      <button onClick={() => setCurrentPage(<PostsList1 />)}>
        Posts List 1
      </button>
      <button onClick={() => setCurrentPage(<PostsList2 />)}>
        Posts List 2
      </button>
      <button onClick={() => setCurrentPage(<Post id={1} message="" />)}>
        1st Post
      </button>
      <button
        onClick={() =>
          setCurrentPage(<CreatePost setCurrentPage={setCurrentPage} />)
        }
      >
        Create Post
      </button>
      {/* <button onMouseEnter={onHoverPrefetch} onClick={() => setCurrentPage(<PostListPaginated/>)}>Post List Paginated</button> */}
      <button onClick={() => setCurrentPage(<PostListPaginated />)}>
        Post List Paginated
      </button>
      <button onClick={() => setCurrentPage(<PostInfinite />)}>
        Post Infinite
      </button>
      <br />
      {currentPage}
      <br />
      <Link
        target="_blank"
        to="https://youtu.be/r8Dg0KVnfMA?si=unKXwbn6aCLeltEV"
      >
        Learn More
      </Link>
      <Buttons />
    </div>
  );
}
