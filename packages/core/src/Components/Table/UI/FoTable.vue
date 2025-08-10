<template>
    <div class="w-full"
         :class="[isBordered && borderClass, responsiveClass]"
    >
        <table class="table"
               :class="[
                   isBordered === false && borderClass,
                   stripesClass,
                   sizeClass,
                   isPinned !== undefined && 'table-pin-rows',
                   isPinned === 'columns' && 'table-pin-columns',
               ]"
        >
            <caption v-if="$slots.caption"
                     class="text-base-content p-5 text-left text-lg font-semibold rtl:text-right"
            >
                <slot name="caption" />
            </caption>

            <FoTableHead v-if="$slots.head">
                <slot name="head" />
            </FoTableHead>

            <slot v-if="$slots.default" />

            <tbody v-if="$slots.body">
                <slot name="body" />
            </tbody>

            <tfoot v-if="$slots.footer">
                <slot name="footer" />
            </tfoot>
        </table>
    </div>
</template>

<script setup lang="ts">
import type { TableProps }        from '@/Components/Table';
import type { ComponentName }     from '@/Shared';
import type { WithDefaultSlot }   from '@/Shared/Utils/Types/Slots.ts';
import type { Slot }              from 'vue';
import { FoTableHead }            from '@/Components';
import { useFlyonUIVueAppConfig } from '@/Shared';
import { useBorder }              from '@/Shared/UseBorder/Internal';
import { useClass }               from '@/Shared/UseClass/Internal';
import { useResponsitivity }      from '@/Shared/UseResponsitivity/Internal';
import { useSize }                from '@/Shared/UseSize/Internal';
import { computed }               from 'vue';

const props = withDefaults(defineProps<TableProps>(), {
    isBordered: undefined,
    isPinned:   undefined,
});

defineSlots<WithDefaultSlot & {
    /** The table's <caption /> */
    caption?: Slot;

    /** The table's <thead /> */
    head?: Slot;

    /** The table's <tbody /> */
    body?: Slot;

    /** The table's <tfoot /> */
    footer?: Slot;
}>();

const componentName: ComponentName = 'FoTable';

const { config } = useFlyonUIVueAppConfig();

const [
    borderClass,
    responsiveClass,
    stripesClass,
    sizeClass,
] = [
    useBorder(componentName, () => props.isBordered),
    useResponsitivity(componentName, () => props.isResponsive),
    computed((): string => {
        if (props.isStriped === undefined) {
            return '';
        }

        return useClass(props.isStriped === 'rows', 'table-striped', 'table-striped-columns').value;
    }),
    useSize(config, componentName, () => props.size),
];
</script>
