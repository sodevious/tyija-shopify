import React from 'react'

// Import UI components from Sanity UI
import { TextInput, Stack, Label } from '@sanity/ui'

export const staticText = React.forwardRef((props, ref) => {
  // console.log(props)
  return (
    <div>
      <h3>
        {props.type.title}
      </h3>
      {props.type.value && (
        <p>
          {props.type.value}
        </p>
      )}
      {props.type.link && (
        <a href="{props.type.link}">
          {props.type.linkText}
        </a>
      )}
    </div>
  )
}
)


// Create the default export to import into our schema
export default staticText