<script setup lang="ts">
import { RouterView }                                 from 'vue-router'
import HelloWorld                                     from './components/HelloWorld.vue'
import { FoMenu, FoMenuItem, type Id, type MenuItem } from "flyonui-vue";
import { ref }                                        from "vue";

const menuItems = ref<(MenuItem & Id)[]>([
    { id: 1, to: '/', text: 'Home' },
    { id: 2, to: '/about', text: 'About' },
])
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

        <FoMenu orientation="horizontal"
                size="extraSmall"
        >
            <FoMenuItem v-for="menuItem in menuItems"
                        :key="menuItem.id"
                        :item="menuItem"

            />
        </FoMenu>
    </div>
  </header>


  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
