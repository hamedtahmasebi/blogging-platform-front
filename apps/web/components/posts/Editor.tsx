import EditorJS, {
    OutputData,
    ToolConstructable,
    ToolSettings,
} from "@editorjs/editorjs";
import Header from "@editorjs/header";
import { useEffect, useRef } from "react";

const ToolsConfig: Record<string, ToolConstructable | ToolSettings> = {
    header: {
        class: Header,
        shortcut: "CMD+H",
        inlineToolbar: true,
        config: {
            placeholder: "Enter a Header",
            levels: [2, 3, 4],
            defaultLevel: 2,
        },
    },
};

export default function Editor({
    data,
    onChange,
    containerId,
}: {
    containerId: string;
    onChange: (data: OutputData) => void;
    data: OutputData;
}) {
    const ref = useRef<EditorJS>(null);
    useEffect(() => {
        if (!ref.current) {
            ref.current = new EditorJS({
                holder: containerId,
                async onChange(api, event) {
                    const content = await api.saver.save();
                    onChange(content);
                },
                data,
                tools: ToolsConfig,
            });
        }

        return () => {
            if (ref.current && ref.current.destroy) {
                ref.current.destroy();
            }
        };
    }, []);

    return (
        <>
            <div
                id={containerId}
                style={{
                    width: "100%",
                    minHeight: 500,
                    borderRadius: " 7px",
                }}
            />
        </>
    );
}
