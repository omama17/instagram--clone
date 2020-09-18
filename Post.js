import React,{useState,useEffect} from 'react'
import  './Post.css'
import Avatar from '@material-ui/core/Avatar'
import { Unsubscribe } from '@material-ui/icons';
import { db } from './firebase';
import firebase from 'firebase'
function Post({postId,username,caption,imageUrl,user}) {
     const [comments, setComments] = useState([]);
     const [comment, setComment] = useState('');
     useEffect(() => {
          let unsubscribe;
          if(postId){
               unsubscribe = db.collection('posts')
               .doc(postId)
               .collection('comments').
               onSnapshot((snapshot) =>{
                    setComments(snapshot.docs.map((doc) => doc.data()
                    ))
               });
          }
          return () => {
               unsubscribe();
          };
     }, [postId])
     const postComment = (event) =>{
          event.preventDefault();
       //   db.collection('posts').doc(postId).collection('comments').add({
         //      text:comment,
           //    username:user.displayName,
             //  timestamp:firebase.firestore.FieldValue.serverTimestamp()

          //}
          //);
          setComment('')
     }
    return (
        <div className="post">
        <div className="post__header">
        <Avatar className="post__avatar" alt="Nabeela" src="data:image/jpeg;base64,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" />
             <h3>{username}</h3>
        </div>
       
             <img className="post__image" src={imageUrl}/>
             <h4 className="post__text"><strong>{username }</strong>{ caption}</h4>
            <div className="post__comments">
                
                 {comments.map((comment) =>{
                {/*   <div>
                      <p> <strong>{comment.username}</strong> {comment.text}</p>
 
</div>; */}
 })}
            </div>
            
             <form className="post__commentBox" >
             <input className="post__input" type="text" placeholder="add a comment..."
             value={comment} onChange={(e) =>setComment(e.target.value)}/>
               <button disabled={!comment}
                className="post__button" type="submit" onClick={postComment}
               >post</button>
             </form>
             </div>
             
     )
}
export default Post
 









