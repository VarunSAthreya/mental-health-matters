import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';

const theme = extendTheme({
    components: {
        Steps,
    },
    styles: {
        global: (props: any) => ({
            body: {
                bg: mode('#E9EFF2', '#0D120E')(props),
            },
        }),
    },
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },
});

export default theme;
