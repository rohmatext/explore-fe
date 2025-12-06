import axios from '@/lib/axios';

export type FetchItemParams = {
    cursor?: string;
};

export const fetchItem = async (parentId: number, params?: FetchItemParams) => {
    try {
        const { data } = await axios.get(`/api/items/${parentId}`, {
            params: params,
        });

        return data;
    } catch (error: any) {
        throw error;
    }
};
