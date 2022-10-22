import ThemePicker from './components/ThemePicker/ThemePicker';
import CreateThemeContext from './contexts/CreateThemeContext';

const App = () => {
    const value = {
        name: 'Świetny kolor',
    };

    return (
        <div className="App">
            {/* <CreateThemeContext.Provider value={value}> */}
            <ThemePicker />
            {/* </CreateThemeContext.Provider> */}
        </div>
    );
};

export default App;
