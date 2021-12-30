import { styled } from "@stitches/react";
import { HelloWorld } from "../src/components/hello-world";

const Root = styled("main", {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export default function IndexPage() {
  return (
    <Root>
      <HelloWorld />
    </Root>
  );
}
