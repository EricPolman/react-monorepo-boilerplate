import { Topbar } from "@shared/ui-kit";
import { text, withKnobs } from "@storybook/addon-knobs";

const properties = {
  title: "Organisms/Topbar",
  decorators: [withKnobs],
};
export default properties;

export const Default = () => {
  const applicationName = text("Application name", "Polman Apps");
  return (
    <>
      <div className="w-full mb-4">
        <Topbar applicationName={applicationName} />
      </div>
      <div className="w-1/2 mb-4">
        <Topbar applicationName={applicationName} />
      </div>
      <div className="w-1/4 mb-4">
        <Topbar applicationName={applicationName} />
      </div>
    </>
  );
};
