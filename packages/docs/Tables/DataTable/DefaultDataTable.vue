<template>
    <FoDataTable v-model:items="employees"
                 v-model:items-per-page="employeesPerPage"
                 v-model:page="page"
                 v-model:filtered-items="filteredEmployees"
                 :rows-per-page="5"
    >
        <template #head>
            <FoTableRow>
                <FoDataTableHeader>Name</FoDataTableHeader>
                <FoDataTableHeader>Email</FoDataTableHeader>
                <FoDataTableHeader>Status</FoDataTableHeader>
                <FoDataTableHeader>Date</FoDataTableHeader>
                <FoDataTableHeader>Actions</FoDataTableHeader>
            </FoTableRow>
        </template>

        <template #body>
            <FoTableRow v-for="employee in filteredEmployees"
                        :key="employee.email"
            >
                <FoTableColumn>{{ employee.name }}</FoTableColumn>
                <FoTableColumn>{{ employee.email }}</FoTableColumn>

                <FoTableColumn>
                    <FoBadge preset="soft"
                             :color="getBadgeColor(employee.status)"
                    >
                        {{ employee.status }}
                    </FoBadge>
                </FoTableColumn>

                <FoTableColumn>{{ employee.date.toDateString() }}</FoTableColumn>

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
            Showing {{ from }} to {{ to }} of {{ length }} users
        </template>
    </FoDataTable>
</template>

<script setup lang="ts">
import type { Color }                                                                   from 'flyonui-vue';
import { FoBadge, FoButton, FoDataTable, FoDataTableHeader, FoTableColumn, FoTableRow } from 'flyonui-vue';
import { ref }                                                                          from 'vue';

type Status = 'Professional' | 'Rejected' | 'Applied' | 'Current' | 'Inactive' | 'Pending';

interface User {
    name:   string;
    email:  string;
    status: Status;
    date:   Date;
}

const employees = ref<User[]>([
    {
        name:   'John Doe',
        email:  'johndoe@example.com',
        status: 'Professional',
        date:   new Date('2024-03-01'),
    },
    {
        name:   'Jane Smith',
        email:  'janesmith@example.com',
        status: 'Rejected',
        date:   new Date('2024-03-02'),
    },
    {
        name:   'Alice Johnson',
        email:  'alicejohnson@example.com',
        status: 'Applied',
        date:   new Date('2024-03-03'),
    },
    {
        name:   'Bob Brown',
        email:  'bobrown@example.com',
        status: 'Current',
        date:   new Date('2024-03-04'),
    },
    {
        name:   'Alice Johnson',
        email:  'alicej@example.com',
        status: 'Current',
        date:   new Date('2024-01-15'),
    },
    {
        name:   'Chris Evans',
        email:  'chrisev@example.com',
        status: 'Inactive',
        date:   new Date('2023-11-20'),
    },
    {
        name:   'Dana White',
        email:  'danaw@example.com',
        status: 'Current',
        date:   new Date('2024-02-02'),
    },
    {
        name:   'Ethan Hall',
        email:  'ethanh@example.com',
        status: 'Pending',
        date:   new Date('2024-04-14'),
    },
    {
        name:   'Fiona Carter',
        email:  'fionac@example.com',
        status: 'Current',
        date:   new Date('2024-03-09'),
    },
    {
        name:   'George Smith',
        email:  'georges@example.com',
        status: 'Inactive',
        date:   new Date('2023-12-12'),
    },
    {
        name:   'Hannah Wright',
        email:  'hannahw@example.com',
        status: 'Pending',
        date:   new Date('2024-06-10'),
    },
    {
        name:   'Isaac Long',
        email:  'isaacl@example.com',
        status: 'Current',
        date:   new Date('2024-08-20'),
    },
    {
        name:   'Jane Davis',
        email:  'janed@example.com',
        status: 'Current',
        date:   new Date('2024-07-03'),
    },
    {
        name:   'Kevin Lee',
        email:  'kevinl@example.com',
        status: 'Current',
        date:   new Date('2024-05-12'),
    },
    {
        name:   'Linda Green',
        email:  'lindag@example.com',
        status: 'Inactive',
        date:   new Date('2023-10-07'),
    },
]);

const filteredEmployees = ref<User[]>([]);

const employeesPerPage      = ref<number>(5);
const page                  = ref<number>(1);
const actionIcons: string[] = ['tabler:pencil', 'tabler:trash', 'tabler:dots-vertical'];

function getBadgeColor(status: Status): Color {
    const presets: Record<Status, Color> = {
        Professional: 'success',
        Applied:      'info',
        Rejected:     'error',
        Current:      'primary',
        Inactive:     'secondary',
        Pending:      'warning',
    };

    return presets[status];
}
</script>
