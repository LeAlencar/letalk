
import { useFormik } from 'formik'
import { NumberLiteralType } from 'typescript'
import { api } from '../../api/api'
import { Content,  ContentBlock,  ContentGrid,  InfoContainer, InfoText, SubmitButton, Table, TableLine } from './style'

interface installmentToPay {
  fees: string
  installment: number
  installmentValue: number
  value: string
}
interface LoanInfoProps {
  loan?: {
    data?: {
      finalValue?: number
      installmentValue?: number
      installments?: number
      installmentsToPay?: installmentToPay[]
      loanValue?: number
      tax?: number
      totalFees?: string
      uf?: string
    }
  }
  
}

export function LoanInfo({ loan }: LoanInfoProps) {
  console.log(loan)
  let tax = 0
  if (loan?.data?.tax !== undefined) {
    tax = loan?.data?.tax * 100
    
  }
  
  return (
    <>
    <InfoText>Veja a simulação do seu empreśtimo antes de efetivar</InfoText>
    <InfoContainer>
      <Content>
        <ContentGrid>
        <ContentBlock>
        <h3>VALOR REQUERIDO</h3>
        <p>R$ {loan?.data?.loanValue}</p>
        </ContentBlock>
        <ContentBlock>
        <h3>TAXA DE JUROS</h3>
        <p>{tax}% ao mês</p>
        </ContentBlock>
        <ContentBlock>
        <h3>VALOR DA PARCELA</h3>
        <p>R$ {loan?.data?.installmentValue}</p>
        </ContentBlock>
        <ContentBlock>
        <h3>TOTAL DE MESES PARA QUITAR</h3>
        <p>{loan?.data?.installments} MESES</p>
        </ContentBlock>
        <ContentBlock>
        <h3>TOTAL DE JUROS</h3>
        <p>R$ {loan?.data?.totalFees}</p>
        </ContentBlock>
        <ContentBlock>
        <h3>TOTAL A PAGAR</h3>
        <p>R$ {loan?.data?.finalValue}</p>
        </ContentBlock> 
        </ContentGrid> 

        <h3>PROJEÇÃO DAS PARCELAS:</h3>

        <Table>
          <thead>
            <tr>
              <th>SALDO DEVEDOR</th>
              <th>JUROS</th>
              <th>SALDO DEVEDOR AJUSTADO</th>
              <th>VALOR DA PARCELA</th>
              <th>VENCIMENTO</th>
              
            </tr>
            <TableLine>
              <td></td>
            </TableLine>
          </thead>
          <tbody>
            {loan?.data?.installmentsToPay?.map(loan => {
              const startValue = Number(loan.value) - Number(loan.fees)
              console.log(loan)
              return (
                <>
                  <tr>
                    <td>R$ {startValue.toFixed(2)}</td>
                    <td>R$ {loan.fees}</td>
                    <td>R$ {loan.value}</td>
                    <td>R$ {loan.installmentValue}</td>
                    <td>12/02/2021</td>
                  </tr>
                  <TableLine>
                    <td></td>
                  </TableLine>
                </>
                
              )
            })}
          </tbody>
        </Table>  
        <SubmitButton>EFETIVAR O EMPRÉSTIMO</SubmitButton>
      </Content>
      
    </InfoContainer>
    </>
  )
}