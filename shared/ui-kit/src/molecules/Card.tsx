import { ReactElement } from "react";
import { TextButton } from "../atoms";
import { ColorType } from "../types";

interface CardAction {
  label: string;
  color?: ColorType;
  onClick: () => void;
}

interface Props {
  image?: string;
  title: string;
  actions?: CardAction[];
}

export function Card({ title, image, actions = [] }: Props): ReactElement {
  return (
    <div className="shadow bg-white rounded overflow-hidden">
      <header>{image && <img className="" src={image} alt={title} />}</header>
      <div className="p-2">{title}</div>
      {actions?.length > 0 && (
        <footer className="p-2 w-full flex flex-row justify-end">
          {actions?.map((action) => (
            <div className="pl-1">
              <TextButton label={action.label} onClick={action.onClick} color={action.color} />
            </div>
          ))}
        </footer>
      )}
    </div>
  );
}
