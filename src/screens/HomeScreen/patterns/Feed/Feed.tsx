import React from 'react';
import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Icon from "@src/components/Icon/Icon";
import Image from "@src/components/Image/Image";
import Link from "@src/components/Link/Link";
import Button from "@src/components/Button/Button";
import { useTheme } from "@src/theme/ThemeProvider";
interface FeedProps {
  children: React.ReactNode;
}

export default function Feed({ children }: FeedProps) {
  const theme = useTheme();

  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        marginTop: { xs: '-100px', md: '-100px', lg: '-100px' },
        width: '100%',
        maxWidth: { xs: '683px', lg: '683px' },
        borderRadius: '8px',
        paddingVertical: { xs: '40px', lg: '60px' },
        paddingHorizontal: { xs: '32px', lg: '48px' },
      }}
    >
      {children}
    </Box>
  );
}

Feed.Header = () => {
  const theme = useTheme();

  return (
    <Box
      styleSheet={{
        borderBottom: `7px solid ${theme.colors.primary.x200}`,
        paddingBottom: '24px',
        marginBottom: '24px',
      }}
    >
      <Box
        styleSheet={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '16px',
        }}
      >
        <Image
          styleSheet={{
            width: { xs: '100px', md: '128px', lg: '138px' },
            height: { xs: '100px', md: '128px', lg: '138px' },
            borderRadius: '100%',
          }}
          src="https://github.com/guilhermesegattoo.png"
          alt="Imagem de perfil do Guilherme Segatto"
        />

        <Box styleSheet={{ justifyContent: 'space-between' }}>
          <Box styleSheet={{ flex: 1, justifyContent: 'space-between', display: { xs: 'none', md: 'flex', lg: 'flex' } }}>
            <Button fullWidth colorVariant="primary" size="xl" href="/">Newsletter</Button>
            <Button fullWidth colorVariant="accent" size="xl" href="/">Buy me a coffee</Button>
          </Box>
          <Box styleSheet={{ flex: 1, justifyContent: 'space-between', display: { xs: 'flex', md: 'none', lg: 'none' } }}>
            <Button fullWidth colorVariant="primary" size="xs" href="/">Newsletter</Button>
            <Button fullWidth colorVariant="neutral" size="xs" href="/">Buy me a coffee</Button>
          </Box>
        </Box>
      </Box>
      <Text tag="h1" variant="heading2">
        Guilherme Segatto
      </Text>
      <Box
      styleSheet={{
        flexDirection: 'row',
        gap: '3px',
      }}
      >
      <Link href='https://www.linkedin.com/in/guilhermesegatto'>
      <Icon name="linkedin"/>
      </Link>

      <Link href='https://www.instagram.com/segattooow/'>
      <Icon name="instagram"/>
      </Link>

      <Link href='https://github.com/GuilhermeSegattoo'>
      <Icon name="github"/>
      </Link>
      </Box>
    </Box>
  );
}

Feed.Posts = () => {
  return (
    <Box>
      <Text>
        Feed Posts
      </Text>
    </Box>
  );
}