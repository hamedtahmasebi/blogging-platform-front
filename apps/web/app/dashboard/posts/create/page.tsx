"use client";
import { OutputData } from "@editorjs/editorjs";
import { useState } from "react";
import Editor from "@/components/posts/Editor";
export default function Page() {
    const [data, setData] = useState<OutputData>({
        blocks: [],
    });
    return (
        <div>
            <h1>This page will be used to create Posts</h1>
            <Editor
                containerId="create-post-editor"
                data={data}
                onChange={(d) => setData(d)}
            />
        </div>
    );
}
