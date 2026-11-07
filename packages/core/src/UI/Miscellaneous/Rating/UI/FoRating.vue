<template>
    <div class="inline-flex items-center"
         role="group"
         aria-label="Rating"
         @pointerleave="hoveredRating = null"
    >
        <button v-for="star in stars"
                :key="star"
                type="button"
                class="inline-flex cursor-pointer disabled:cursor-default"
                :disabled="disabled"
                :aria-label="`Set rating to ${star} of ${stars.length}`"
                :aria-pressed="displayRating >= star"
                @pointermove="toggleRating(star, 'hover', $event)"
                @click="toggleRating(star, 'click', $event)"
        >
            <span class="relative inline-flex">
                <FoIcon :icon="icon"
                        class="text-base-content/25"
                        :size="size"
                />
                <!-- todo: custom icon color -->
                <span class="absolute inset-y-0 left-0 overflow-hidden text-warning"
                      :style="{ width: `${getStarFill(star)}%` }"
                >
                    <FoIcon :icon="icon"
                            class="text-warning"
                            :size="size"
                    />
                </span>
            </span>
        </button>
    </div>
</template>

<script setup lang="ts">
import type { RatingProps } from '@/UI/Miscellaneous/Rating';
import { computed, ref }    from 'vue';
import { FoIcon }           from '@/UI/Customization/Icon';

const props = withDefaults(defineProps<RatingProps>(), {
    icon:      'tabler:star-filled',
    max:       5,
    allowHalf: false,
    disabled:  false,
});

/** The total amount of selected rating icons */
const rating = defineModel<number>({ required: true });

const hoveredRating = ref<number | null>(null);

const stars = computed((): number[] => {
    return Array.from(
        { length: Math.max(0, Math.floor(props.max)) },
        (_: unknown, index: number): number => index + 1,
    );
});

const displayRating = computed((): number => hoveredRating.value ?? rating.value);

function toggleRating(star: number, action: 'hover' | 'click', event: MouseEvent): void {
    if (props.disabled) {
        return;
    }

    const ratingValue = getRatingValue(star, event);

    if (action === 'hover') {
        hoveredRating.value = ratingValue;

        return;
    }

    rating.value = ratingValue;
}

function getRatingValue(star: number, event: MouseEvent | PointerEvent): number {
    if (props.allowHalf === false || (event.type === 'click' && event.detail === 0)) {
        return star;
    }

    const target = event.currentTarget;

    if (target instanceof HTMLElement === false) {
        return star;
    }

    const halvesPerStar = 2;
    const halfStarValue = 0.5;
    const bounds        = target.getBoundingClientRect();
    const starMidpoint  = bounds.left + bounds.width / halvesPerStar;

    return event.clientX < starMidpoint ? star - halfStarValue : star;
}

function getStarFill(star: number): number {
    return Math.max(0, Math.min(1, displayRating.value - star + 1)) * 100;
}
</script>
