import { use, useEffect, useState } from 'react';
import {
  createStyles,
  UnstyledButton,
  Menu,
  Image,
  Group,
} from '@mantine/core';
import { ChevronDown } from 'tabler-icons-react';
import { useTranslation } from 'next-i18next';
import images from './images';
import { useRouter } from 'next/router';
import { useLanguage } from '@/hooks/useLanguage';

const data = [
  { label: 'En', image: images.english, locale: 'en' },
  { label: 'De', image: images.german, locale: 'de' },
  { label: 'It', image: images.italian, locale: 'it' },
  { label: 'Fr', image: images.french, locale: 'fr' },
];

const useStyles = createStyles((theme, { opened }: { opened: boolean }) => ({
  control: {
    height: 36,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    transition: 'background-color 150ms ease',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[opened ? 5 : 6]
        : opened
        ? theme.colors.gray[0]
        : theme.white,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  label: {
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
  },

  icon: {
    transition: 'transform 150ms ease',
    transform: opened ? 'rotate(180deg)' : 'rotate(0deg)',
  },
}));

export function LanguagePicker() {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles({ opened });
  const [selected, setSelected] = useState(data[0]);
  const router = useRouter();
  const { i18n } = useTranslation();

  const { changeLanguage, currentLanguage } = useLanguage();

  const items = data.map(item => (
    <Menu.Item
      icon={<Image alt={item.image} src={item.image} width={18} height={18} />}
      onClick={() => {
        setSelected(item);
        i18n.changeLanguage(item.locale);
        changeLanguage(item.locale);
        // modify the url to reflect the selected language
        router.push(router.pathname, router.asPath, { locale: item.locale });
      }}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));

  useEffect(() => {
    // Check if currentLanguege is set
    if (currentLanguage) {
      // If it is, set the selected language to the current language
      setSelected(
        data.find(item => item.locale === currentLanguage) || data[0],
      );
      // Change i18n language to the current language
      i18n.changeLanguage(currentLanguage);
      // modify the url to reflect the selected language
      router.push(router.pathname, router.asPath, { locale: currentLanguage });
    }
  }, [currentLanguage]);

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={classes.control}>
          <Group spacing="xs">
            <Image
              alt={selected.image}
              src={selected.image}
              width={22}
              height={22}
            />
          </Group>
          <ChevronDown size="1rem" className={classes.icon} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}
