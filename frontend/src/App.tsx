import { Header } from './components/Header';
import { LoanInfo } from './components/LoanInfo';
import { GlobalStyle } from './styles/global';
import { Content, FormContainer, FormContent } from './components/Form/style'
import { useFormik } from 'formik';
import { api } from './api/api';
import { useState } from 'react';

function App() {
  const [loanResult, setLoanResult] = useState([])
  
  const formikValue = useFormik({
    initialValues: {
      cpf: '',
      uf: '',
      birthDate: '',
      loanValue: '',
      installmentValue: ''
    },
    onSubmit: (values, actions) => {
      setTimeout(async () => {
        const response = await api.post("/loans", {
          //cpf: values.cpf,
          uf: values.uf,
          //birthDate: values.birthDate,
          loanValue: values.loanValue,
          installmentValue: values.installmentValue
        })
        console.log(response)
      }, 2000)
    }
  })

  return (
    <div className="App">
      <Header />
      <FormContainer>
      <Content>
      <FormContent onSubmit={formikValue.handleSubmit}>
        <input type="text" 
          id='cpf'
          placeholder="CPF"
          onChange={formikValue.handleChange}
          value={formikValue.values.cpf}
        />
        <select
        name="uf"
        id='uf'
        value={formikValue.values.uf}
        onChange={formikValue.handleChange}
      
        style={{ display: "block" }}
        >
        
        <option value="MG" label="MG">
          {" "}
          MG
        </option>
        <option value="SP" label="SP">
          SP
        </option>
        
        <option value="RJ" label="RJ">
          RJ
        </option>
        <option value="ES" label="ES">
          ES
        </option>
      </select>
        
        <input type="text" 
          id='birthDate'
          placeholder="DATA DE NASCIMENTO"
          onChange={formikValue.handleChange}
          value={formikValue.values.birthDate}
        />
        <input type="text" 
          id='loanValue'
          placeholder="QUAL O VALOR DO EMPRÉSTIMO"
          onChange={formikValue.handleChange}
          value={formikValue.values.loanValue}
        />
        <input type="text" 
          id='installmentValue'
          placeholder="QUAL VALOR DESEJA PAGAR POR MÊS?"
          onChange={formikValue.handleChange}
          value={formikValue.values.installmentValue}
        />

        <button type="submit">
          {formikValue.isSubmitting ? 
            'Simulando...'
          : (
            'Simular'
          )}
        </button>
      </FormContent>
      </Content>
    </FormContainer>
      
      <LoanInfo />
      <GlobalStyle />
    </div>
  );
}

export default App;
