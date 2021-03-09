interface Props {
  label: string;
  outlined?: boolean;
  onClick(): void;
}

const BASE_BUTTON = "rounded outline-none shadow py-3 px-12 font-normal uppercase tracking-wider text-lg";
const CONTAINED_BUTTON = `${BASE_BUTTON} bg-purple-400 border text-white active:bg-red-500 active:border-purple-600`;
const OUTLINED_BUTTON = `${BASE_BUTTON} border border-teal-400 text-teal-400`;

export const Button = ({ onClick, label = "Some label", outlined }: Props) => {
  return (
    <button onClick={onClick} className={outlined ? OUTLINED_BUTTON : CONTAINED_BUTTON}>
      <span>{label}</span>
    </button>
  );
};
