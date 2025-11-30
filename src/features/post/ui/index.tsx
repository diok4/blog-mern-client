import { useState, type FC } from "react";
import type React from "react";
import { useCreatePostMutation } from "../api/postApi";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextStyle } from "@tiptap/extension-text-style";
import { MenuBar } from "@/shared/tiptap";
import { useNavigate } from "react-router-dom";
import { LoadingOverlay } from "@/shared/loader";

const extensions = [StarterKit, TextStyle];

export const CreatePost: FC = () => {
  const [post, setPost] = useState({ title: "", text: "" });
  const [createPost, { isLoading }] = useCreatePostMutation();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createPost(post).unwrap();
      await navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const editor = useEditor({
    extensions,
    content: "",
    onUpdate: ({ editor }) => {
      setPost((prev) => ({
        ...prev,
        text: editor.getHTML(),
      }));
    },
  });

  return (
    <div className="max-w-4xl h-screen mx-auto space-y-4">
      {isLoading && <LoadingOverlay />}
      <form onSubmit={handleSubmit} className="space-y-5 px-2 ">
        <input
          type="text"
          name="title"
          placeholder="Title..."
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-[#111827] text-white placeholder-zinc-400 outline-none 
          border border-[#1F2937] "
        />
        <MenuBar editor={editor} />
        <div className="w-full rounded-lg bg-[#111827] border border-[#1F2937] p-2">
          <EditorContent editor={editor} />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font"
        >
          create
        </button>
      </form>
    </div>
  );
};
