import React from 'react'
import { Link } from 'react-router-dom'
import { useQueryString } from 'react-router-dom-qs'

export default function App() {
  const queryString = useQueryString()
  console.log(queryString)

  return (
    <div>
      <h1>Languages</h1>
      <ul>
        {['ja', 'en', 'es', 'de'].map(lang => (
          <li key={lang}>
            <Link to={`/?id=abc&lang=${lang}`}>{lang}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
