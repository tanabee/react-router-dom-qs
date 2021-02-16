## About

Parse query string variables as Object.

## Prerequisites

- React project
- Dependencies
  - react
  - react-dom
  - react-router-dom

## Installation

```sh
yarn add react-router-dom react-router-dom-qs
```

## Usage

```javascript
import React from 'react'
import { Link } from 'react-router-dom'
import { useQueryString } from 'react-router-dom-qs'

export default function App() {
  const queryString = useQueryString()
  console.log(queryString)

  return (
    <ul>
      {['ja', 'en', 'es', 'de'].map(lang => (
        <li key={lang}>
          <Link to={`/?id=abc&lang=${lang}`}>{lang}</Link>
        </li>
      ))}
    </ul>
  )
}
```

## Sample code

See example folder
