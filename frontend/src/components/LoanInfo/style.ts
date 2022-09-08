import styled from 'styled-components'

export const InfoContainer = styled.div`
  margin-top: 2em;
  display: flex;
  justify-content: center;
  width: 100%;
`

export const InfoText = styled.p`
    margin-top: 3em;
    display: flex;
    justify-content: center;
    font-weight: 700;
    font-family: 'Open Sans';
`

export const Content = styled.div`
  margin-top: 2em;
  width: 60%;
  box-shadow: 0px 0px 10px #ECECEC;
  border-radius: 5px;
  padding: 5em;

  h3 {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    color: #737373;
    font-size: 14px;
    line-height: 19px;
  }
`

export const ContentGrid = styled.div`
  margin-top: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  
  
`

export const ContentBlock = styled.div`
  margin-bottom: 3em;
  h3 {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    color: #737373;
    font-size: 14px;
    line-height: 19px;
  }
  p {
    margin-top: 1em;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: #333333;
  }
`

export const Table = styled.table`
  margin-top: 3em;
  width: 100%;
  padding:5px;
  border-collapse: collapse;
  thead {
    text-align:center;
    tr {
      margin-bottom: 2em;
    }
  }
  tbody {
    tr td {
      padding-top: 1em;
    }
    text-align:center;
  }
`

export const TableLine = styled.tr`
  border-bottom: 2px solid #C4C4C4;
  td {
    padding-top: 1em;
    
  }
  
`

export const SubmitButton = styled.button`
  
    width: 100%;
    height: 4rem;
    background: #21AE1E;
    color: #fff;
    box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.25);
    border-radius: 6px;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
`