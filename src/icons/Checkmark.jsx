export const Checkmark = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5 13L9 17L19 7'
        style={{
          stroke: 'var(--stroke-color, var(--accent))',
          strokeWidth: 'var(--stroke-width, 2px)',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }}
      />
    </svg>
  );
};
