<template>
    <FoTable is-responsive>
        <template #head>
            <FoTableRow>
                <FoTableHeader>Name</FoTableHeader>
                <FoTableHeader>Email</FoTableHeader>
                <FoTableHeader>Status</FoTableHeader>
                <FoTableHeader>Date</FoTableHeader>
                <FoTableHeader>Actions</FoTableHeader>
            </FoTableRow>
        </template>

        <template #body>
            <FoTableRow v-for="(employee, index) in employees"
                        :key="employee.email"
                        :class="index === 0 && 'bg-primary/10'"
            >
                <FoTableColumn>{{ employee.name }}</FoTableColumn>
                <FoTableColumn :class="index && 'bg-warning/10'">
                    {{ employee.email }}
                </FoTableColumn>
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
    </FoTable>
</template>

<script setup lang="ts">
import type { Color }                                                           from 'flyonui-vue';
import { FoBadge, FoButton, FoTable, FoTableColumn, FoTableHeader, FoTableRow } from 'flyonui-vue';
import { computed, ref }                                                        from 'vue';

type Status = 'Professional' | 'Rejected' | 'Applied' | 'Current';

interface Employee {
    name:   string;
    email:  string;
    status: Status;
    date:   Date;
}

const employees = ref<Employee[]>([
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
]);

const actionIcons = computed(() => ['tabler:pencil', 'tabler:trash', 'tabler:dots-vertical']);

function getBadgeColor(status: Status): Color {
    const presets: Record<Status, Color> = {
        Professional: 'success',
        Applied:      'info',
        Rejected:     'error',
        Current:      'primary',
    };

    return presets[status];
}
</script>
