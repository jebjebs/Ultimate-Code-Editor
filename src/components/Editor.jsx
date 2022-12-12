import './styles.css';

import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'

// Themes
import 'codemirror/theme/material.css'
import 'codemirror/theme/3024-day.css'
import 'codemirror/theme/isotope.css'
import 'codemirror/theme/duotone-light.css'
import 'codemirror/theme/nord.css'
import 'codemirror/theme/night.css'


// Customizations
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/javascript-hint";
import "codemirror/addon/hint/xml-hint";
import "codemirror/addon/hint/html-hint";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/addon/search/match-highlighter";

export default function Editor(props) {
  const {
    language,
    displayName,
    value,
    onChange,
    theme
  } = props
  const [open, setOpen] = useState(true)

  const savedTheme = theme

  function handleChange(editor, data, value) {
    onChange(value)
  }

  console.log(`Editor.js Theme: ${theme}`)
  
  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <div className="editor-title">
        {displayName}
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={() => setOpen(prevOpen => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            theme: savedTheme,
            lineNumbers: true,
            extraKeys: {
              "Ctrl-Space": "autocomplete"
            },
            matchBrackets: true, //underline matching bracket
            autoCloseBrackets: true, //auto-close any brackets
            autoCloseTags: true, //auto-close html tags
            highlightSelectionMatches: true, //highlights matching words
          }}
      />
    </div>
  )
}
