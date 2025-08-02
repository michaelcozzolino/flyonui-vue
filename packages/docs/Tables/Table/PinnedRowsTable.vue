<template>
    <FoTable class="h-96"
             is-pinned="rows"
             is-responsive
    >
        <template v-for="(movies, letter) of moviesByLetters"
                  :key="letter"
        >
            <FoTableHead>
                <FoTableRow>
                    <FoTableHeader>{{ letter }}</FoTableHeader>
                </FoTableRow>
            </FoTableHead>

            <FoTableBody>
                <FoTableRow v-for="movie in movies"
                            :key="movie"
                >
                    <FoTableColumn>{{ movie }}</FoTableColumn>
                </FoTableRow>
            </FoTableBody>
        </template>
    </FoTable>
</template>

<script setup lang="ts">
import { FoTable, FoTableBody, FoTableColumn, FoTableHead, FoTableHeader, FoTableRow } from 'flyonui-vue';

const moviesByLetters: Record<string, string[]> = {
    A: [
        'Aegis',
        'Agent Liberty',
        'Aqualad',
        'Astro Boy',
        'Azrael',
    ],
    B: [
        'Banshee',
        'Black Bolt',
        'Black Lightning',
        'Blue Beetle',
        'Booster Gold',
    ],
    C: [
        'Captain Britain',
        'Captain Universe',
        'Cyborg',
        'Cyclops',
    ],
    D: [
        'Dagger',
        'Daredevil',
        'Darkhawk',
        'Deadpool',
    ],
    E: [
        'Elektra',
        'Elongated Man',
    ],
    F: [
        'Falcon',
        'Firestorm',
    ],
    G: [
        'Gambit',
        'Ghost Rider',
        'Goliath',
        'Green Lantern',
    ],
    H: [
        'Harley Quinn',
        'Havok',
        'Hellboy',
    ],
    I: [
        'Iceman',
        'Invisible Woman',
    ],
    J: [
        'Jean Grey',
        'Jubilee',
    ],
    K: [
        'Kid Flash',
        'Kraven the Hunter',
    ],
    L: [
        'Lex Luthor',
        'Loki',
    ],
    M: [
        'Mad Hatter',
        'Magik',
    ],
    N: [
        'Namor',
        'Nightcrawler',
    ],
    O: [
        'Oracle',
    ],
    P: [
        'Psylocke',
        'Punisher',
    ],
    Q: [
        'Quasar',
    ],
    R: [
        'Raven',
        'Red Hood',
    ],
    S: [
        'Sandman',
        'Scarlet Witch',
        'She-Hulk',
        'Silver Surfer',
        'Spawn',
    ],
    T: [
        'Taskmaster',
        'Thor',
    ],
    U: [
        'Ultraman',
    ],
    V: [
        'Venom',
    ],
    W: [
        'Wasp',
        'Wolverine',
    ],
    X: [
        'X-23',
    ],
    Y: [
        'Yellowjacket',
    ],
    Z: [
        'Zorro',
        'Zathura',
    ],
};
</script>
