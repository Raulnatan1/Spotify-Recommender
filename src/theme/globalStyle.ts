import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Josefin Slab", serif;
  }

  body{
    background-color: #f5f5f5;
    height: 100vh;
    box-sizing: border-box;
}

`

const XSMALL_SIZE = '600px'
const SMALL_SIZE = '900px'
const DEFAULT_SIZE = '1300px'
const LARGE_SIZE = '1400px'
const XLARGE_SIZE = '1700px'
const XXLARGE_SIZE = '1900px'

export {
    XSMALL_SIZE,
    SMALL_SIZE,
    DEFAULT_SIZE,
    LARGE_SIZE,
    XLARGE_SIZE,
    XXLARGE_SIZE
}