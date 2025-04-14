import React, { JSX, SyntheticEvent } from 'react'
import Card from '../Card/Card'
import { CompanySearch } from '../../company'
import {v4 as uuidv4} from "uuid"

interface Props {
  searchResult: CompanySearch[];
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const CardList : React.FC<Props> = (props: Props) : JSX.Element => {
  return (
    <>
    <div>
     {props.searchResult.length > 0 ? (
      props.searchResult.map((result) => {
        return <Card id = {result.symbol} key={uuidv4()} searchResult = {result} onPortfolioCreate={props.onPortfolioCreate}/>
      })
    ): (
      <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
           No results!
         </p>
    )}
     </div>
    </>
    // <div>
    //     <Card companyNmae='Apple' ticker='AAPL' price={100} href='https://media.zenfs.com/en/us.finance.gurufocus/6b2eab2b95429115b8cf27cf21f9c02c' />
    //     <Card companyNmae='Microsoft' ticker='MSFT' price={90} href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCdyTwnEiPLYCGmbmWHfH52fkhHwieKsvbUQ&s' />
    //     <Card companyNmae='Ford' ticker='FRT' price={50} href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1u0qQwqAXKBZJwVp5KOOr2O8gcrGYWllbOQ&s' />
    // </div>
  )
}

export default CardList