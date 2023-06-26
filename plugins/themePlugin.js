import plugin from "tailwindcss/plugin";
import hexRgb from "hex-rgb";

function getRgbFromHex(hex) {
  const { red, green, blue } = hexRgb(hex);

  return `${red} ${green} ${blue}`;
}

// Generate CSS variables
function getCssVariableDeclarations(input, path = [], output = {}) {
  Object.entries(input).forEach(([key, value]) => {
    const newPath = path.concat(key);
    if (typeof value !== "string") {
      getCssVariableDeclarations(value, newPath, output);
    } else {
      output[`--${newPath.join("-")}`] = getRgbFromHex(value);
    }
  });
  return output;
}

// Generate color extension object
function getColorUtilitiesWithCssVariableReferences(input, path = []) {
  return Object.fromEntries(
    Object.entries(input).map(([key, value]) => {
      const newPath = path.concat(key);
      if (typeof value !== "string") {
        return [
          key,
          getColorUtilitiesWithCssVariableReferences(value, newPath),
        ];
      } else {
        return [key, `rgb(var(--${newPath.join("-")}) / <alpha-value>)`];
      }
    })
  );
}

export const multiThemePlugin = plugin.withOptions(
  function (options) {
    const { colorTheme } = options;
    return function ({ addBase }) {
      addBase({
        ":root": getCssVariableDeclarations(Object.values(colorTheme)[0]),
      });
      Object.entries(colorTheme).forEach(([key, value]) => {
        addBase({
          [`[data-theme="${key}"]`]: getCssVariableDeclarations(value),
        });
      });
    };
  },
  function (options) {
    const { colorTheme } = options;
    return {
      theme: {
        extend: {
          colors: getColorUtilitiesWithCssVariableReferences(
            Object.values(colorTheme)[0]
          ),
        },
      },
    };
  }
);
