import { fetchFolder } from '@/api/folder-api';
import type { Folder } from '@/types';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useRootFolderStore = defineStore('root-folder', () => {
    const data = ref<Folder[]>([]);

    const refetch = () => {
        fetchFolder().then((res) => {
            data.value = [];
            for (const item of res.data) {
                data.value.push(item);
            }
        });
    };

    return { data, refetch };
});
