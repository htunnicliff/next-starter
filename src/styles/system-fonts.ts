export const systemFonts = {
  sans: [
    "-apple-system",
    "BlinkMacSystemFont",
    "avenir next",
    "avenir",
    "segoe ui",
    "helvetica neue",
    "helvetica",
    "Ubuntu",
    "roboto",
    "noto",
    "arial",
    "sans-serif",
  ],
  serif: [
    "Iowan Old Style",
    "Apple Garamond",
    "Baskerville",
    "Times New Roman",
    "Droid Serif",
    "Times",
    "Source Serif Pro",
    "serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
  ],
  mono: [
    "Menlo",
    "Consolas",
    "Monaco",
    "Liberation Mono",
    "Lucida Console",
    "monospace",
  ],
};

export function font(
  name: keyof typeof systemFonts,
  prependWith: string[] = []
): string {
  // Get font stack
  const stack = systemFonts[name];

  // Prepend fonts
  const fonts = [...prependWith, ...stack];

  // Apply quotes if needed
  const quoted = fonts.map((value) =>
    /[^\w]/.test(value) ? `"${value}"` : value
  );

  return quoted.join(", ");
}
