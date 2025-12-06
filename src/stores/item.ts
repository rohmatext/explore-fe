import { fetchItem, type FetchItemParams } from '@/api/item-api';
import type { Item } from '@/types';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useItemList = defineStore('items', () => {
    const data = ref<Item[]>([]);
    const nav = ref<Item[]>([]);

    const refetch = (id: number, params?: FetchItemParams) => {
        fetchItem(id, params).then((res) => {
            data.value = [];
            nav.value = [];
            for (const item of res.data) {
                data.value.push(item);
            }
            for (const n of res.meta.nav) {
                nav.value.push(n);
            }
        });
    };
    return { data, refetch, nav };
});
