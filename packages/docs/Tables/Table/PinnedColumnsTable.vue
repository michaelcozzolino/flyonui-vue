<template>
    <FoTable class="h-56"
             size="extraSmall"
             is-pinned="columns"
             is-responsive
    >
        <template #head>
            <FoTableRow>
                <FoTableHeader />
                <FoTableHeader>Name</FoTableHeader>
                <FoTableHeader>Occupation</FoTableHeader>
                <FoTableHeader>Employer</FoTableHeader>
                <FoTableHeader>Email</FoTableHeader>
                <FoTableHeader>Location</FoTableHeader>
                <FoTableHeader>Last Access</FoTableHeader>
                <FoTableHeader>Favorite Color</FoTableHeader>
                <FoTableHeader />
            </FoTableRow>
        </template>

        <template #body>
            <FoTableRow v-for="employee in employees"
                        :key="employee.id"
            >
                <FoTableColumn>{{ employee.id }}</FoTableColumn>
                <FoTableColumn>{{ employee.name }}</FoTableColumn>
                <FoTableColumn>{{ employee.occupation }}</FoTableColumn>
                <FoTableColumn>{{ employee.employer }}</FoTableColumn>
                <FoTableColumn>{{ employee.email }}</FoTableColumn>
                <FoTableColumn>{{ employee.location }}</FoTableColumn>
                <FoTableColumn>{{ employee.lastAccess.toDateString() }}</FoTableColumn>
                <FoTableColumn>{{ employee.favoriteColor }}</FoTableColumn>
                <FoTableColumn>{{ employee.id }}</FoTableColumn>
            </FoTableRow>
        </template>

        <template #footer>
            <FoTableRow>
                <FoTableHeader />
                <FoTableHeader>Name</FoTableHeader>
                <FoTableHeader>Occupation</FoTableHeader>
                <FoTableHeader>Employer</FoTableHeader>
                <FoTableHeader>Email</FoTableHeader>
                <FoTableHeader>Location</FoTableHeader>
                <FoTableHeader>Last Access</FoTableHeader>
                <FoTableHeader>Favorite Color</FoTableHeader>
                <FoTableHeader />
            </FoTableRow>
        </template>
    </FoTable>
</template>

<script setup lang="ts">
import { FoTable, FoTableColumn, FoTableHeader, FoTableRow } from 'flyonui-vue';
import { ref }                                               from 'vue';

interface Employee {
    id:            number;
    name:          string;
    occupation:    string;
    employer:      string;
    email:         string;
    location:      string;
    lastAccess:    Date;
    favoriteColor: string;
}

const employees = ref<Employee[]>([
    {
        id:            1,
        name:          'Alice Johnson',
        occupation:    'Software Engineer',
        employer:      'Alpha Tech',
        email:         'alice@example.com',
        location:      'United States',
        lastAccess:    new Date('2021-12-16'),
        favoriteColor: 'Blue',
    },
    {
        id:            2,
        name:          'Bob Smith',
        occupation:    'Marketing Manager',
        employer:      'Beta Corp',
        email:         'bob@example.com',
        location:      'Canada',
        lastAccess:    new Date('2021-11-05'),
        favoriteColor: 'Green',
    },
    {
        id:            3,
        name:          'Charlie Brown',
        occupation:    'Graphic Designer',
        employer:      'Gamma Designs',
        email:         'charlie@example.com',
        location:      'United Kingdom',
        lastAccess:    new Date('2021-10-20'),
        favoriteColor: 'Red',
    },
    {
        id:            4,
        name:          'Dora Johnson',
        occupation:    'HR Manager',
        employer:      'Delta Corp',
        email:         'dora@example.com',
        location:      'Australia',
        lastAccess:    new Date('2021-09-15'),
        favoriteColor: 'Purple',
    },
    {
        id:            5,
        name:          'Ethan Hunt',
        occupation:    'Secret Agent',
        employer:      'Eagle Eye',
        email:         'ethan@example.com',
        location:      'France',
        lastAccess:    new Date('2021-08-10'),
        favoriteColor: 'Black',
    },
    {
        id:            6,
        name:          'Fiona Brown',
        occupation:    'Financial Analyst',
        employer:      'Fox Finance',
        email:         'fiona@example.com',
        location:      'Germany',
        lastAccess:    new Date('2021-07-05'),
        favoriteColor: 'Yellow',
    },
    {
        id:            7,
        name:          'George Wilson',
        occupation:    'Project Manager',
        employer:      'Gazelle Projects',
        email:         'george@example.com',
        location:      'Brazil',
        lastAccess:    new Date('2021-06-01'),
        favoriteColor: 'Orange',
    },
    {
        id:            8,
        name:          'Hannah Green',
        occupation:    'Environmentalist',
        employer:      'Hunter Foundation',
        email:         'hannah@example.com',
        location:      'India',
        lastAccess:    new Date('2021-05-25'),
        favoriteColor: 'Green',
    },
    {
        id:            9,
        name:          'Ian Black',
        occupation:    'Journalist',
        employer:      'Insight News',
        email:         'ian@example.com',
        location:      'Japan',
        lastAccess:    new Date('2021-04-20'),
        favoriteColor: 'Blue',
    },
    {
        id:            10,
        name:          'Jennifer White',
        occupation:    'Doctor',
        employer:      'Jupiter Hospital',
        email:         'jennifer@example.com',
        location:      'South Africa',
        lastAccess:    new Date('2021-03-15'),
        favoriteColor: 'White',
    },
]);
</script>
