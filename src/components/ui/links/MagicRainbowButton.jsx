// import { styled } from 'styled-components';

import useRainbow from '@hooks/use-rainbow.hook';

const MagicRainbowButton = function ({
  children,
  intervalDelay = 1300,
  ...rest
}) {
  // Number of milliseconds for each update
  const transitionDelay = intervalDelay * 1.25;

  const colors = useRainbow({ intervalDelay });

  const colorKeys = Object.keys(colors);

  return (
    <button
      {...rest}
      style={{
        // Spread the colors to define them as custom properties on this element
        ...colors,
        position: 'relative',
        fontSize: '2rem',
        padding: '0.5em 1em',
        border: 'none',
        color: 'white',
        textShadow: '1px 1px 1px rgba(0, 0, 0, 0.15)',

        transition: `
          ${colorKeys[0]} ${transitionDelay}ms linear,
          ${colorKeys[1]} ${transitionDelay}ms linear,
          ${colorKeys[2]} ${transitionDelay}ms linear
        `,
        background: `
          radial-gradient(
            circle at top left,
            var(${colorKeys[2]}),
            var(${colorKeys[1]}),
            var(${colorKeys[0]})
          )
        `,
      }}
    >
      {children}
    </button>
  );
};

export default MagicRainbowButton;
