import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Themes = ({ currentTheme, onChangeTheme }) => {
    const [theme, setTheme] = useState('material')

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`THEME SAVED: ${theme}`)
        onChangeTheme(theme);
    }

    useEffect(() => {
      setTheme(currentTheme)
    }, [])
    

    return (
        <>
            <h1>Select Theme</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <select name="themes" value={theme} id="themes" onChange={(e) => setTheme(e.target.value)}>
                    <option value="material">Material</option>
                    <option value="3024-day">3024 Day</option>
                    <option value="nord">Nord</option>
                    <option value="night">Night</option>
                    <option value="duotone-light">Duotone Light</option>
                    <option value="isotope">Isotope</option>
                </select>
                <button type="submit">Save</button>
            </form>
        </>
    )
}

export default Themes