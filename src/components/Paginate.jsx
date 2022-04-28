import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Post from "./Posts/Post/Post";


const Paginate = (posted, setCurrentId) => {

    const [posts, setPosts] = useState(posted);
    const [pageNumber,setPageNumber] = useState(0);

    const postsPerPage = 6;
    const pagesVisited = pageNumber * postsPerPage;

    const displayPosts = posts
        .slice(pagesVisited, pagesVisited + postsPerPage)
        .map((post) => {
            <div key={post._id} className="col-4">
                <Post post={post} setCurrentId={setCurrentId} />
            </div>
        })

    return 
        <>
    
        </>
}

export default Paginate;