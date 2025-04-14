import React, { useEffect, useState } from 'react'
import { CompanyBalanceSheet, CompanyCashFlow } from '../../company';
import { useOutletContext } from 'react-router';
import { getBalanceSheet } from '../../api';
import RatioList from '../RatioList/RatioList';

type Props = {}

const config = [
    {
      label: <div className="font-bold">Total Assets</div>,
      render: (company: CompanyBalanceSheet) => company.totalAssets,
    },
    {
      label: "Current Assets",
      render: (company: CompanyBalanceSheet) => company.totalCurrentAssets,
    },
    {
      label: "Total Cash",
      render: (company: CompanyBalanceSheet) => company.cashAndCashEquivalents,
    },
    {
      label: "Property & equipment",
      render: (company: CompanyBalanceSheet) => company.propertyPlantEquipmentNet,
    },
    {
      label: "Intangible Assets",
      render: (company: CompanyBalanceSheet) => company.intangibleAssets,
    },
    {
      label: "Long Term Debt",
      render: (company: CompanyBalanceSheet) => company.longTermDebt,
    },
    {
      label: "Total Debt",
      render: (company: CompanyBalanceSheet) => company.otherCurrentLiabilities,
    },
    {
      label: <div className="font-bold">Total Liabilites</div>,
      render: (company: CompanyBalanceSheet) => company.totalLiabilities,
    },
    {
      label: "Current Liabilities",
      render: (company: CompanyBalanceSheet) => company.totalCurrentLiabilities,
    },
    {
      label: "Long-Term Debt",
      render: (company: CompanyBalanceSheet) => company.longTermDebt,
    },
    {
      label: "Long-Term Income Taxes",
      render: (company: CompanyBalanceSheet) => company.otherLiabilities,
    },
    {
      label: "Stakeholder's Equity",
      render: (company: CompanyBalanceSheet) => company.totalStockholdersEquity,
    },
    {
      label: "Retained Earnings",
      render: (company: CompanyBalanceSheet) => company.retainedEarnings,
    },
  ];
  

const BalanceSheet = (props: Props) => {
    const ticker = useOutletContext<string>();
    const [balance, setBalance] = useState<CompanyBalanceSheet>();
    useEffect(() => {
        const getData = async () => {
            const result = await getBalanceSheet(ticker);
            setBalance(result?.data[0]);
        };
        getData();
    }, []);
  return (
    <>
    {balance ? (<RatioList data={balance} configs={config}/>) : (<>Loading...</>)}
    </>
  )
}

export default BalanceSheet