export interface Folder {
    id: number;
    name: string;
}

export type Item = {
    id: number;
    name: string;
    type: ItemType;
    size: number | null;
    extension: string | null;
    parent_id: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};

export type ItemType = 'file' | 'folder';
