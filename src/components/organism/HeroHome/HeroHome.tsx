import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from '@mantine/core';
import { useTranslation, Trans } from 'next-i18next';
import { Check } from 'tabler-icons-react';

const useStyles = createStyles(theme => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: `${theme.spacing.xl}`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({
      variant: 'light',
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
    zIndex: -1,
  },
}));

export function HeroHome() {
  const { classes } = useStyles();
  const { t } = useTranslation('common');

  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              <Trans i18nKey="hero.title">
                defaultText
                <span className={classes.highlight}>
                  defaultHighlightedText
                </span>
              </Trans>
            </Title>
            <Text color="dimmed" mt="md">
              {t('hero.subTitle')}
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <Check size={rem(12)} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <Trans i18nKey="hero.features.0" components={{ b: <b /> }} />
              </List.Item>
              <List.Item>
                <Trans i18nKey="hero.features.1" components={{ b: <b /> }} />
              </List.Item>
              <List.Item>
                <Trans i18nKey="hero.features.2" components={{ b: <b /> }} />
              </List.Item>
            </List>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                {t('hero.callToAction')}
              </Button>
            </Group>
          </div>
          <Image src={'hero-home.png'} className={classes.image} alt="" />
        </div>
      </Container>
    </div>
  );
}
