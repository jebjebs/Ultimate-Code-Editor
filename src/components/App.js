import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Editor from './Editor';
import Navbar from './Navbar/Navbar';
import Themes from './Themes/Themes';
import useLocalStorage from '../hooks/useLocalStorage'

function App() {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')
  const [theme, setTheme] = useState('material')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  const handleChangeTheme = (theme) => {
    setTheme(theme);
  }
  console.log(`Current Theme Saved: ${theme}`)
  return (
    <Router>
      <Navbar />
      
      <Switch>
        <Route exact path="/">
          <div className="pane top-pane">
            <Editor
              language="xml"
              displayName="HTML"
              value={html}
              onChange={setHtml}
              theme={theme}
            />
            <Editor
              language="css"
              displayName="CSS"
              value={css}
              onChange={setCss}
              theme={theme}
            />
            <Editor
              language="javascript"
              displayName="JS"
              value={js}
              onChange={setJs}
              theme={theme}
            />
          </div>
          <div className="pane">
            <iframe
              srcDoc={srcDoc}
              title="output"
              sandbox="allow-scripts"
              frameBorder="0"
              width="100%"
              height="100%"
            />
          </div>
        </Route>
        <Route exact path="/themes">
          <Themes currentTheme={theme} onChangeTheme={handleChangeTheme} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
