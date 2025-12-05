import type { FlyonUITheme, FlyonUIThemeFont } from '@/UI/Components';
import type { MaybeRefOrGetter }               from 'vue';
import { useCssVar }                           from '@vueuse/core';
import { useHead }                             from 'unhead';
import { createHead }                          from 'unhead/client';
// todo: replace wih injectHead when i will be able to find how to import it
import { getActiveHead } from 'unhead/legacy';
import { toValue }       from 'vue';

export function useFlyonUIThemeFont(
    selectedTheme: MaybeRefOrGetter<FlyonUITheme>,
    fontFamilyVar: MaybeRefOrGetter<`--${string}`>,
): void {
    const fonts: Record<FlyonUITheme, FlyonUIThemeFont> = {
        claude: {
            url:    'https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap',
            family: 'Geist',
        },
        corporate: {
            url:    'https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap',
            family: 'Public Sans',
        },
        ghibli: {
            url:    'https://fonts.googleapis.com/css2?family=Amaranth:ital,wght@0,400;0,700;1,400;1,700&display=swap',
            family: 'Amaranth',
        },
        gourmet: {
            url:    'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap',
            family: 'Rubik',
        },
        luxury: {
            url:    'https://fonts.googleapis.com/css?family=Archivo:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap',
            family: 'Archivo',
        },
        pastel: {
            url:    'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap',
            family: 'Open Sans',
        },
        slack: {
            url:    'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap',
            family: 'Lato',
        },
        soft: {
            url:    'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap',
            family: 'Montserrat',
        },
        spotify: {
            url:    'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap',
            family: 'Lato',
        },
        valorant: {
            url:    'https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap',
            family: 'Work Sans',
        },
        vscode: {
            url:    'https://fonts.googleapis.com/css?family=Fira+Code:wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap',
            family: 'Fira Code',
        },
    };

    const font = fonts[toValue(selectedTheme)];

    const fontFamily = useCssVar(toValue(fontFamilyVar));

    if (font === undefined) {
        fontFamily.value = undefined;

        return;
    }

    const head = useHead(getActiveHead() ?? createHead());

    head.patch({
        link: [{ href: font.url, rel: 'stylesheet' }],
    });

    fontFamily.value = font.family;
}
