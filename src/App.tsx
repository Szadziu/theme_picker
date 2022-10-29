import ThemePicker from './components/ThemePicker/ThemePicker';
import ThemeContext from './contexts/ThemeContext';
import data from './data/mockData.json';

const App = () => {
    const value = data;
    return (
        <div className="App">
            {/* @ts-ignore */}
            <ThemeContext.Provider value={value}>
                <ThemePicker />
                {/* @ts-ignore */}
            </ThemeContext.Provider>
        </div>
    );
};

export default App;
