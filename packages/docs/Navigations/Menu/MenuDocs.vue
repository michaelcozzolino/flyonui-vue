<template>
    <CodeSnippet v-if="section === 'default'"
                 id="default"
                 :code="DefaultMenuRaw"
                 :component="DefaultMenu"
    />

    <CodeSnippet v-else-if="section === 'icon'"
                 id="icon"
                 :code="IconMenuRaw"
                 :component="IconMenu"
    />

    <CodeSnippet v-else-if="section === 'only-icon'"
                 id="only-icon"
                 :code="OnlyIconMenuRaw"
                 :component="OnlyIconMenu"
    />

    <CodeSnippet v-else-if="section === 'orientation'"
                 id="orientation"
                 :code="MenuOrientationRaw"
                 :component="MenuOrientation"
    />

    <CodeSnippet v-else-if="section === 'with-tooltip'"
                 id="with-tooltip"
                 :code="MenuWithTooltipRaw"
                 :component="MenuWithTooltip"
    />

    <CodeSnippet v-else-if="section === 'with-disabled-item'"
                 id="with-disabled-item"
                 :code="DisabledMenuItemRaw"
                 :component="DisabledMenuItem"
    />

    <CodeSnippet v-else-if="section === 'with-badge'"
                 id="with-badge"
                 :code="MenuWithBadgeRaw"
                 :component="MenuWithBadge"
    />

    <CodeSnippet v-else-if="section === 'size'"
                 id="size"
                 :code="MenuSizeRaw"
                 :component="MenuSize"
    />

    <CodeSnippet v-else-if="section === 'flushed'"
                 id="flushed"
                 :code="FlushedMenuRaw"
                 :component="FlushedMenu"
    />

    <CodeSnippet v-else-if="section === 'with-title'"
                 id="with-title"
                 :code="MenuWithTitleRaw"
                 :component="MenuWithTitle"
    />

    <CodeSnippet v-else-if="section === 'with-title-as-parent'"
                 id="with-title-as-parent"
                 :code="MenuWithTitleAsParentRaw"
                 :component="MenuWithTitleAsParent"
    />

    <CodeSnippet v-else-if="section === 'with-submenu'"
                 id="with-submenu"
                 :code="[
                     {
                         title: 'Item.ts',
                         code: ItemRaw,
                     },
                     {
                         title: 'MenuWithSubmenu.vue',
                         code: MenuWithSubmenuRaw,
                     },
                     {
                         title: 'MenuWithSubmenuNode.vue',
                         code: MenuWithSubmenuNodeRaw,
                     },
                 ]"
                 :component="MenuWithSubmenu"
    />

    <CodeSnippet v-else-if="section === 'with-horizontal-submenu'"
                 id="with-horizontal-submenu"
                 :code="[
                     {
                         title: 'Item.ts',
                         code: ItemRaw,
                     },
                     {
                         title: 'MenuWithHorizontalSubmenu.vue',
                         code: MenuWithHorizontalSubmenuRaw,
                     },
                     {
                         title: 'MenuWithSubmenuNode.vue',
                         code: MenuWithSubmenuNodeRaw,
                     },
                 ]"
                 :component="MenuWithHorizontalSubmenu"
    />

    <CodeSnippet v-else-if="section === 'mega-with-submenu'"
                 id="mega-with-submenu"
                 :code="[
                     {
                         title: 'Item.ts',
                         code: ItemRaw,
                     },
                     {
                         title: 'MegaMenuWithSubmenu.vue',
                         code: MegaMenuWithSubmenuRaw,
                     },
                     {
                         title: 'MenuWithSubmenuNode.vue',
                         code: MenuWithSubmenuNodeRaw,
                     },
                 ]"
                 :component="MegaMenuWithSubmenu"
    />
</template>

<script setup lang="ts">
import CodeSnippet                  from '@/.vitepress/theme/Components/CodeSnippet/UI/CodeSnippet.vue';
import DefaultMenu                  from '@/Navigations/Menu/DefaultMenu.vue';
import DefaultMenuRaw               from '@/Navigations/Menu/DefaultMenu.vue?raw';
import DisabledMenuItem             from '@/Navigations/Menu/DisabledMenuItem.vue';
import DisabledMenuItemRaw          from '@/Navigations/Menu/DisabledMenuItem.vue?raw';
import FlushedMenu                  from '@/Navigations/Menu/FlushedMenu.vue';
import FlushedMenuRaw               from '@/Navigations/Menu/FlushedMenu.vue?raw';
import IconMenu                     from '@/Navigations/Menu/IconMenu.vue';
import IconMenuRaw                  from '@/Navigations/Menu/IconMenu.vue?raw';
import MenuOrientation              from '@/Navigations/Menu/MenuOrientation.vue';
import MenuOrientationRaw           from '@/Navigations/Menu/MenuOrientation.vue?raw';
import MenuSize                     from '@/Navigations/Menu/MenuSize.vue';
import MenuSizeRaw                  from '@/Navigations/Menu/MenuSize.vue?raw';
import MenuWithBadge                from '@/Navigations/Menu/MenuWithBadge.vue';
import MenuWithBadgeRaw             from '@/Navigations/Menu/MenuWithBadge.vue?raw';
import MenuWithTitle                from '@/Navigations/Menu/MenuWithTitle.vue';
import MenuWithTitleRaw             from '@/Navigations/Menu/MenuWithTitle.vue?raw';
import MenuWithTitleAsParent        from '@/Navigations/Menu/MenuWithTitleAsParent.vue';
import MenuWithTitleAsParentRaw     from '@/Navigations/Menu/MenuWithTitleAsParent.vue?raw';
import MenuWithTooltip              from '@/Navigations/Menu/MenuWithTooltip.vue';
import MenuWithTooltipRaw           from '@/Navigations/Menu/MenuWithTooltip.vue?raw';
import OnlyIconMenu                 from '@/Navigations/Menu/OnlyIconMenu.vue';
import OnlyIconMenuRaw              from '@/Navigations/Menu/OnlyIconMenu.vue?raw';
import MegaMenuWithSubmenu          from '@/Navigations/Menu/WithSubmenu/MegaMenuWithSubmenu.vue';
import MegaMenuWithSubmenuRaw       from '@/Navigations/Menu/WithSubmenu/MegaMenuWithSubmenu.vue?raw';
import MenuWithHorizontalSubmenu    from '@/Navigations/Menu/WithSubmenu/MenuWithHorizontalSubmenu.vue';
import MenuWithHorizontalSubmenuRaw from '@/Navigations/Menu/WithSubmenu/MenuWithHorizontalSubmenu.vue?raw';
import MenuWithSubmenu              from '@/Navigations/Menu/WithSubmenu/MenuWithSubmenu.vue';
import MenuWithSubmenuRaw           from '@/Navigations/Menu/WithSubmenu/MenuWithSubmenu.vue?raw';
import MenuWithSubmenuNodeRaw       from '@/Navigations/Menu/WithSubmenu/MenuWithSubmenuNode.vue?raw';
import ItemRaw                      from '@/Navigations/Menu/WithSubmenu/Types/Item?raw';

interface Props {
    section: 'default'
        | 'icon'
        | 'only-icon'
        | 'orientation'
        | 'with-tooltip'
        | 'with-disabled-item'
        | 'with-badge'
        | 'size'
        | 'flushed'
        | 'with-title'
        | 'with-title-as-parent'
        | 'with-submenu'
        | 'with-horizontal-submenu'
        | 'mega-with-submenu';
}

defineProps<Props>();
</script>
