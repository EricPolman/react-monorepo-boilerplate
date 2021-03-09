import { Button } from "@shared/ui-kit";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

const properties = {
  title: "Design System/Atoms/Button",
  decorators: [withKnobs],
};
export default properties;

export const Primary = () => {
  const label = text("Label", "See now test");
  const outlined = boolean("Oultined", false);
  return <Button onClick={action("clicked")} outlined={outlined} label={label} />;
};
