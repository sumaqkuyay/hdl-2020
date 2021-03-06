import React from 'react';
// import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import CreatePost from '../components/CreatePost';
import PostCard from '../components/PostCard';
import UserInfo from '../components/UserInfo';

const Profile = () => {
  return (
    <div className="bg-gray">
      <NavBar />
      <div className="container pt-5 mt-5">
        <div className="row">
          <div className="col-sm-4 p-0">
            <UserInfo />
          </div>
          <div className="col-sm-8 p-0">
            <p>Mis Publicaciones</p>
            <CreatePost />
            <PostCard />
          </div>
          {/* </section> */}
          {/* <section id="allPost" class="post-done">
            </section> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
