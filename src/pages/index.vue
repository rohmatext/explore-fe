<script setup lang="ts">
import NewFolderDialog from '@/components/item/new-folder-dialog.vue';
import AppLayout from '@/components/layout/AppLayout.vue';
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from '@/components/ui/context-menu';
import { ref } from 'vue';

const isNewFolder = ref<boolean>(false);
</script>

<template>
    <AppLayout>
        <ContextMenu>
            <ContextMenuTrigger>
                <div class="mx-auto min-h-svh w-full max-w-7xl p-4">
                    <RouterView />
                </div>
            </ContextMenuTrigger>
            <ContextMenuContent>
                <ContextMenuItem v-on:click="isNewFolder = true">New Folder</ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
        <NewFolderDialog v-model="isNewFolder" />
    </AppLayout>
</template>
