<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   :api-docs-component-names="['FoMenu', 'FoMenuItem']"
    />
</template>

<script setup lang="ts">
import type { FrameworkSectionPreview } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import type { ApiType }                 from '@/Api/Types/Api';
import { computed }                     from 'vue';
import ComponentDocs                    from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import ActiveItemMenuExternalRouter     from '@/Navigations/Menu/ActiveItemMenuExternalRouter.vue';
import ActiveItemMenuExternalRouterRaw  from '@/Navigations/Menu/ActiveItemMenuExternalRouter.vue?raw';
import ActiveItemMenuVueRouterRaw       from '@/Navigations/Menu/ActiveItemMenuVueRouter.vue?raw';
import DefaultMenu                      from '@/Navigations/Menu/DefaultMenu.vue';
import DefaultMenuRaw                   from '@/Navigations/Menu/DefaultMenu.vue?raw';
import DisabledItemMenu                 from '@/Navigations/Menu/DisabledItemMenu.vue';
import DisabledItemMenuRaw              from '@/Navigations/Menu/DisabledItemMenu.vue?raw';
import FlushedMenu                      from '@/Navigations/Menu/FlushedMenu.vue';
import FlushedMenuRaw                   from '@/Navigations/Menu/FlushedMenu.vue?raw';
import IconMenu                         from '@/Navigations/Menu/IconMenu.vue';
import IconMenuRaw                      from '@/Navigations/Menu/IconMenu.vue?raw';
import MenuOrientation                  from '@/Navigations/Menu/MenuOrientation.vue';
import MenuOrientationRaw               from '@/Navigations/Menu/MenuOrientation.vue?raw';
import MenuSize                         from '@/Navigations/Menu/MenuSize.vue';
import MenuSizeRaw                      from '@/Navigations/Menu/MenuSize.vue?raw';
import MenuWithBadge                    from '@/Navigations/Menu/MenuWithBadge.vue';
import MenuWithBadgeRaw                 from '@/Navigations/Menu/MenuWithBadge.vue?raw';
import MenuWithTitle                    from '@/Navigations/Menu/MenuWithTitle.vue';
import MenuWithTitleRaw                 from '@/Navigations/Menu/MenuWithTitle.vue?raw';
import MenuWithTitleAsParent            from '@/Navigations/Menu/MenuWithTitleAsParent.vue';
import MenuWithTitleAsParentRaw         from '@/Navigations/Menu/MenuWithTitleAsParent.vue?raw';
import MenuWithTooltip                  from '@/Navigations/Menu/MenuWithTooltip.vue';
import MenuWithTooltipRaw               from '@/Navigations/Menu/MenuWithTooltip.vue?raw';
import OnlyIconMenu                     from '@/Navigations/Menu/OnlyIconMenu.vue';
import OnlyIconMenuRaw                  from '@/Navigations/Menu/OnlyIconMenu.vue?raw';
import MegaMenuWithSubmenu              from '@/Navigations/Menu/WithSubmenu/MegaMenuWithSubmenu.vue';
import MegaMenuWithSubmenuRaw           from '@/Navigations/Menu/WithSubmenu/MegaMenuWithSubmenu.vue?raw';
import MenuWithHorizontalSubmenu        from '@/Navigations/Menu/WithSubmenu/MenuWithHorizontalSubmenu.vue';
import MenuWithHorizontalSubmenuRaw     from '@/Navigations/Menu/WithSubmenu/MenuWithHorizontalSubmenu.vue?raw';
import MenuWithSubmenu                  from '@/Navigations/Menu/WithSubmenu/MenuWithSubmenu.vue';
import MenuWithSubmenuRaw               from '@/Navigations/Menu/WithSubmenu/MenuWithSubmenu.vue?raw';
import MenuWithSubmenuNodeRaw           from '@/Navigations/Menu/WithSubmenu/MenuWithSubmenuNode.vue?raw';
import ItemRaw                          from '@/Navigations/Menu/WithSubmenu/Types/Item?raw';

type Section = 'default'
    | 'icon'
    | 'only-icon'
    | 'orientation'
    | 'with-tooltip'
    | 'with-disabled-item'
    | 'with-badge'
    | 'with-active-item-vue-router'
    | 'with-active-item-external-router'
    | 'size'
    | 'flushed'
    | 'with-title'
    | 'with-title-as-parent'
    | 'with-submenu'
    | 'with-horizontal-submenu'
    | 'mega-with-submenu'
    | ApiType;

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = computed(() => {
    return new Map<Section, FrameworkSectionPreview>([
        [
            'default',
            {
                vue: {
                    codePreview: DefaultMenuRaw,
                    component:   DefaultMenu,
                },
            },
        ],
        [
            'icon',
            {
                vue: {
                    codePreview: IconMenuRaw,
                    component:   IconMenu,
                },
            },
        ],
        [
            'only-icon',
            {
                vue: {
                    codePreview: OnlyIconMenuRaw,
                    component:   OnlyIconMenu,
                },
            },
        ],
        [
            'orientation',
            {
                vue: {
                    codePreview: MenuOrientationRaw,
                    component:   MenuOrientation,
                },
            },
        ],
        [
            'with-tooltip',
            {
                vue: {
                    codePreview: MenuWithTooltipRaw,
                    component:   MenuWithTooltip,
                },
            },
        ],
        [
            'with-disabled-item',
            {
                vue: {
                    codePreview: DisabledItemMenuRaw,
                    component:   DisabledItemMenu,
                },
            },
        ],
        [
            'with-badge',
            {
                vue: {
                    codePreview: MenuWithBadgeRaw,
                    component:   MenuWithBadge,
                },
            },
        ],
        [
            'with-active-item-vue-router',
            {
                vue: {
                    codePreview: ActiveItemMenuVueRouterRaw,
                    // we have to use this to show that the link is active as Vitepress does not use Vue Router
                    component:   ActiveItemMenuExternalRouter,
                },
            },
        ],
        [
            'with-active-item-external-router',
            {
                vue: {
                    codePreview: ActiveItemMenuExternalRouterRaw,
                    component:   ActiveItemMenuExternalRouter,
                },
            },
        ],
        [
            'size',
            {
                vue: {
                    codePreview: MenuSizeRaw,
                    component:   MenuSize,
                },
            },
        ],
        [
            'flushed',
            {
                vue: {
                    codePreview: FlushedMenuRaw,
                    component:   FlushedMenu,
                },
            },
        ],
        [
            'with-title',
            {
                vue: {
                    codePreview: MenuWithTitleRaw,
                    component:   MenuWithTitle,
                },
            },
        ],
        [
            'with-title-as-parent',
            {
                vue: {
                    codePreview: MenuWithTitleAsParentRaw,
                    component:   MenuWithTitleAsParent,
                },
            },
        ],
        [
            'with-submenu',
            {
                vue: {
                    component:   MenuWithSubmenu,
                    codePreview: [
                        {
                            title:    'Item.ts',
                            code:     ItemRaw,
                            language: 'js',
                        },
                        {
                            title:    'MenuWithSubmenu.vue',
                            code:     MenuWithSubmenuRaw,
                            language: 'js',
                        },
                        {
                            title:    'MenuWithSubmenuNode.vue',
                            code:     MenuWithSubmenuNodeRaw,
                            language: 'js',
                        },
                    ],
                },
            },
        ],
        [
            'with-horizontal-submenu',
            {
                vue: {
                    codePreview: [
                        {
                            title:    'Item.ts',
                            code:     ItemRaw,
                            language: 'js',
                        },
                        {
                            title:    'MenuWithHorizontalSubmenu.vue',
                            code:     MenuWithHorizontalSubmenuRaw,
                            language: 'js',
                        },
                        {
                            title:    'MenuWithSubmenuNode.vue',
                            code:     MenuWithSubmenuNodeRaw,
                            language: 'js',
                        },
                    ],
                    component: MenuWithHorizontalSubmenu,
                },
            },
        ],
        [
            'mega-with-submenu',
            {
                vue: {
                    codePreview: [
                        {
                            title:    'Item.ts',
                            code:     ItemRaw,
                            language: 'js',
                        },
                        {
                            title:    'MegaMenuWithSubmenu.vue',
                            code:     MegaMenuWithSubmenuRaw,
                            language: 'js',
                        },
                        {
                            title:    'MenuWithSubmenuNode.vue',
                            code:     MenuWithSubmenuNodeRaw,
                            language: 'js',
                        },
                    ],
                    component: MegaMenuWithSubmenu,
                },
            },
        ],
    ]);
});
</script>
