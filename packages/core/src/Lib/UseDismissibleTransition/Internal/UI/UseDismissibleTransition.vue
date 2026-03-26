<template>
    <Transition leave-active-class="transition-all duration-300 ease-in-out"
                leave-from-class="opacity-100 translate-x-0"
                leave-to-class="opacity-0 translate-x-5"
    >
        <slot />
    </Transition>
</template>
