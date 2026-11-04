<template>
    <FoInputText v-model="password"
                 v-bind="inputTextProps"
    >
        <div v-if="strength !== null"
             class="mt-2 flex max-w-sm gap-0.5 overflow-hidden rounded-full"
             role="meter"
             aria-label="Password strength"
             :aria-valuemin="0"
             :aria-valuemax="totalLevels"
             :aria-valuenow="strength.level"
             :aria-valuetext="strength.text ?? undefined"
        >
            <span v-for="segment in totalLevels"
                  :key="segment"
                  class="h-1.5 flex-auto"
                  :class="segment > strength.level
                      ? 'bg-neutral/20'
                      : strength.level === totalLevels
                          ? 'bg-teal-500'
                          : 'bg-primary'"
                  aria-hidden="true"
            />
        </div>

        <p v-if="strength !== null && strength.text !== null"
           class="text-base-content mt-2 text-sm font-semibold"
           role="status"
        >
            {{ strength.text }}
        </p>

        <ul v-if="visibleRules.length"
            class="text-base-content/80 mt-3 max-w-sm space-y-1 text-sm"
        >
            <li v-for="(rule, index) in visibleRules"
                :key="index"
                class="flex items-center gap-x-2"
                :class="rule.isValid && 'text-success'"
            >
                <FoIcon :icon="rule.isValid ? 'tabler:circle-check' : 'tabler:circle-x'"
                        size="small"
                        class="shrink-0"
                        aria-hidden="true"
                />

                <span class="sr-only">
                    {{ rule.isValid ? 'Satisfied:' : 'Not satisfied:' }}
                </span>

                {{ rule.description }}
            </li>
        </ul>
    </FoInputText>
</template>

<script setup lang="ts">
import type { InputPasswordProps, StrongPasswordRule } from '@/UI/AdvancedForms/InputPassword/Types';
import type { InputTextProps }                         from '@/UI/Forms';
import { useArrayMap, whenever }                       from '@vueuse/core';
import { computed, provide }                           from 'vue';
import { FoIcon }                                      from '@/UI/Customization/Icon';
import { FoInputText  }                                from '@/UI/Forms';
import { isPasswordInjectionKey }                      from '@/UI/Forms/InputText/Internal';

const props = withDefaults(defineProps<InputPasswordProps>(), {
    isValid: undefined,
});

const password = defineModel<string>({ required: true });

// todo: must be documented as v-model
const isHidden = defineModel<boolean>('isHidden', { required: false, default: true });

provide(isPasswordInjectionKey, {
    isHidden,
    toggle: (): boolean => isHidden.value = !isHidden.value,
});

const inputTextProps = computed((): InputTextProps => {
    const { icon, isStrong, ...inputProps } = props;

    return {
        ...inputProps,
        icon: props.icon === undefined
            ? undefined
            : { right: (isHidden.value ? props.icon.off : props.icon.on) },
    };
});

interface InputPasswordStrength {
    level: number;
    text:  string | null;
}

interface ValidatedStrongPasswordRule {
    description: string | null;
    isValid:     boolean;
}

const validatedRules = useArrayMap(
    (): StrongPasswordRule[] => props.isStrong?.rules.rules ?? [],
    (rule: StrongPasswordRule): ValidatedStrongPasswordRule => ({
        description: rule.description ?? null,
        isValid:     password.value !== '' && rule.validate(password.value),
    }),
);

const visibleRules = computed((): ValidatedStrongPasswordRule[] => {
    if (props.isStrong?.rules.show !== true) {
        return [];
    }

    return validatedRules.value.filter(
        (rule: ValidatedStrongPasswordRule): boolean => rule.description !== null && rule.description.trim() !== '',
    );
});

const totalLevels = computed((): number => {
    if (props.isStrong === undefined) {
        return 0;
    }

    return typeof props.isStrong.levels === 'number' ? props.isStrong.levels : props.isStrong.levels.length;
});

const strength = computed((): InputPasswordStrength | null => {
    if (props.isStrong === undefined) {
        return null;
    }

    const passedRules: number = validatedRules.value.filter((rule: ValidatedStrongPasswordRule): boolean => rule.isValid).length;

    // Rounding down reserves the final segment for passwords that pass every rule.
    const level: number = Math.floor(passedRules * totalLevels.value / props.isStrong.rules.rules.length);

    return {
        level,
        text: typeof props.isStrong.levels === 'number' ? null : props.isStrong.levels[level - 1] ?? null,
    };
});

whenever(
    (): boolean => props.isStrong !== undefined,
    (): void => {
        if (totalLevels.value === 0) {
            throw new Error('Unable to create a strong password without any levels.');
        }

        if ((props.isStrong?.rules.rules ?? []).length === 0) {
            throw new Error('Unable to create a strong password without any rules.');
        }
    },
);
</script>
