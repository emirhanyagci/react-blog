import { useState } from "react";
import Button from "./Button";
import { usePostsContext } from "../context/PostsContext";
function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { setPost } = usePostsContext();
  function addPost() {
    try {
      if (title !== "" && content !== "") setPost(title, content);
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div className="bg-orange-400/10 p-5 space-x-5 flex justify-between ">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="bg-transparent border-[1px] w-[35%] border-orange-400 rounded-sm outline-none focus:border-2 px-3"
        type="text"
        placeholder="Type Title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="bg-transparent w-[45%] px-3 py-2 border-[1px]  border-orange-400 rounded-sm outline-none focus:border-2"
        placeholder="Type Content"
      ></textarea>
      <Button
        onClickHandler={addPost}
        className="bg-orange-400 px-4 rounded-md w-[20%] hover:bg-orange-500"
      >
        Add Posts
      </Button>
    </div>
  );
}

export default AddPost;
