
import { useFormik } from 'formik'
import { api } from '../../api/api'
import { Content,  ContentBlock,  ContentGrid,  InfoContainer, InfoText, SubmitButton, Table, TableLine } from './style'

export function LoanInfo() {

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
    <>
    <InfoText>Veja a simulação do seu empreśtimo antes de efetivar</InfoText>
    <InfoContainer>
      <Content>
        <ContentGrid>
        <ContentBlock>
        <h3>VALOR REQUERIDO</h3>
        <p>R$60000</p>
        </ContentBlock>
        <ContentBlock>
        <h3>TAXA DE JUROS</h3>
        <p>1% ao mês</p>
        </ContentBlock>
        <ContentBlock>
        <h3>VALOR DA PARCELA</h3>
        <p>R$ 60000</p>
        </ContentBlock>
        <ContentBlock>
        <h3>TOTAL DE MESES PARA QUITAR</h3>
        <p>5 MESES</p>
        </ContentBlock>
        <ContentBlock>
        <h3>TOTAL DE JUROS</h3>
        <p>R$ 60000</p>
        </ContentBlock>
        <ContentBlock>
        <h3>TOTAL A PAGAR</h3>
        <p>R$ 60000</p>
        </ContentBlock> 
        </ContentGrid> 

        <h3>PROJEÇÃO DAS PARCELAS:</h3>

        <Table>
          <thead>
            <tr>
              <th>SALDO DEVEDOR</th>
              <th>SALDO DEVEDOR</th>
              <th>SALDO DEVEDOR</th>
              <th>VALOR DA PARCELA</th>
              <th>VENCIMENTO</th>
              
            </tr>
            <TableLine>
              <td></td>
            </TableLine>
          </thead>
          <tbody>
            <tr>
              <td>Teste</td>
              <td>Teste</td>
              <td>Teste</td>
              <td>Teste</td>
              <td>Teste</td>
            </tr>
            <TableLine>
              <td></td>
            </TableLine>
            <tr>
              <td>Teste</td>
              <td>Teste</td>
              <td>Teste</td>
              <td>Teste</td>
              <td>Teste</td>
            </tr>
            <TableLine>
              <td></td>
            </TableLine>
          </tbody>
        </Table>  
        <SubmitButton>EFETIVAR O EMPRÉSTIMO</SubmitButton>
      </Content>
      
    </InfoContainer>
    </>
  )
}