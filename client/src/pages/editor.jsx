import React from 'react'
import  Editor  from '@monaco-editor/react'

const MyEditor = () => {
  return (
    <>
    <div >
    <Editor height="90vh" defaultLanguage="javascript" defaultValue='// some comment'  />
    </div>
    
    </>
    
  )
}

export default MyEditor