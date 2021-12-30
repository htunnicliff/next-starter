import { styled } from "@/styles/stitches.config";

const Root = styled("p", {
  fontFamily: "$mono",
});

export type HelloWorldProps = {
  favoritePerson?: string;
};

export function HelloWorld({ favoritePerson = "world" }: HelloWorldProps) {
  return <Root>Hello {favoritePerson}!</Root>;
}
