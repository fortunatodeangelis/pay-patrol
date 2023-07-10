import { NavigationItemType } from '@/data/navigation';
import { createStyles, Text, rem } from '@mantine/core';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const useStyles = createStyles(theme => ({
  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  wrapper: {
    width: rem(160),
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
  link: {
    display: 'block',
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export default function NavigationItem({ item }: { item: NavigationItemType }) {
  const { classes, theme } = useStyles();
  const { t } = useTranslation('common');
  return (
    <div className={classes.wrapper} key={item.name}>
      <Text className={classes.title}>{t(item.name)}</Text>
      {item.list &&
        item.list.map((link, index) => (
          <Link
            key={index}
            className={classes.link}
            href={link.path}
          >
            {t(link.name)}
          </Link>
        ))}
    </div>
  );
}
