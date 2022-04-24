import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { Container, Div } from './Article.elements';
import Posts from '../../components/Posts/Posts'
import Form from '../../components/Form/Form'
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';


const Article = () => {

    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);

    useEffect(()=> {
        dispatch(getPosts());
    }, [ currentId ,dispatch]);
  return (
    <Div>
        <Navbar/>
        <Container style={{ marginTop: '2rem' }}>
            <div className="row">

                <div className="col-8">
                    <Posts setCurrentId={setCurrentId} />
                </div>

                <div className="col-3">
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                </div>

            </div>
        </Container>
    </Div>
  )
}

export default Article