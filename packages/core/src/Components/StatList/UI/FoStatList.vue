<template>
    <div v-if="stats.length"
         class="stats"
         :class="[
             useOrientation('stat-list', () => props.orientation).value,
             useBorder('stat-list', () => props.isBordered).value,
         ]"
    >
        <FoStatListItem v-for="stat in stats"
                        :key="stat.id"
                        :stat="stat"
        >
            <template v-if="$slots[useTemplateIdentifier('image', stat.id).value]"
                      #image
            >
                <slot :name="useTemplateIdentifier('image', stat.id).value" />
            </template>
        </FoStatListItem>
    </div>
</template>

<script setup lang="ts">
import type { Stat }             from '@/Components/StatList/Types/StatList';
import type { Orientation }      from '@/Shared/Types/Variants';
import { FoStatListItem }        from '@/Components/StatList';
import { useTemplateIdentifier } from '@/Components/StatList/Lib/UseTemplateIdentifier';
import { useBorder }             from '@/Shared/Lib/UseClass';
import { useOrientation }        from '@/Shared/Lib/UseElementClass';

interface Props {
    stats:        Stat[];
    orientation?: Orientation;
    isBordered?:  boolean;
}

const props = withDefaults(defineProps<Props>(), {
    orientation: 'horizontal',
    isBordered:  false,
});
</script>
