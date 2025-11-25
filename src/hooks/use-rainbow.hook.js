/* eslint-disable array-callback-return */
import { useEffect, useRef } from 'react';
import { range, generateId } from '@utils/utils';
import useIncrementingNumber from '@hooks/use-incrementing-number.hook';
import { log } from 'node_modules/astro/dist/core/logger/core';

const rainbowColors = [
  'hsl(1deg, 96%, 55%)', // red
  'hsl(25deg, 100%, 50%)', // orange
  'hsl(40deg, 100%, 50%)', // yellow
  'hsl(45deg, 100%, 50%)', // yellow
  'hsl(66deg, 100%, 45%)', // lime
  'hsl(130deg, 100%, 40%)', // green
  'hsl(177deg, 100%, 35%)', // aqua
  'hsl(230deg, 100%, 45%)', // blue
  'hsl(240deg, 100%, 45%)', // indigo
  'hsl(260deg, 100%, 55%)', // violet
  'hsl(325deg, 100%, 48%)', // pink
];

const paletteSize = rainbowColors.length;
const WINDOW_SIZE = 3;

// During compile-time build, we have to assume no browser support.
// On mount, we'll check if `CSS.registerProperty` exists
const hasBrowserSupport =
  typeof window !== 'undefined'
    ? typeof window.CSS.registerProperty === 'function'
    : false;

// Function for generating a unique color
const getColorPropName = (id, index) => `--magic-rainbow-color-${id}-${index}`;

const useRainbow = ({ intervalDelay = 2000 }) => {
  const prefersReducedMotion =
    typeof window === 'undefined'
      ? true
      : window.matchMedia('(prefers-reduced-motion: no-preference)');

  const isEnabled = hasBrowserSupport && prefersReducedMotion.matches;

  // Generate a permanent unique ID for this component instance
  const { current: uniqueId } = useRef(generateId());
  console.log(uniqueId);

  // Register all custom properties
  useEffect(() => {
    if (!isEnabled) {
      return;
    }

    range(0, WINDOW_SIZE).map((index) => {
      const name = getColorPropName(uniqueId, index);
      const initialValue = rainbowColors[index];

      CSS.registerProperty({
        // The name of our property, should match what we use in our CSS
        name,

        // How we want to interpolate that value, when it changes:
        syntax: '<color>',

        // Whether it should inherit its value from the cascade
        // (like `font-size` does), or not (like `position` doesn't)
        inherits: false,

        initialValue,
      });
    });
  }, [isEnabled, WINDOW_SIZE]);

  // Get an ever-incrementing number from another custom hook
  const intervalCount = useIncrementingNumber(intervalDelay);

  // Generate a CSS custom property for each color
  return range(0, WINDOW_SIZE).reduce((acc, index) => {
    const effectiveIntervalCount = isEnabled ? intervalCount : 0;

    const name = getColorPropName(uniqueId, index);

    // Shift every color up by one position.
    // `% paletteSize` is a handy trick to ensure that values "wrap around"; if we've exceeded
    // the number of items in the array, it loops back to 0.
    const value = rainbowColors[(effectiveIntervalCount + index) % paletteSize];

    return {
      ...acc,
      [name]: value,
    };
  }, {});
};

export default useRainbow;
