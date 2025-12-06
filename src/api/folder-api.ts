import axios from '@/lib/axios';

export type FetchFolderParams = {
    cursor?: string;
};

export type StoreFolderRequest = {
    name: string;
};

export const fetchFolder = async (params?: FetchFolderParams) => {
    try {
        const { data } = await axios.get('/api/folders', {
            params: params,
        });

        return data;
    } catch (error: any) {
        throw error;
    }
};

export const createFolder = async (body: StoreFolderRequest, parentId?: number) => {
    try {
        const { data } = await axios.post(parentId ? `/api/folders/${parentId}` : `/api/folders`, body);

        return data;
    } catch (error: any) {
        throw error;
    }
};
