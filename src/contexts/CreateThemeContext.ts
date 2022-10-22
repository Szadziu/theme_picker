import { createContext } from 'react';

type ThemeContext = {
    // value: {
    //     name: string;
    // };
};

const CreateThemeContext = createContext<ThemeContext>('Defaul Value');

export default CreateThemeContext;
