import styled from 'styled-components'


export const FormContainer = styled.div`
  margin-top: 2em;
  display: flex;
  justify-content: center;
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  box-shadow: 0px 0px 10px #ECECEC;
  border-radius: 5px;
  padding: 5em;
`

export const FormContent = styled.form`
  select {
    width: 100%;
    margin-top: 1rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    font-weight: 400;
    font-size: 1rem;
    background-color: #fff;
    & + input {
      margin-top: 1rem;
    }
  }
  input {
    width: 100%;
    
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    font-weight: 400;
    font-size: 1rem;
    &:placeholder {
      color: var(--text-body);
    }
    & + input {
      margin-top: 1rem;
    }
  }
  input::placeholder {
    padding: 10px;
    
  }
  button[type='submit'] {
    width: 100%;
    height: 4rem;
    background: #F3A126;;
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`