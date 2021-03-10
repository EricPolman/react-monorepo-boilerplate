import { Topbar } from "@shared/ui-kit";
import { text } from "@storybook/addon-knobs";

const properties = {
  title: "Organisms/Topbar",
};
export default properties;

export const Default = () => {
  const title = text("Title", "Polman Apps");
  return (
    <>
      <div className="w-full mb-4">
        <Topbar title={title} />
      </div>
      <div className="w-1/2 mb-4">
        <Topbar title={title} />
      </div>
      <div className="w-1/4 mb-4">
        <Topbar title={title} />
      </div>
    </>
  );
};
