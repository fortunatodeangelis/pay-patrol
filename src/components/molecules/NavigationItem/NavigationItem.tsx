import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { NavigationItemType } from '@/data/navigation';
import {
  createStyles,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Divider,
  Center,
  Box,
  rem,
} from '@mantine/core';
import { ChevronDown } from 'tabler-icons-react';

const useStyles = createStyles(theme => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: rem(42),
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },
  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },
}));

export default function NavigationItem({ item }: { item: NavigationItemType }) {
  const { classes, theme } = useStyles();
  const { t } = useTranslation('common');

  return item.list ? (
    <HoverCard
      key={item.name}
      width={600}
      position="bottom"
      radius="md"
      shadow="md"
      withinPortal
    >
      <HoverCard.Target>
        <span className={classes.link}>
          <Center inline>
            <Box component="span" mr={5}>
              {t(item.name)}
            </Box>
            <ChevronDown size={16} color={theme.fn.primaryColor()} />
          </Center>
        </span>
      </HoverCard.Target>
      <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
        <Group position="apart" px="md">
          <Text fw={500}>{t(item.name)}</Text>
        </Group>
        <Divider
          my="sm"
          mx="-md"
          color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
        />
        <SimpleGrid cols={2} spacing={0}>
          {item.list.map(subItem => (
            <Link href={subItem.path} key={subItem.name}>
              <UnstyledButton className={classes.subLink} key={subItem.name}>
                <Group noWrap align="flex-start">
                  {subItem.icon && (
                    <ThemeIcon size={34} variant="default" radius="md">
                      <subItem.icon size={20} color={theme.fn.primaryColor()} />
                    </ThemeIcon>
                  )}
                  <div>
                    <Text size="sm" fw={500}>
                      {t(subItem.name)}
                    </Text>
                    {subItem.description && (
                      <Text size="xs" color="dimmed">
                        {t(subItem.description)}
                      </Text>
                    )}
                  </div>
                </Group>
              </UnstyledButton>
            </Link>
          ))}
        </SimpleGrid>
        <div className={classes.dropdownFooter}>
          <Group position="apart">
            <div>
              <Text fw={500} fz="sm">
                Inizia da qui
              </Text>
              <Text size="xs" color="dimmed">
                Accedi con il tuo account per iniziare a lavorare con PayPatrol
              </Text>
            </div>
            <Button variant="default">Iscriviti</Button>
          </Group>
        </div>
      </HoverCard.Dropdown>
    </HoverCard>
  ) : (
    <Link
      key={item.name}
      {
        // Check if item.path exist and write the prop
        ...(item.path ? { href: item.path } : { href: '#' })
      }
      className={classes.link}
    >
      {t(item.name)}
    </Link>
  );
}
