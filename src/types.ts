export type MarkerType = {
    id: number;
    name: string;
    status: string;
    position: {
        lat: number;
        lng: number;
    };
    address: string;
};