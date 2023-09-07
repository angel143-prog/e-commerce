const path = require("path");

// This will lint TypeScript and JavaScript files
const checkLintAndFormat = (filenames) => [
  `next lint --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`,
  `npm run prettier --check ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`,
];

module.exports = {
  "**/*.(ts|tsx)": () => "npm run tsc --pretty --noEmit", // This will check Typescript files
  "**/*.{js,jsx,ts,tsx}": [checkLintAndFormat],
};
