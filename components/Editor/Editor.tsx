"use client";

import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import {
  BlockNoteView,
  FormattingToolbarPositioner,
  HyperlinkToolbarPositioner,
  ImageToolbarPositioner,
  SideMenuPositioner,
  SlashMenuPositioner,
  useBlockNote,
} from "@blocknote/react";
import "@blocknote/react/style.css";
import "./styles.css";

import { useTheme } from "next-themes";
import { useMediaQuery } from "usehooks-ts";
import { useEdgeStore } from "@/lib/edgestore";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

const Editor = ({ onChange, initialContent, editable }: EditorProps) => {
  const { resolvedTheme } = useTheme();
  const isSmallScreen = useMediaQuery("(max-width: 800px)");

  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({
      file,
    });

    return response.url;
  };

  const editor: BlockNoteEditor = useBlockNote({
    editable,
    initialContent: initialContent //@ts-ignore
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
    onEditorContentChange: (editor) => {
      onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
    },
    uploadFile: handleUpload,
  });

  return (
    <div className="pt-2">
      <BlockNoteView
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
      >
        {isSmallScreen ? (
          <>
            <SlashMenuPositioner editor={editor} />
          </>
        ) : (
          <>
            <FormattingToolbarPositioner editor={editor} />
            <HyperlinkToolbarPositioner editor={editor} />
            <SlashMenuPositioner editor={editor} />
            <SideMenuPositioner editor={editor} />
            <ImageToolbarPositioner editor={editor} />
          </>
        )}
      </BlockNoteView>
    </div>
  );
};

export default Editor;
