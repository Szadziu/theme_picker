export interface MockDataSample {
    id: string;
    createdAt: string; //backend
    url: string; //backend
    name: string;
    colors: Array<string>;
    creatorId: number;
}

export type Color = {
    hex: string;
    rgb: string;
    hsl: string;
};

export interface ThemeCardItem {
    creatorId: string;
    name: string;
    colors: Color[];
}

export type ThemeContextValue = {
    creatorId: number;
    name: string;
    colors: Color[];
};

export interface AddThemeDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (theme: any) => void;
}

export interface WarningAlertProps {
    show: boolean;
    children?: React.ReactNode;
}

// type P = Array<string>;

// type U<T> = Array<T>;

// type L<T> = T[];

// type I<
//     X extends number | string = string,
//     Y extends number | string = string
// > = [X, Y];

// type X = { number: number; [K: string]: number };

// type Z = number | string;
// type C = string[]

// // Array<string>

// type R = (obj: { c: number}) => { a: number, b: number}

// const fnc2: R = (obj) => {
//     return {
//         a: 1,
//         b: obj.c
//     }
// }

// const fnc = (txt: X): boolean => {
//     console.log(txt)
//     return true
// }

// const fnc3 = (str: string) => {
//     return str.split("").map(el => el);
// }

// fnc({
//     number: 134,
//     a: 2,
//     b: 222,
//     c: "dupa"
// })

// const a: I = ["1", "2"];

// function x([a, b]: (string|number)[]) {
//     if(typeof a === "string") {
//         //...
//     } else {
//         return a * 1
//     }
// }

// function r(arr: string[]) {
//     return arr.map(el => el.toUpperCase());
// }

// x(a);
// r(a);
