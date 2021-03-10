import { ColorType, IconButton } from "@shared/ui-kit";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";

const properties = {
  title: "Atoms/IconButton",
  decorators: [withKnobs],
};
export default properties;

export const Default = () => {
  const icon = text("Icon", "arrow-right");
  const options: Record<string, ColorType> = {
    Gray: "gray",
    Red: "red",
    Yellow: "yellow",
    Green: "green",
    Blue: "blue",
    Indigo: "indigo",
    Purple: "purple",
    Pink: "pink",
  };
  const outlined = boolean("Outlined", false);
  const color = select("Color", options, "red");
  return (
    <>
      <IconButton onClick={action("clicked")} outlined={outlined} icon={icon} color={color} />
    </>
  );
};
