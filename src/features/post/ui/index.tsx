import { useState, type FC } from "react";
import type React from "react";
import { useCreatePostMutation } from "../api/postApi";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextStyle } from "@tiptap/extension-text-style";
import { MenuBar } from "@/shared/tiptap";
import { useNavigate } from "react-router-dom";

const extensions = [StarterKit, TextStyle];

export const CreatePost: FC = () => {
  const [post, setPost] = useState({ title: "", text: "" });
  const [createPost] = useCreatePostMutation();
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
    <div className="max-w-2xl mx-auto space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Введите текст"
          onChange={handleChange}
          className="
            w-full px-4 py-2 rounded-lg
            bg-zinc-800 text-white placeholder-zinc-400
            outline-none focus:ring-2 focus:ring-blue-500
          "
        />

        <MenuBar editor={editor} />

        <EditorContent
          editor={editor}
          className="
            min-h-[150px] px-4 py-3 rounded-lg
            bg-zinc-800/40 text-white
            prose prose-invert
            max-w-none
            focus:outline-none
          "
        />

        <button
          type="submit"
          className="
            px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700
            transition text-white font-medium
          "
        >
          create
        </button>
      </form>
    </div>
  );
};
