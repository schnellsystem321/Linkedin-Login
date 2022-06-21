import React, { useState, useEffect } from "react";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import "./Feed.css";
import Post from "./Post";
import { db } from "./firebase";
import InputOption from "./InputOption";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move"
export default function Feed() {
  const user= useSelector(selectUser);
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
    .orderBy("timestamp","desc")
    .onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);
  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl:user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput("");
  };
  return (
    <div className="feed ">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      
<FlipMove>
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
           photoUrl={photoUrl}
        />
      ))}
</FlipMove>
      {/* <Post name="user" description="This is a test" message="Done here" />
      <div></div> */}
    </div>
  );
}