import { ColorType } from "../types";

interface Props {
  icon: string;
  outlined?: boolean;
  color?: ColorType;
  onClick(): void;
}

export const IconButton = ({ onClick, outlined, icon, color = "gray" }: Props) => {
  const sizeClasses = `h-8 w-8`;
  let colorClasses = "";
  if (outlined) {
    colorClasses = `border-${color}-500 text-${color}-500 hover:bg-${color}-500 hover:text-white active:bg-${color}-600`;
  } else {
    colorClasses = `bg-${color}-500 text-white hover:bg-${color}-400 active:bg-${color}-600`;
  }
  const outlinedClasses = outlined ? "border bg-none" : "";

  return (
    <button onClick={onClick} className={`rounded-full text-base ${sizeClasses} ${colorClasses} ${outlinedClasses}`}>
      <i className={`fa fa-${icon}`} />
    </button>
  );
};
