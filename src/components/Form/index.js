import React from 'react'
import styled from 'styled-components'

const Form = () => (         
  <form action="query.php" method="post">
    <TextArea />
    <input type="submit" />
  </form>
)

const TextArea = styled.textarea`
  height: 400px;
  width: 400px;
`

export default Form
