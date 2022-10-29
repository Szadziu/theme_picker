import { ContextType, createContext } from 'react';
import type { ThemeContextValue } from '../types/types';
import data from '../data/mockData.json';

//@ts-ignore
const ThemeContext: ContextType<ThemeContextValue> = createContext(data);

export default ThemeContext;
