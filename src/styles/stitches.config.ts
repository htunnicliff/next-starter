import { createStitches } from "@stitches/react";
import { OnlyStringNumeric } from "@stitches/react/types/css";
import { font } from "./system-fonts";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  getCssText,
  config,
} = createStitches({
  theme: {
    fonts: {
      sans: font("sans"),
      serif: font("serif", ["Lora"]),
      mono: font("mono"),
    },
    radii: {
      sm: "2px",
      md: "4px",
      lg: "8px",
      xl: "12px",
      full: "9999px",
    },
  },
  utils: {
    paddingY: (value: OnlyStringNumeric) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    paddingX: (value: OnlyStringNumeric) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    marginY: (value: OnlyStringNumeric) => ({
      marginTop: value,
      marginBottom: value,
    }),
    marginX: (value: OnlyStringNumeric) => ({
      marginLeft: value,
      marginRight: value,
    }),
    spaceX: (value: OnlyStringNumeric) => ({
      "& > * + *": {
        marginLeft: value,
      },
    }),
    spaceY: (value: OnlyStringNumeric) => ({
      "& > * + *": {
        marginTop: value,
      },
    }),
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    "2xl": "(min-width: 1536px)",
  },
});
