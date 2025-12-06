<template>
    <ComponentPreview v-if="section === 'default'"
                      :data-test-screenshot="section"
                      :code="DefaultMenuRaw"
                      :component="DefaultMenu"
    />

    <ComponentPreview v-else-if="section === 'icon'"
                      :data-test-screenshot="section"
                      :code="IconMenuRaw"
                      :component="IconMenu"
    />

    <ComponentPreview v-else-if="section === 'only-icon'"
                      :data-test-screenshot="section"
                      :code="OnlyIconMenuRaw"
                      :component="OnlyIconMenu"
    />

    <ComponentPreview v-else-if="section === 'orientation'"
                      :data-test-screenshot="section"
                      :code="MenuOrientationRaw"
                      :component="MenuOrientation"
    />

    <ComponentPreview v-else-if="section === 'with-tooltip'"
                      :data-test-screenshot="section"
                      :code="MenuWithTooltipRaw"
                      :component="MenuWithTooltip"
    />

    <ComponentPreview v-else-if="section === 'with-disabled-item'"
                      :data-test-screenshot="section"
                      :code="DisabledItemMenuRaw"
                      :component="DisabledItemMenu"
    />

    <ComponentPreview v-else-if="section === 'with-badge'"
                      :data-test-screenshot="section"
                      :code="MenuWithBadgeRaw"
                      :component="MenuWithBadge"
    />

    <ComponentPreview v-else-if="section === 'with-active-item-vue-router'"
                      :data-test-screenshot="section"
                      :code="ActiveItemMenuVueRouterRaw"
                      :component="ActiveItemMenuExternalRouter"
    />

    <ComponentPreview v-else-if="section === 'with-active-item-external-router'"
                      :data-test-screenshot="section"
                      :code="ActiveItemMenuExternalRouterRaw"
                      :component="ActiveItemMenuExternalRouter"
    />

    <ComponentPreview v-else-if="section === 'size'"
                      :data-test-screenshot="section"
                      :code="MenuSizeRaw"
                      :component="MenuSize"
    />

    <ComponentPreview v-else-if="section === 'flushed'"
                      :data-test-screenshot="section"
                      :code="FlushedMenuRaw"
                      :component="FlushedMenu"
    />

    <ComponentPreview v-else-if="section === 'with-title'"
                      :data-test-screenshot="section"
                      :code="MenuWithTitleRaw"
                      :component="MenuWithTitle"
    />

    <ComponentPreview v-else-if="section === 'with-title-as-parent'"
                      :data-test-screenshot="section"
                      :code="MenuWithTitleAsParentRaw"
                      :component="MenuWithTitleAsParent"
    />

    <ComponentPreview v-else-if="section === 'with-submenu'"
                      :data-test-screenshot="section"
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

    <ComponentPreview v-else-if="section === 'with-horizontal-submenu'"
                      :data-test-screenshot="section"
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

    <ComponentPreview v-else-if="section === 'mega-with-submenu'"
                      :data-test-screenshot="section"
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

    <ComponentsApiDocs v-else
                       :section="section"
                       :component-names="['FoMenu', 'FoMenuItem']"
    />
</template>

<script setup lang="ts">
import type { ApiType }                from '@/Api/Types/Api.ts';
import ComponentPreview                from '@/.vitepress/theme/Components/Preview/UI/ComponentPreview.vue';
import ComponentsApiDocs               from '@/Api/UI/ComponentsApiDocs.vue';
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

interface Props {
    section: 'default'
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
}

defineProps<Props>();
</script>
