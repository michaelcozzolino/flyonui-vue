<template>
    <FoTable size="extraSmall"
             is-responsive
    >
        <template #head>
            <FoTableRow>
                <FoTableHeader>#</FoTableHeader>
                <FoTableHeader>Name</FoTableHeader>
                <FoTableHeader>Occupation</FoTableHeader>
                <FoTableHeader>Company</FoTableHeader>
                <FoTableHeader>Location</FoTableHeader>
                <FoTableHeader>Last Active</FoTableHeader>
            </FoTableRow>
        </template>

        <template #body>
            <FoTableRow v-for="employee in employees"
                        :key="employee.id"
            >
                <FoTableColumn>{{ employee.id }}</FoTableColumn>
                <FoTableColumn>{{ employee.name }}</FoTableColumn>
                <FoTableColumn>{{ employee.occupation }}</FoTableColumn>
                <FoTableColumn>{{ employee.company }}</FoTableColumn>
                <FoTableColumn>{{ employee.location }}</FoTableColumn>
                <FoTableColumn>{{ employee.lastActive.toDateString() }}</FoTableColumn>
            </FoTableRow>
        </template>
    </FoTable>

    <FoTable size="small"
             is-responsive
    >
        <template #head>
            <FoTableRow>
                <FoTableHeader>#</FoTableHeader>
                <FoTableHeader>Name</FoTableHeader>
                <FoTableHeader>Occupation</FoTableHeader>
                <FoTableHeader>Company</FoTableHeader>
                <FoTableHeader>Location</FoTableHeader>
                <FoTableHeader>Last Active</FoTableHeader>
            </FoTableRow>
        </template>

        <template #body>
            <FoTableRow v-for="employee in employees"
                        :key="employee.id"
            >
                <FoTableColumn>{{ employee.id }}</FoTableColumn>
                <FoTableColumn>{{ employee.name }}</FoTableColumn>
                <FoTableColumn>{{ employee.occupation }}</FoTableColumn>
                <FoTableColumn>{{ employee.company }}</FoTableColumn>
                <FoTableColumn>{{ employee.location }}</FoTableColumn>
                <FoTableColumn>{{ employee.lastActive.toDateString() }}</FoTableColumn>
            </FoTableRow>
        </template>
    </FoTable>

    <FoTable is-responsive>
        <template #head>
            <FoTableRow>
                <FoTableHeader>#</FoTableHeader>
                <FoTableHeader>Name</FoTableHeader>
                <FoTableHeader>Occupation</FoTableHeader>
                <FoTableHeader>Company</FoTableHeader>
                <FoTableHeader>Location</FoTableHeader>
                <FoTableHeader>Last Active</FoTableHeader>
            </FoTableRow>
        </template>

        <template #body>
            <FoTableRow v-for="employee in employees"
                        :key="employee.id"
            >
                <FoTableColumn>{{ employee.id }}</FoTableColumn>
                <FoTableColumn>{{ employee.name }}</FoTableColumn>
                <FoTableColumn>{{ employee.occupation }}</FoTableColumn>
                <FoTableColumn>{{ employee.company }}</FoTableColumn>
                <FoTableColumn>{{ employee.location }}</FoTableColumn>
                <FoTableColumn>{{ employee.lastActive.toDateString() }}</FoTableColumn>
            </FoTableRow>
        </template>
    </FoTable>

    <FoTable size="large"
             is-responsive
    >
        <template #head>
            <FoTableRow>
                <FoTableHeader>#</FoTableHeader>
                <FoTableHeader>Name</FoTableHeader>
                <FoTableHeader>Occupation</FoTableHeader>
                <FoTableHeader>Company</FoTableHeader>
                <FoTableHeader>Location</FoTableHeader>
                <FoTableHeader>Last Active</FoTableHeader>
            </FoTableRow>
        </template>

        <template #body>
            <FoTableRow v-for="employee in employees"
                        :key="employee.id"
            >
                <FoTableColumn>{{ employee.id }}</FoTableColumn>
                <FoTableColumn>{{ employee.name }}</FoTableColumn>
                <FoTableColumn>{{ employee.occupation }}</FoTableColumn>
                <FoTableColumn>{{ employee.company }}</FoTableColumn>
                <FoTableColumn>{{ employee.location }}</FoTableColumn>
                <FoTableColumn>{{ employee.lastActive.toDateString() }}</FoTableColumn>
            </FoTableRow>
        </template>
    </FoTable>
</template>

<script setup lang="ts">
import { FoTable, FoTableColumn, FoTableHeader, FoTableRow } from 'flyonui-vue';
import { ref }                                               from 'vue';

interface Employee {
    id:         number;
    name:       string;
    email:      string;
    occupation: string;
    company:    string;
    location:   string;
    lastActive: Date;
}

const employees = ref<Employee[]>([
    {
        id:         1,
        name:       'John Doe',
        email:      'johndoe@example.com',
        occupation: 'Software Engineer',
        company:    'ABC Technologies',
        location:   'United States',
        lastActive: new Date('2022-03-10'),
    },
    {
        id:         2,
        name:       'Jane Smith',
        email:      'janesmith@example.com',
        occupation: 'Data Analyst',
        company:    'XYZ Corporation',
        location:   'Canada',
        lastActive: new Date('2022-03-09'),
    },
    {
        id:         3,
        name:       'Michael Johnson',
        email:      'michaeljohnson@example.com',
        occupation: 'Marketing Manager',
        company:    'Global Marketing Inc.',
        location:   'United Kingdom',
        lastActive: new Date('2022-03-08'),
    },
    {
        id:         4,
        name:       'Emily Brown',
        email:      'emilybrown@example.com',
        occupation: 'Graphic Designer',
        company:    'Creative Solutions Ltd.',
        location:   'Australia',
        lastActive: new Date('2022-03-07'),
    },
    {
        id:         5,
        name:       'David Wilson',
        email:      'davidwilson@example.com',
        occupation: 'Financial Analyst',
        company:    'FinanceX',
        location:   'Germany',
        lastActive: new Date('2022-03-06'),
    },
    {
        id:         6,
        name:       'Alice Johnson',
        email:      'alicejohnson@example.com',
        occupation: 'Project Manager',
        company:    'Project Solutions LLC',
        location:   'France',
        lastActive: new Date('2022-03-05'),
    },
    {
        id:         7,
        name:       'Robert Lee',
        email:      'robertlee@example.com',
        occupation: 'Software Developer',
        company:    'Tech Innovations',
        location:   'China',
        lastActive: new Date('2022-03-04'),
    },
    {
        id:         8,
        name:       'Sarah Adams',
        email:      'sarahadams@example.com',
        occupation: 'Human Resources Manager',
        company:    'HR Solutions Ltd.',
        location:   'Spain',
        lastActive: new Date('2022-03-03'),
    },
    {
        id:         9,
        name:       'James Wilson',
        email:      'jameswilson@example.com',
        occupation: 'Business Analyst',
        company:    'Global Enterprises',
        location:   'United States',
        lastActive: new Date('2022-03-02'),
    },
    {
        id:         10,
        name:       'Mary Brown',
        email:      'marybrown@example.com',
        occupation: 'Marketing Coordinator',
        company:    'Marketing Solutions Inc.',
        location:   'Canada',
        lastActive: new Date('2022-03-01'),
    },
]);
</script>
