import React from 'react';
import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Icon from '@src/components/Icon/Icon';
import Image from '@src/components/Image/Image';
import Link from '@src/components/Link/Link';

interface FeedProps {
  children: React.ReactNode;
}
export default function Feed({ children }) {
  return (
    <Box>
      <Text>
        Feed Base
      </Text>
      {children}
    </Box>
  )
}

Feed.Header = () => {
  return (
    <Box
     
    >
      <Image
        styleSheet={{
          width: '128px',
          height: '128px',
          borderRadius: '100%',
        }}
        src="https://github.com/guilhermesegattoo.png"
        alt="Imagem de perfil do Guilherme Segatto"
      />
      <Link href='https://www.linkedin.com/in/guilhermesegatto'>
      <Icon name="Linkedin"/>
      </Link>

      <Link href='https://www.instagram.com/segattooow/'>
      <Icon name="Instagram"/>
      </Link>

      <Link href='https://github.com/GuilhermeSegattoo'>
      <Icon name="github"/>
      </Link>

      <Text>
        Feed Header
      </Text>
    </Box>
  )
}

Feed.Posts = () => {
  return (
    <Box>
      <Text>
        Feed Posts
      </Text>
    </Box>
  )
}
