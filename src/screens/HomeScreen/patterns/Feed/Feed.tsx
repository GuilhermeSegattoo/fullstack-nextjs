import React from 'react';
import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Icon from "@src/components/Icon/Icon";
import Image from "@src/components/Image/Image";
import Link from "@src/components/Link/Link";
import Button from "@src/components/Button/Button";
import { useTheme } from "@src/theme/ThemeProvider";
import { useTemplateConfig } from "@src/services/template/TemplateConfigContext";
import type { Post } from '@src/services/posts/PostsService';
import { FeedPost } from './patterns/FeedPost';

interface FeedProps {
  children: React.ReactNode;
}
export default function Feed({ children }) {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        marginTop: '-228px',
        width: '100%',
        maxWidth: '683px',
        borderRadius: '8px',
        paddingVertical: '40px',
        paddingHorizontal: '32px',
      }}
    >
      {children}
    </Box>
  )
}

Feed.Header = () => {
  const theme = useTheme();
  const templateConfig = useTemplateConfig();
  // console.log(templateConfig);

  return (
    <Box
      styleSheet={{
        borderBottom: `1px solid ${theme.colors.neutral.x200}`,
        paddingBottom: '24px',
        marginBottom: '24px',
      }}
    >
      <Box
        styleSheet={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '16px'
        }}
      >
        <Image
          styleSheet={{
            width: { xs: '100px', md: '128px' },
            height: { xs: '100px', md: '128px' },
            borderRadius: '100%',
          }}
          src={templateConfig?.personal?.avatar}
          alt="Imagem de Guilherme Segatto"
        />

        <Box
          styleSheet={{
            justifyContent: 'space-between',
          }}
        >
          <Box styleSheet={{ flex: 1, justifyContent: 'space-between', display: { xs: 'none', md: 'flex' } }}>
            <Link href={'/sobre'}><Button fullWidth colorVariant="primary" size="xl" href="/sobre">Sobre mim</Button></Link>
            <Button fullWidth colorVariant="neutral" size="xl" href="/">Projetos</Button>
          </Box>
          <Box styleSheet={{ flex: 1, justifyContent: 'space-between', display: { xs: 'flex', md: 'none' } }}>
            <Button fullWidth colorVariant="primary" size="xs" href="/">Sobre mim</Button>
            <Button fullWidth colorVariant="neutral" size="xs" href="/">Projetos</Button>
          </Box>
        </Box>
      </Box>
      <Text tag="h1" variant="heading4">
        {templateConfig?.personal?.name}
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
  )
}

interface FeedPostsProps {
  posts: Post[];
}

Feed.Posts = ({ posts }: FeedPostsProps) => {
  return (
    <Box>
      <Text variant="heading2" styleSheet={{ marginBottom: "27px" }}>
        Últimas Atualizações
      </Text>
      {posts.map(({ slug, title, metadata, image }) => {
        const { date, excerpt, url, tags } = metadata;
        return (
          <FeedPost
            key={slug}
            title={title}
            date={date}
            excerpt={excerpt}
            tags={tags}
            url={url}
            image={image}
          />
        )
      })}
    </Box>
  )
}
