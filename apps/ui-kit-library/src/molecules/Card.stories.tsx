import { Card } from "@shared/ui-kit";
import { text, withKnobs } from "@storybook/addon-knobs";

const properties = {
  title: "Molecules/Card",
  decorators: [withKnobs],
};
export default properties;

export const Default = () => {
  const title = text("Card title", "Some card title");
  const image = text("Card image", "https://loremflickr.com/320/240");
  return (
    <>
      <div className="w-96 p-10 bg-gray-100">
        <Card
          title={title}
          image={image}
          actions={[
            {
              label: "Click me",
              onClick: () => {},
              color: "red",
            },
          ]}
        />
      </div>
      <div className="w-96 p-10 bg-gray-100">
        <Card title={title} image={image} />
      </div>
      <div className="w-96 p-10 bg-gray-100">
        <Card title={title} />
      </div>
    </>
  );
};
