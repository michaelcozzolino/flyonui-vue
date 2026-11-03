<template>
    <FoInputText v-model="password"
                 v-bind="inputTextProps"
    />
</template>

<script setup lang="ts">
import type { InputPasswordProps } from '@/UI/AdvancedForms/InputPassword/Types';
import type { InputTextProps }     from '@/UI/Forms';
import { computed, provide }       from 'vue';
import { FoInputText  }            from '@/UI/Forms';
import { isPasswordInjectionKey }  from '@/UI/Forms/InputText/Internal';

const props = withDefaults(defineProps<InputPasswordProps>(), {
    isValid: undefined,
});

const password = defineModel<string>({ required: true });
const isHidden = defineModel<boolean>('isHidden', { required: false, default: true });

provide(isPasswordInjectionKey, {
    isHidden,
    toggle: (): boolean => isHidden.value = !isHidden.value,
});

const inputTextProps = computed((): InputTextProps => {
    const { icon, ...otherProps } = props;

    return {
        icon: icon === undefined ? undefined : { right: (isHidden.value ? icon.off : icon.on) },
        ...otherProps,
    };
});
</script>
