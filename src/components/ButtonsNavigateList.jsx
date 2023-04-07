

const buttonsNavigate = ({pageActual}) => {
  pageActual=parseInt(pageActual)
  return (
    <ul>
    <li>
      {pageActual}

    </li>
    <li>
      {pageActual + 1}

    </li>
    <li>
      {pageActual + 2}

    </li>
    <li>
      {pageActual +3}

    </li>
    <li>
      {pageActual +4}

    </li>
    <li>
      {pageActual +5}

    </li>
  </ul>
  
  )
}

export default buttonsNavigate