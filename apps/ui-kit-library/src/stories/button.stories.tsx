import React from "react";
import { Button } from "@shared/ui-kit";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  title: "Button",
  decorators: [withKnobs],
};

export const primary = () => {
  const label = text("Label", "See now test");
  const outlined = boolean("Oultined", false);
  return <Button onClick={action("clicked")} outlined={outlined} label={label} />;
};