import { ColorType } from "../types";

interface Props {
  label: string;
  outlined?: boolean;
  color?: ColorType;
  onClick(): void;
}

export const TextButton = ({ onClick, outlined, label, color = "gray" }: Props) => {
  const sizeClasses = `py-1 px-3 text-base`;
  let colorClasses = "";
  if (outlined) {
    colorClasses = `border-${color}-500 text-${color}-500 hover:bg-${color}-500 hover:text-white active:bg-${color}-600`;
  } else {
    colorClasses = `bg-${color}-500 text-white hover:bg-${color}-400 active:bg-${color}-600`;
  }
  const outlinedClasses = outlined ? "border bg-none" : "";

  return (
    <button
      onClick={onClick}
      className={`rounded outline-none shadow font-normal tracking-wider ${sizeClasses} ${colorClasses} ${outlinedClasses}`}
    >
      <span>{label}</span>
    </button>
  );
};
