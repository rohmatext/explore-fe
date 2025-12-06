<script setup lang="ts">
import { createFolder } from '@/api/folder-api';
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRootFolderStore } from '@/stores/folder';
import { useItemList } from '@/stores/item';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const store = useRootFolderStore();
const item = useItemList();

const open = defineModel<boolean>();
const errors = reactive<{
    name?: string;
}>({ name: undefined });
const form = reactive({
    name: '',
});

const close = (val: boolean) => {
    open.value = val;
    errors.name = '';
    form.name = '';
};

const save = () => {
    createFolder(form, route.params.id as number | undefined)
        .then(() => {
            store.refetch();
            item.refetch(Number(route.params.id));
            close(false);
        })
        .catch((xhr) => {
            const res = xhr.response;
            if (xhr.status === 422) {
                errors.name = res.data.errors.name;
            }
        });
};
</script>

<template>
    <Dialog :open="open" v-on:update:open="close">
        <DialogContent class="sm:max-w-md">
            <DialogHeader>
                <DialogTitle>New Folder</DialogTitle>
                <DialogDescription />
            </DialogHeader>
            <div class="flex items-center gap-2">
                <div class="grid flex-1 gap-2">
                    <Label for="folder" class="sr-only"> Folder Name </Label>
                    <Input id="folder" v-model="form.name" />
                    <small class="text-destructive" v-if="errors.name">{{ errors.name }}</small>
                </div>
            </div>
            <DialogFooter>
                <DialogClose as-child>
                    <Button type="button" variant="secondary"> Close </Button>
                </DialogClose>
                <Button v-on:click="save">Create</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>
