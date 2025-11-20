import { useEditorState, type Editor } from "@tiptap/react";
import {
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaParagraph,
  FaHeading,
  FaList,
  FaAdn,
  FaBackward,
  FaForward,
} from "react-icons/fa";

export const MenuBar = ({ editor }: { editor: Editor }) => {
  const state = useEditorState({
    editor,
    selector: (ctx) => ({
      isBold: ctx.editor.isActive("bold") ?? false,
      canBold: ctx.editor.can().chain().toggleBold().run() ?? false,
      isItalic: ctx.editor.isActive("italic") ?? false,
      canItalic: ctx.editor.can().chain().toggleItalic().run() ?? false,
      isStrike: ctx.editor.isActive("strike") ?? false,
      canStrike: ctx.editor.can().chain().toggleStrike().run() ?? false,
      isParagraph: ctx.editor.isActive("paragraph") ?? false,
      isHeading: ctx.editor.isActive("heading", { level: 1 }) ?? false,
      isBulletList: ctx.editor.isActive("bulletList") ?? false,
      isCodeBlock: ctx.editor.isActive("codeBlock") ?? false,
      canUndo: ctx.editor.can().chain().undo().run() ?? false,
      canRedo: ctx.editor.can().chain().redo().run() ?? false,
    }),
  });

  if (!editor) return null;

  return (
    <div className="flex flex-wrap gap-2 bg-zinc-800/50 p-2 rounded-lg">
      <ToolbarButton
        active={state.isBold}
        disabled={!state.canBold}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <FaBold />
      </ToolbarButton>

      <ToolbarButton
        active={state.isItalic}
        disabled={!state.canItalic}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <FaItalic />
      </ToolbarButton>

      <ToolbarButton
        active={state.isStrike}
        disabled={!state.canStrike}
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <FaStrikethrough />
      </ToolbarButton>

      <ToolbarButton
        active={state.isParagraph}
        onClick={() => editor.chain().focus().setParagraph().run()}
      >
        <FaParagraph />
      </ToolbarButton>

      <ToolbarButton
        active={state.isHeading}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        <FaHeading />
      </ToolbarButton>

      <ToolbarButton
        active={state.isBulletList}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        <FaList />
      </ToolbarButton>

      <ToolbarButton
        active={state.isCodeBlock}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
      >
        <FaAdn />
      </ToolbarButton>

      <ToolbarButton
        disabled={!state.canUndo}
        onClick={() => editor.chain().focus().undo().run()}
      >
        <FaBackward />
      </ToolbarButton>

      <ToolbarButton
        disabled={!state.canRedo}
        onClick={() => editor.chain().focus().redo().run()}
      >
        <FaForward />
      </ToolbarButton>
    </div>
  );
};

const ToolbarButton = ({ active, disabled, onClick, children }: any) => (
  <button
    type="button"
    disabled={disabled}
    onClick={onClick}
    className={`
      flex items-center justify-center gap-2 px-3 py-1.5 rounded-md
      text-sm transition
      border border-zinc-700
      ${active ? "bg-blue-600 text-white" : "bg-zinc-800 text-zinc-200"}
      ${!disabled ? "hover:bg-zinc-700" : "opacity-40 cursor-not-allowed"}
    `}
  >
    {children}
  </button>
);
