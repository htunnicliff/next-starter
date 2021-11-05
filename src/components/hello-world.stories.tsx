import { HelloWorld, HelloWorldProps } from "./hello-world";
import { Meta, Story } from "@storybook/react";

const Template: Story<HelloWorldProps> = (props) => <HelloWorld {...props} />;

export const Main = Template.bind({});

export const WithPerson = Template.bind({});
WithPerson.args = {
  favoritePerson: "Hunter",
};

const meta: Meta<HelloWorldProps> = {
  title: "Hello World",
  component: HelloWorld,
};

export default meta;
