import { ReactElement } from "react";
import { IconButton } from "../atoms";

interface Props {
  applicationName?: string;
}

export function Topbar({ applicationName = "Polman Apps" }: Props): ReactElement {
  return (
    <div className="bg-gray-800 w-full min-w-min h-12 content-center flex flex-row px-2 py-2">
      <div className="flex flex-row h-full">
        <div className="flex-shrink-0">
          <IconButton icon="th" onClick={() => {}} />
        </div>
        <h1 className="text-white flex-grow text-lg ml-3 overflow-ellipsis overflow-hidden">{applicationName}</h1>
      </div>
      <div className="flex flex-row content-center h-full ml-auto">
        <IconButton icon="user" onClick={() => {}} />
      </div>
    </div>
  );
}
