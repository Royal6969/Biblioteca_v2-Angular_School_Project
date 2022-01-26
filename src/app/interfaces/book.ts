export interface Book {
    $key?: string;
    key?: string | null;
    author?: string;
    title?: string;
    price?: number;
    dateadded?: Date;
    // isRead?:boolean;
    dateread?: Date;
    description?: string;
    rate?: number;
    imageUrl?: string;
    imagePortada?: string;
    imageContra?: string;
    imageLomo?: string;
}
