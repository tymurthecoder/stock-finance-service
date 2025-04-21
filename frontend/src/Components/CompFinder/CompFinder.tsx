import React, { useEffect, useState } from 'react'
import { CompanyCompData } from '../../company';
import { getCompData } from '../../api';
import CompanyFinderItem from '../CompanyFinderItem/CompanyFinderItem';
import { AlertTriangle } from "lucide-react";

interface Props {
    ticker: string;
}

const CompFinder = (props: Props) => {
    const [companyData, setCompanyData] = useState<CompanyCompData>();
    useEffect(()=>{
        const getComp = async () =>{
            const value = await getCompData(props.ticker);
            setCompanyData(value?.data[0]);
        }
        getComp();
    }, []);
  return  (companyData != null ?(
    <div className="inline-flex rounded-md shadow-sm m-4" role="group">
        {companyData?.peersList.map((ticker) => {
            return <CompanyFinderItem ticker={ticker} />
        }) }
    </div>
  ) : (
    //todo: make it as alert
    <div className="mt-4 flex items-center gap-2 rounded-lg border border-red-400 bg-red-100 px-4 py-3 text-red-700 shadow-md">
          <AlertTriangle className="h-5 w-5" />
          <span className="text-sm">No result for stock peers</span>
        </div>
  )
)
}

export default CompFinder