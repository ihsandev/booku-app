import { Global as GlobalEmotion, css } from '@emotion/react'

const Global = () => (
  <GlobalEmotion 
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
      * {
        font-family: 'Poppins', sans-serif;
        padding: 0;
        margin: 0;
      }
      body {
        background-color: aliceblue;
      }
    `}
  />
)

export default Global