import { ReactElement } from "react";
import { IconButton } from "../atoms";

interface Props {
  title?: string;
}

export function Topbar({ title = "Polman Apps" }: Props): ReactElement {
  return (
    <div className="bg-gray-800 w-full h-12 content-center flex flex-row px-2 py-2">
      <div className="flex flex-row h-full">
        <IconButton icon="th" onClick={() => {}} />
        <h1 className="text-white text-lg ml-3">{title}</h1>
      </div>
      <div className="flex flex-row content-center h-full ml-auto">
        <IconButton icon="user" onClick={() => {}} />
      </div>
    </div>
  );
}
