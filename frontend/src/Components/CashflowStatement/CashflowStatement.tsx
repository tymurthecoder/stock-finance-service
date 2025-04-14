import React, { useEffect, useState } from "react";
import { CompanyCashFlow } from "../../company";
import { data, useOutletContext } from "react-router";
import { getCashFlowStatement } from "../../api";
import RatioList from "../RatioList/RatioList";
import Table from "../Table/Table";

type Props = {};

const configs = [
  {
    label: "Date",
    render: (company: CompanyCashFlow) => company.date,
  },
  {
    label: "Operating Cashflow",
    render: (company: CompanyCashFlow) => company.operatingCashFlow,
  },
  {
    label: "Investing Cashflow",
    render: (company: CompanyCashFlow) =>
      company.netCashUsedForInvestingActivites,
  },
  {
    label: "Financing Cashflow",
    render: (company: CompanyCashFlow) =>
      company.netCashUsedProvidedByFinancingActivities,
  },
  {
    label: "Cash At End of Period",
    render: (company: CompanyCashFlow) => company.cashAtEndOfPeriod,
  },
  {
    label: "CapEX",
    render: (company: CompanyCashFlow) => company.capitalExpenditure,
  },
  {
    label: "Issuance Of Stock",
    render: (company: CompanyCashFlow) => company.commonStockIssued,
  },
  {
    label: "Free Cash Flow",
    render: (company: CompanyCashFlow) => company.freeCashFlow,
  },
];

const CashflowStatement = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [cashFlow, setCashFlow] = useState<CompanyCashFlow[]>();
  useEffect(() => {
    const getData = async () => {
      const result = await getCashFlowStatement(ticker);
      setCashFlow(result!.data);
    };
    getData();
  }, []);

  return (
    <>
      {cashFlow ? (
        <Table configs={configs} data={cashFlow}  />
      ) : (
        <>Loading...</>
      )}
    </>
  );
};

export default CashflowStatement;
