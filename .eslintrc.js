module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["airbnb", "airbnb/hooks"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-uses-react": 0,
    "react/prop-types": 0,
  },
};
