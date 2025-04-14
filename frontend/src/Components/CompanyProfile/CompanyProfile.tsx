import React, { useEffect, useState } from "react";
import { CompanyKeyMetrics } from "../../company";
import { useOutletContext } from "react-router-dom";
import { getCompanyKeyMetrics } from "../../api";
import RatioList from "../RatioList/RatioList";

interface Props {}

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: CompanyKeyMetrics) => company.marketCapTTM,
  },
  {
    label: "Current Ratio",
    render: (company: CompanyKeyMetrics) => company.currentRatioTTM,
  },
  {
    label: "Return On Equity",
    render: (company: CompanyKeyMetrics) => company.roeTTM,
  },
  {
    label: "Cash Per Share",
    render: (company: CompanyKeyMetrics) => company.cashPerShareTTM,
  },
  {
    label: "Current Ratio",
    render: (company: CompanyKeyMetrics) => company.currentRatioTTM,
  },
  {
    label: "Return On Equity",
    render: (company: CompanyKeyMetrics) => company.roeTTM,
  }
];

const CompanyProfile = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [companyData, setCompanyData] = useState<CompanyKeyMetrics>();
  useEffect(() => {
    const getCompanyKeyMetric = async () => {
      const value = await getCompanyKeyMetrics(ticker);
      setCompanyData(value!.data[0]);
      console.log(value)
    };
    getCompanyKeyMetric();
    console.log(companyData)
  }, []);

  return (
    <>
      {companyData ? (
        <>
          <RatioList data={companyData} configs={tableConfig} />
        </>
      ) : (
        <>Loading...</>
      )}

    </>
  );
};

export default CompanyProfile;
