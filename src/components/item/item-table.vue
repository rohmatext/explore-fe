<script setup lang="ts">
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useItemList } from '@/stores/item';
import { FolderIcon } from 'lucide-vue-next';
import { onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const item = useItemList();
const route = useRoute();
const router = useRouter();

onMounted(() => item.refetch(Number(route.params.id)));

const toRoute = (id: number) => {
    router.push({ name: 'sub', params: { id } });
};

watch(
    () => route.params.id,
    (val) => {
        item.refetch(Number(val));
    },
);
</script>

<template>
    <div class="py-2">
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink as-child>
                        <RouterLink :to="{ name: 'home' }">Beranda</RouterLink>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <template v-for="nav in item.nav" :key="nav.id">
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink as-child>
                            <RouterLink :to="{ name: 'sub', params: { id: nav.id } }">{{ nav.name }}</RouterLink>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </template>
            </BreadcrumbList>
        </Breadcrumb>
    </div>
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Date Modified</TableHead>
                <TableHead>Type</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <template v-if="item.data.length > 0">
                <TableRow v-for="row in item.data" :key="row.id" v-on:click="toRoute(row.id)">
                    <TableCell class="font-medium">
                        <FolderIcon class="mr-1 inline-block size-4" />
                        {{ row.name }}
                    </TableCell>
                    <TableCell>{{ row.updated_at }}</TableCell>
                    <TableCell class="capitalize">{{ row.extension?.toUpperCase() }} {{ row.type }}</TableCell>
                </TableRow>
            </template>
            <TableRow v-else>
                <TableCell colspan="3" class="text-center">This folder is empty</TableCell>
            </TableRow>
        </TableBody>
    </Table>
</template>
