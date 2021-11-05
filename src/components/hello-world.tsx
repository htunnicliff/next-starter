export type HelloWorldProps = JSX.IntrinsicElements["p"] & {
  favoritePerson?: string;
};

export function HelloWorld({
  favoritePerson = "world",
  ...rest
}: HelloWorldProps) {
  return <p {...rest}>Hello {favoritePerson}!</p>;
}
