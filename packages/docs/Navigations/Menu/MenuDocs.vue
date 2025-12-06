<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   :api-docs-component-names="['FoMenu', 'FoMenuItem']"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview }   from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import type { ApiType }                from '@/Api/Types/Api.ts';
import ComponentDocs                   from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import ActiveItemMenuExternalRouter    from '@/Navigations/Menu/ActiveItemMenuExternalRouter.vue';
import ActiveItemMenuExternalRouterRaw from '@/Navigations/Menu/ActiveItemMenuExternalRouter.vue?raw';
import ActiveItemMenuVueRouterRaw      from '@/Navigations/Menu/ActiveItemMenuVueRouter.vue?raw';
import DefaultMenu                     from '@/Navigations/Menu/DefaultMenu.vue';
import DefaultMenuRaw                  from '@/Navigations/Menu/DefaultMenu.vue?raw';
import DisabledItemMenu                from '@/Navigations/Menu/DisabledItemMenu.vue';
import DisabledItemMenuRaw             from '@/Navigations/Menu/DisabledItemMenu.vue?raw';
import FlushedMenu                     from '@/Navigations/Menu/FlushedMenu.vue';
import FlushedMenuRaw                  from '@/Navigations/Menu/FlushedMenu.vue?raw';
import IconMenu                        from '@/Navigations/Menu/IconMenu.vue';
import IconMenuRaw                     from '@/Navigations/Menu/IconMenu.vue?raw';
import MenuOrientation                 from '@/Navigations/Menu/MenuOrientation.vue';
import MenuOrientationRaw              from '@/Navigations/Menu/MenuOrientation.vue?raw';
import MenuSize                        from '@/Navigations/Menu/MenuSize.vue';
import MenuSizeRaw                     from '@/Navigations/Menu/MenuSize.vue?raw';
import MenuWithBadge                   from '@/Navigations/Menu/MenuWithBadge.vue';
import MenuWithBadgeRaw                from '@/Navigations/Menu/MenuWithBadge.vue?raw';
import MenuWithTitle                   from '@/Navigations/Menu/MenuWithTitle.vue';
import MenuWithTitleRaw                from '@/Navigations/Menu/MenuWithTitle.vue?raw';
import MenuWithTitleAsParent           from '@/Navigations/Menu/MenuWithTitleAsParent.vue';
import MenuWithTitleAsParentRaw        from '@/Navigations/Menu/MenuWithTitleAsParent.vue?raw';
import MenuWithTooltip                 from '@/Navigations/Menu/MenuWithTooltip.vue';
import MenuWithTooltipRaw              from '@/Navigations/Menu/MenuWithTooltip.vue?raw';
import OnlyIconMenu                    from '@/Navigations/Menu/OnlyIconMenu.vue';
import OnlyIconMenuRaw                 from '@/Navigations/Menu/OnlyIconMenu.vue?raw';
import MegaMenuWithSubmenu             from '@/Navigations/Menu/WithSubmenu/MegaMenuWithSubmenu.vue';
import MegaMenuWithSubmenuRaw          from '@/Navigations/Menu/WithSubmenu/MegaMenuWithSubmenu.vue?raw';
import MenuWithHorizontalSubmenu       from '@/Navigations/Menu/WithSubmenu/MenuWithHorizontalSubmenu.vue';
import MenuWithHorizontalSubmenuRaw    from '@/Navigations/Menu/WithSubmenu/MenuWithHorizontalSubmenu.vue?raw';
import MenuWithSubmenu                 from '@/Navigations/Menu/WithSubmenu/MenuWithSubmenu.vue';
import MenuWithSubmenuRaw              from '@/Navigations/Menu/WithSubmenu/MenuWithSubmenu.vue?raw';
import MenuWithSubmenuNodeRaw          from '@/Navigations/Menu/WithSubmenu/MenuWithSubmenuNode.vue?raw';
import ItemRaw                         from '@/Navigations/Menu/WithSubmenu/Types/Item?raw';
import { computed }                    from 'vue';

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
    return new Map<Section, ComponentDocsPreview>([
        [
            'default',
            {
                code:      DefaultMenuRaw,
                component: DefaultMenu,
            },
        ],
        [
            'icon',
            {
                code:      IconMenuRaw,
                component: IconMenu,
            },
        ],
        [
            'only-icon',
            {
                code:      OnlyIconMenuRaw,
                component: OnlyIconMenu,
            },
        ],
        [
            'orientation',
            {
                code:      MenuOrientationRaw,
                component: MenuOrientation,
            },
        ],
        [
            'with-tooltip',
            {
                code:      MenuWithTooltipRaw,
                component: MenuWithTooltip,
            },
        ],
        [
            'with-disabled-item',
            {
                code:      DisabledItemMenuRaw,
                component: DisabledItemMenu,
            },
        ],
        [
            'with-badge',
            {
                code:      MenuWithBadgeRaw,
                component: MenuWithBadge,
            },
        ],
        [
            'with-active-item-vue-router',
            {
                code:      ActiveItemMenuVueRouterRaw,
                component: ActiveItemMenuExternalRouter,
            },
        ],
        [
            'with-active-item-external-router',
            {
                code:      ActiveItemMenuExternalRouterRaw,
                component: ActiveItemMenuExternalRouter,
            },
        ],
        [
            'size',
            {
                code:      MenuSizeRaw,
                component: MenuSize,
            },
        ],
        [
            'flushed',
            {
                code:      FlushedMenuRaw,
                component: FlushedMenu,
            },
        ],
        [
            'with-title',
            {
                code:      MenuWithTitleRaw,
                component: MenuWithTitle,
            },
        ],
        [
            'with-title-as-parent',
            {
                code:      MenuWithTitleAsParentRaw,
                component: MenuWithTitleAsParent,
            },
        ],
        [
            'with-submenu',
            {
                code: [
                    {
                        title: 'Item.ts',
                        code:  ItemRaw,
                    },
                    {
                        title: 'MenuWithSubmenu.vue',
                        code:  MenuWithSubmenuRaw,
                    },
                    {
                        title: 'MenuWithSubmenuNode.vue',
                        code:  MenuWithSubmenuNodeRaw,
                    },
                ],
                component: MenuWithSubmenu,
            },
        ],
        [
            'with-horizontal-submenu',
            {
                code: [
                    {
                        title: 'Item.ts',
                        code:  ItemRaw,
                    },
                    {
                        title: 'MenuWithHorizontalSubmenu.vue',
                        code:  MenuWithHorizontalSubmenuRaw,
                    },
                    {
                        title: 'MenuWithSubmenuNode.vue',
                        code:  MenuWithSubmenuNodeRaw,
                    },
                ],
                component: MenuWithHorizontalSubmenu,
            },
        ],
        [
            'mega-with-submenu',
            {
                code: [
                    {
                        title: 'Item.ts',
                        code:  ItemRaw,
                    },
                    {
                        title: 'MegaMenuWithSubmenu.vue',
                        code:  MegaMenuWithSubmenuRaw,
                    },
                    {
                        title: 'MenuWithSubmenuNode.vue',
                        code:  MenuWithSubmenuNodeRaw,
                    },
                ],
                component: MegaMenuWithSubmenu,
            },
        ],
    ]);
});
</script>
