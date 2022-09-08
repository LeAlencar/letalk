import { useFormik } from 'formik'
import { api } from '../../api/api'
import { Content, FormContainer, FormContent } from './style'

export function LoanForm() {

  const formikValue = useFormik({
    initialValues: {
      cpf: '',
      uf: '',
      birthDate: '',
      loanValue: '',
      installmentValue: ''
    },
    onSubmit: (values, actions) => {
      setTimeout(() => {
        api.post("/loans/simulate", {
          cpf: values.cpf,
          uf: values.uf,
          birthDate: values.birthDate,
          loanValue: values.loanValue,
          installmentValue: values.installmentValue
        })
      }, 2000)
    }
  })

  return (
    <FormContainer>
      <Content>
      <FormContent onSubmit={formikValue.handleSubmit}>
      <input type="text" 
          placeholder="CPF"
          onChange={formikValue.handleChange}
          value={formikValue.values.cpf}
        />
        <input type="text" 
          placeholder="UF"
          onChange={formikValue.handleChange}
          value={formikValue.values.uf}
        />
        <input type="text" 
          placeholder="DATA DE NASCIMENTO"
          onChange={formikValue.handleChange}
          value={formikValue.values.birthDate}
        />
        <input type="text" 
          placeholder="QUAL O VALOR DO EMPRÉSTIMO"
          onChange={formikValue.handleChange}
          value={formikValue.values.loanValue}
        />
        <input type="text" 
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
  )
}