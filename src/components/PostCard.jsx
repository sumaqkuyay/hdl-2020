import React from 'react';
import logoUser from '../assets/icons/icon-user.png';
import CreateComment from './CreateComment';
import CommentCard from './CommentCard';
import AddComment from '../assets/icons/icon-addComment.png';

const PostCard = () => {
  return (
    <div className="bg-white my-2">
      <div className="">
        <div className="d-flex flex-row justify-content-between p-3">
          <div className="col-3 p-0">
            <img className="img-user rounded-circl " src={logoUser} alt="Foto usuario" />
          </div>
          {/* ${objPost.photo ? `<img className = "user" src="${objPost.photo}"> ` : '<img className = "user" src="assets/user.png">'} */}
          <div className="col-5 p-0 d-flex flex-column justify-content-center">
            <h5 className="m-0">Sonia</h5>
            <time className="text-muted" dateTime="date">12 h</time>
          </div>
          <div className="col-4 p-0 text-right">
            <div className="btn-group dropleft">
              <button className="btn btn-sm btn-light bg-white border-0" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                ...
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <span className="dropdown-item">Editar</span>
                <span className="dropdown-item">Eliminar</span>
              </div>
            </div>
            <select className="form-control form-control-sm border-0">
              <option value="0" className="">Público</option>  {/* <option value="0" {(objPost.privacy === '1') || 'selected'} className="">Público</option>*/}
              <option value="1" className="">Privado</option>
            </select>
          </div>
        </div>
        {/* ${(user.uid === objPost.useruid) ? */}

      </div>
      <div className="">
        <div className="">
          <p contenteditable="false" id="editPost" ></p>
          {/* ${objPost.url ? `<img id="photoPost" src="${objPost.url}">` : ''} */}
        </div>
        {/* <button className="hide" hidden id="btnSave">💾</button>
        <button className="hide" hidden id="btnCancel">✖️</button> */}
        <div className="row p-0 m-0 justify-content-around">
          <button className="col-4 btn btn-light-pink p-1">
            {/* <img src="assets/like-solid-24.png" alt="2" /> */}
            Me Ayudó
           </button>
          <button className="col-4 btn btn-light-pink p-1">
            {/* <img src="assets/like-solid-24.png" alt="2" /> */}
            Me indigna
           </button>
          <button className="col-4 btn btn-light-pink p-1">
            <img src={AddComment} alt="" />Comentar
            </button>
        </div>
        <CreateComment />
        <CommentCard />
      </div>
    </div>
  );
};

export default PostCard;
