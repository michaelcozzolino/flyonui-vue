<template>
    <FoDataTable v-model:items="products"
                 v-model:items-per-page="productsPerPage"
                 v-model:page="page"
                 v-model:filtered-items="filteredProducts"
                 v-model:query="searchQuery"
                 :rows-per-page="[5, 10, 20, 30, 40, 50]"
                 is-searchable
    >
        <template #head>
            <FoTableRow>
                <FoDataTableHeader class="w-3.5 pe-0">
                    <FoCheckbox v-model="areAllProductsSelected"
                                size="small"
                                :disabled="filteredProducts.length === 0"
                    />
                </FoDataTableHeader>

                <FoDataTableHeader v-model:filtered-items="filteredProducts"
                                   :filter="{
                                       type: 'select',
                                       values: ['ALL', 'APPLE', 'SAMSUNG', 'SONY', 'DELL'],
                                       onFilter: (item: Product, filter: string): boolean => {
                                           return filter === 'ALL' ? true : item.name.toLowerCase().includes(filter.toLowerCase())
                                       },
                                   }"
                >
                    Product Name
                </FoDataTableHeader>

                <FoDataTableHeader v-model:filtered-items="filteredProducts"
                                   :filter="{
                                       type: 'range',
                                       getValue: (item: Product): number => {
                                           return item.price
                                       },
                                   }"
                >
                    Price
                </FoDataTableHeader>

                <FoDataTableHeader v-model:filtered-items="filteredProducts"
                                   :filter="{
                                       type: 'select',
                                       values: ['ALL', 'IN STOCK', 'OUT OF STOCK', 'LIMITED'],
                                       onFilter: (item: Product, filter: string): boolean => {
                                           const filters: Record<string, Availability> = {
                                               'IN STOCK': 'In Stock',
                                               'OUT OF STOCK': 'Out of Stock',
                                               'LIMITED': 'Limited',
                                           };

                                           return filter === 'ALL' ? true : item.availability === filters[filter];
                                       },
                                   }"
                >
                    Availability
                </FoDataTableHeader>

                <FoDataTableHeader>Actions</FoDataTableHeader>
            </FoTableRow>
        </template>

        <template #body>
            <FoTableRow v-for="product in filteredProducts"
                        :key="product.name"
            >
                <FoTableColumn class="w-3.5 pe-0">
                    <FoCheckbox v-model="product.isSelected"
                                size="small"
                    />
                </FoTableColumn>

                <FoTableColumn>{{ product.name }}</FoTableColumn>
                <FoTableColumn>{{ product.price }}</FoTableColumn>

                <FoTableColumn>
                    <FoBadge preset="soft"
                             :color="getBadgeColor(product.availability)"
                    >
                        {{ product.availability }}
                    </FoBadge>
                </FoTableColumn>

                <FoTableColumn>
                    <FoButton v-for="actionIcon in actionIcons"
                              :key="actionIcon"
                              preset="text"
                              shape="circle"
                              :icon="actionIcon"
                    />
                </FoTableColumn>
            </FoTableRow>
        </template>

        <template #info="{ from, to, length }">
            Showing {{ from }} to {{ to }} of {{ length }} Products
        </template>
    </FoDataTable>
</template>

<script setup lang="ts">
import type { Color }                                                                                  from 'flyonui-vue';
import { FoBadge, FoButton, FoCheckbox, FoDataTable, FoDataTableHeader, FoTableColumn,    FoTableRow } from 'flyonui-vue';
import { computed, ref }                                                                               from 'vue';

type Availability = 'In Stock' | 'Limited' | 'Out of Stock';

interface Product {
    name:         string;
    price:        number;
    availability: Availability;
    isSelected:   boolean;
}

const products = ref<Product[]>([
    {
        name:         'Apple iPhone 15',
        price:        999,
        availability: 'In Stock',
        isSelected:   false,
    },
    {
        name:         'Samsung Galaxy S23',
        price:        899,
        availability: 'Limited',
        isSelected:   false,
    },
    {
        name:         'Sony WH-1000XM5',
        price:        399,
        availability: 'Out of Stock',
        isSelected:   false,
    },
    {
        name:         'Dell XPS 15',
        price:        1299,
        availability: 'In Stock',
        isSelected:   false,
    },
    {
        name:         'Logitech MX Master 3',
        price:        99,
        availability: 'Limited',
        isSelected:   false,
    },
    {
        name:         'Microsoft Surface Laptop 5',
        price:        1499,
        availability: 'In Stock',
        isSelected:   false,
    },
    {
        name:         'HP Spectre x360',
        price:        1199,
        availability: 'Out of Stock',
        isSelected:   false,
    },
    {
        name:         'Apple Watch Series 9',
        price:        499,
        availability: 'Limited',
        isSelected:   false,
    },
    {
        name:         'Google Pixel 7',
        price:        599,
        availability: 'In Stock',
        isSelected:   false,
    },
    {
        name:         'Bose QuietComfort Earbuds II',
        price:        279,
        availability: 'Out of Stock',
        isSelected:   false,
    },
    {
        name:         'Asus ROG Zephyrus G14',
        price:        1899,
        availability: 'In Stock',
        isSelected:   false,
    },
    {
        name:         'Sony PlayStation 5',
        price:        499,
        availability: 'Limited',
        isSelected:   false,
    },
    {
        name:         'Amazon Echo Dot (5th Gen)',
        price:        49,
        availability: 'In Stock',
        isSelected:   false,
    },
    {
        name:         'NVIDIA GeForce RTX 4090',
        price:        1599,
        availability: 'Limited',
        isSelected:   false,
    },
    {
        name:         'Lenovo ThinkPad X1 Carbon',
        price:        1799,
        availability: 'In Stock',
        isSelected:   false,
    },
    {
        name:         'Google Nest Hub (2nd Gen)',
        price:        99,
        availability: 'In Stock',
        isSelected:   false,
    },
    {
        name:         'Fitbit Charge 6',
        price:        149,
        availability: 'Limited',
        isSelected:   false,
    },
    {
        name:         'Razer Blade 16',
        price:        2499,
        availability: 'Out of Stock',
        isSelected:   false,
    },
    {
        name:         'Oculus Quest 3',
        price:        499,
        availability: 'In Stock',
        isSelected:   false,
    },
    {
        name:         'Canon EOS R8',
        price:        1699,
        availability: 'Limited',
        isSelected:   false,
    },
    {
        name:         'DJI Mavic 3 Pro',
        price:        2199,
        availability: 'In Stock',
        isSelected:   false,
    },
    {
        name:         'Alienware Aurora R15',
        price:        2899,
        availability: 'Out of Stock',
        isSelected:   false,
    },
    {
        name:         'SteelSeries Arctis Nova Pro',
        price:        349,
        availability: 'Limited',
        isSelected:   false,
    },
]);

const searchQuery      = ref<string>('');
const filteredProducts = ref<Product[]>([]);

const areAllProductsSelected = computed({
    get: (): boolean => {
        for (const product of filteredProducts.value) {
            if (product.isSelected === false) {
                return false;
            }
        }

        return filteredProducts.value.length !== 0;
    },
    set: (value: boolean): void => {
        for (const product of filteredProducts.value) {
            product.isSelected = value;
        }
    },
});

const productsPerPage       = ref<number>(5);
const page                  = ref<number>(1);
const actionIcons: string[] = ['tabler:pencil', 'tabler:trash', 'tabler:dots-vertical'];

function getBadgeColor(availability: Availability): Color {
    const presets: Record<Availability, Color> = {
        'In Stock':     'success',
        'Limited':      'warning',
        'Out of Stock': 'error',
    };

    return presets[availability];
}
</script>
