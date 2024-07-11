import Box from "@src/components/Box/Box";
import Menu from "@src/screens/HomeScreen/patterns/Menu/Menu";
import Link from "@src/components/Link/Link";
import Background from "@src/screens/HomeScreen/patterns/Background/Background";
import { useTheme } from "@src/theme/ThemeProvider";
import React from "react";
import Button from "@src/components/Button/Button";
import Icon from "@src/components/Icon/Icon";
import Text from "@src/components/Text/Text";

interface AboutScreenProps {
  children: React.ReactNode
}

export default function AboutScreen({AboutScreenProps}) {
  const theme = useTheme();
  const baseSize = '40px';
  return (
    <div>
     <Box
      tag="main"
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        flex: 1,
        alignItems: 'center',
      }}
    >
      <Background />
      <Box
      styleSheet={{
        width: '100%',
        position: 'absolute',
        left: 0, right: 0, top: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: '16px',
        paddingHorizontal: '20px',
        color: theme.colors.neutral.x000,
      }}
    >
      <Button.Base
        styleSheet={{
          width: baseSize,
          height: baseSize,
          backgroundColor: theme.colors.primary.x500,
          borderRadius: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          hover: {
            backgroundColor: theme.colors.primary.x400,
          },
          focus: {
            backgroundColor: theme.colors.primary.x600,
          },
        }}
      >
       <Link href="/">
       <Text
       styleSheet={{
        color: theme.colors.neutral.x200,
       }}
       >
          SG
        </Text>
       </Link>
      </Button.Base>

      <Button.Base
        styleSheet={{
          width: baseSize,
          height: baseSize,
          backgroundColor: theme.colors.neutral.x500,
          borderRadius: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          hover: {
            backgroundColor: theme.colors.neutral.x400,
          },
          focus: {
            backgroundColor: theme.colors.neutral.x600,
          },
        }}
      >
        <Icon name="menu" />
      </Button.Base>
    </Box>
      </Box>
      
      <Link href="/">
        Voltar para home
      </Link>
    </div>
  )
}
