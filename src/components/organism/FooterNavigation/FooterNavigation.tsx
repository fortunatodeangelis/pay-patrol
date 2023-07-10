import { Logo } from '@/components/atom';
import { NavigationItemList } from '@/components/molecules';
import { NavigationItemType, navigationList } from '@/data/navigation';
import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
  rem,
} from '@mantine/core';
import {
  BrandTwitter,
  BrandInstagram,
  BrandLinkedin,
} from 'tabler-icons-react';

const useStyles = createStyles(theme => ({
  footer: {
    marginTop: rem(120),
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
  logo: {
    maxWidth: rem(200),
    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  description: {
    marginTop: rem(5),
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
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
  link: {
    display: 'block',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },
  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },
}));
import { useTranslation } from 'next-i18next';

export function FooterNavigation() {
  const { classes } = useStyles();
  const { t } = useTranslation('common');
  // if year is 2023 it will return 2023, otherwise it will return 2023 and actual year
  const year =
    new Date().getFullYear() === 2023
      ? new Date().getFullYear()
      : `2023 - ${new Date().getFullYear()}`;

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Logo />
          <Text size="xs" color="dimmed" className={classes.description}>
            {t('navigation.appShortDescription')}
          </Text>
        </div>
        <div className={classes.groups}>
          {navigationList.map((item: NavigationItemType) => (
            <NavigationItemList key={item.name} item={item} />
          ))}
        </div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          {year} © {process.env.APP_NAME}
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <BrandTwitter size="1.05rem" />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandLinkedin size="1.05rem" />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandInstagram size="1.05rem" />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
