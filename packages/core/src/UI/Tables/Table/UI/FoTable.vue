<template>
    <div :id="id"
         class="w-full"
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

            <!--            todo: this might be a mistake -->
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
import type { ComponentName }          from '@/Lib';
import type { WithDefaultSlot }        from '@/Types';
import type { TableProps, TableSlots } from '@/UI/Tables';
import type { Slot }                   from 'vue';
import { useFlyonUIVueAppConfig }      from '@/Lib';
import { useBorder }                   from '@/Lib/UseBorder/Internal';
import { useClass }                    from '@/Lib/UseClass/Internal';
import { useResponsitivity }           from '@/Lib/UseResponsitivity/Internal';
import { useSize }                     from '@/Lib/UseSize/Internal';
import { FoTableHead }                 from '@/UI/Tables';
import { computed }                    from 'vue';

const props = withDefaults(defineProps<TableProps>(), {
    isBordered: undefined,
    isPinned:   undefined,
});

defineSlots<WithDefaultSlot & TableSlots & {
    /** The table's <caption /> */
    caption?: Slot;
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
