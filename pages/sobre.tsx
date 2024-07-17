import Box from "@src/components/Box/Box";
import Menu from "@src/screens/HomeScreen/patterns/Menu/Menu";
import Link from "@src/components/Link/Link";
import Background from "@src/screens/HomeScreen/patterns/Background/Background";
import { useTheme } from "@src/theme/ThemeProvider";
import { useTemplateConfig } from "@src/services/template/TemplateConfigContext";
import React from "react";
import Button from "@src/components/Button/Button";
import Icon from "@src/components/Icon/Icon";
import Text from "@src/components/Text/Text";
import Image from "@src/components/Image/Image";
import Feed from "@src/screens/HomeScreen/patterns/Feed/Feed";

interface AboutScreenProps {
  children: React.ReactNode
}

export default function AboutScreen({AboutScreenProps}) {
  const theme = useTheme();
  const templateConfig = useTemplateConfig();
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
      <Link href="/">
      <Menu></Menu>
      </Link>
      <Box styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        marginTop: '-228px',
        width: '100%',
        maxWidth: '683px',
        borderRadius: '8px',
        paddingVertical: '40px',
        paddingHorizontal: '32px',
      }}>
        
      </Box>
      
      </Box>
    </div>
  )
}
