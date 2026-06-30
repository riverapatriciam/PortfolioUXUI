export const typography = {
  fontFamily: {
    primary: '"Momo Trust Sans", sans-serif',
    secondary: '"Inter", sans-serif',
  },

  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    extrabold: 800,
  },

  fontSize: {
    h1: "3.25rem", //52
    h2: "3rem", //48
    h3: "2.75rem", //44
    title: "2rem", //32
    subtitle: "1.5rem", //24
    body: "1.125rem", //18
    bodySm: "1rem", //16
    small: "0.875rem", //14
  },

  lineHeight: {
    tight: 1.1,
    heading: 1.2,
    body: 1.6,
    relaxed: 1.8,
  },
} as const;
