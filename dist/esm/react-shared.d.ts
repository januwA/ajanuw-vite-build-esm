interface CountStore {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}
export declare const useCountStore: import('zustand').UseBoundStore<import('zustand').StoreApi<CountStore>>;
export declare const CountComponent: () => import("react/jsx-runtime").JSX.Element;
export declare const DynamicJump: () => import("react/jsx-runtime").JSX.Element;
export {};
