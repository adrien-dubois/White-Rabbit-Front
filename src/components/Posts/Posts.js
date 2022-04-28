import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Circle from '../Spinner/Circle'
import Post from './Post/Post'
import { Div } from './Posts.elements'
import ReactPaginate from "react-paginate";


const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  // const [posts, setPosts] = useState(posted);
  const [pageNumber,setPageNumber] = useState(0);

  const postsPerPage = 6;
  const pagesVisited = pageNumber * postsPerPage;

  const pageCount = Math.ceil(posts.length / postsPerPage);

  const changePage = ({selected}) => {
    setPageNumber(selected)
  };

  const displayPosts = posts
      .slice(pagesVisited, pagesVisited + postsPerPage)
      .map((post) => {
        return (
          <div key={post._id} className="col-4">
              <Post post={post} setCurrentId={setCurrentId} />
          </div>
        );
      });

  return (
      !posts.length ? <Circle/> : (
        <Div>
          <div className="row">
            {displayPosts}
          </div>
          <ReactPaginate 
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBtn"}
            previousLinkClassName={"prevBtn"}
            nextLinkClassName={"nextBtn"}
            disabledClassName={"disableBtn"}
            activeClassName={"activeBtn"}
          />
        </Div>
      )
  )
}

export default Posts