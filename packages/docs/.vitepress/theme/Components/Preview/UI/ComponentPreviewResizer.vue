<template>
    <FoButtonGroup v-if="sizes.tablet !== undefined">
        <FoButton v-for="({ icon }, device) in sizes"
                  :key="device"
                  :title="device"
                  :color="device === currentDevice ? 'primary' : 'neutral'"
                  preset="gradient"
                  :icon="icon"
                  @click.prevent="updateSize(device)"
        />
    </FoButtonGroup>
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
import { FoButton, FoButtonGroup }             from 'flyonui-vue';
import { computed, onMounted, ref, watch }     from 'vue';

const sizeClass = defineModel<string>('sizeClass', { required: true });

type Device = 'desktop' | 'laptop' | 'tablet' | 'phone';

interface DeviceData {
    size: string;
    icon: string;
}

const currentDevice = ref<Device>('desktop');
const { greater }   = useBreakpoints(breakpointsTailwind);

const sizes = computed((): Record<Device, DeviceData> => {
    const devices: Record<Device, DeviceData> = {} as Record<Device, DeviceData>;
    let last: DeviceData | null               = null;

    // There is no xs in the breakpoints, so I use sm as the smallest one
    if (greater('sm').value) {
        last = devices.phone = { size: 'w-xs', icon: 'tabler:device-mobile' };
    }

    if (greater('xl').value) {
        last = devices.tablet = { size: 'w-xl', icon: 'tabler:device-tablet' };
    }

    if (greater('2xl').value) {
        last = devices.laptop = { size: 'w-3xl', icon: 'tabler:device-laptop' };
        last = devices.desktop = { size: 'w-full', icon: 'tabler:device-desktop' };
    }

    // The last should always be the one matching the active breakpoint, so we use w-full
    if (last !== null) {
        last.size = 'w-full';
    }

    return devices;
});

const currentSizeClass = computed((): string => sizes.value[currentDevice.value]?.size ?? '');
const lastDevice       = computed((): Device => (Object.keys(sizes.value).at(-1) ?? 'desktop') as Device);

onMounted((): void => updateSize(lastDevice.value));

watch(
    sizes,
    (): void => updateSize(lastDevice.value),
    { deep: true },
);

function updateSize(device: Device): void {
    currentDevice.value = device;
    sizeClass.value = currentSizeClass.value;
}
</script>
