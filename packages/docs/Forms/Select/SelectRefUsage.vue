<template>
    <FoSelect v-model="favoriteMovie"
              class="max-w-sm"
              :label="{ text: 'Pick your favorite Movie', type: 'inline' }"
              :options="movies"
    />

    Favorite movie id: {{ JSON.stringify(favoriteMovieId) }}

    <FoSelect v-model="favoriteSeries"
              class="max-w-sm"
              :label="{ text: 'Pick your favorite Series', type: 'inline' }"
              :options="series"
    />

    {{ user }}
</template>

<script setup lang="ts">
import type { SelectOption }           from 'flyonui-vue';
import { FoSelect, useSelectedOption } from 'flyonui-vue';
import { ref, toRef }                  from 'vue';

const movies = ref<SelectOption[]>([
    { id: 1, text: 'The Godfather' },
    { id: 2, text: 'The Shawshank Redemption' },
    { id: 3, text: 'Pulp Fiction' },
    { id: 4, text: 'The Dark Knight' },
    { id: 5, text: `Schindler's List` },
]);

const favoriteMovieId = ref<number | null>(null);
const favoriteMovie   = useSelectedOption(movies, favoriteMovieId);

const series = ref<SelectOption[]>([
    { id: 1, text: 'Breaking Bad' },
    { id: 2, text: 'Game of Thrones' },
    { id: 3, text: 'The Sopranos' },
    { id: 4, text: 'Stranger Things' },
    { id: 5, text: 'The Wire' },
    { id: 6, text: 'Friends' },
    { id: 7, text: 'The Office' },
]);

const user = ref<{
    name:             string;
    favoriteSeriesId: number | null;
}>({
    name:             'Michael',
    favoriteSeriesId: null,
});

const favoriteSeries = useSelectedOption(series, toRef(user.value, 'favoriteSeriesId'));
</script>
