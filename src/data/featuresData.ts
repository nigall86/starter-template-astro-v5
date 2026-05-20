// icons
import Close from '@/icons/close.svg';
import Users from '@/icons/users.svg';
import Arrow from '@/icons/arrow.svg';

export const Features = [
  {
    title: 'Zero JavaScript Runtime',
    description:
      'Astro renders HTML on the server and strips away any remaining, unused JavaScript.',
    icon: Close,
  },
  {
    title: 'The Power of Islands',
    description:
      'Need interactive UI? Load individual, non-blocking component islands in parallel.',
    icon: Users,
  },
  {
    title: 'Lazy-Loading Islands',
    description:
      "Components only hydrate when they scroll into view. If you don't see it, Astro won't load it.",
    icon: Arrow,
  },
];
