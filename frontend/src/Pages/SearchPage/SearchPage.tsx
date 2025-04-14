import React, { SyntheticEvent, useState } from 'react'
import { searchCompanies } from '../../api';
import { CompanySearch } from '../../company';
import CardList from '../../Components/CardList/CardList';
import Navbar from '../../Components/Navbar/Navbar';
import PortfolioList from '../../Components/Portfolio/PortfolioList/PortfolioList';
import Search from '../../Components/Search/Search';

interface Props {}

const HomePage = (props: Props) => {

  const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);
  const handleSearchChange = (e: any) => {
    setSearch(e.target.value);
    //console.log(e);
  };

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    const exists = portfolioValues.find((value) => value === e.target[0].value);
    if (exists) return;
    const updatePortfolio = [...portfolioValues, e.target[0].value]; //can use push bu not optimal
    setPortfolioValues(updatePortfolio);
  };

  const onPortfolioRemoved = (e: any) => {
    e.preventDefault();
    const removed = portfolioValues.filter((value) => {
      return value !== e.target[0].value;
    });
    setPortfolioValues(removed);
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      //setServerError(result);
    } else if (Array.isArray(result?.data)) {
      setSearchResult(result.data);
    }
    //console.log(searchResult)
  };

  return (
      <div className="App">
        {/* <Hero /> */}
        <Search
          onSearchSubmit={onSearchSubmit}
          search={search}
          handleSearchChange={handleSearchChange}
        />
        <PortfolioList portfolioValues={portfolioValues} onPortfolioRemoved={onPortfolioRemoved}/>
        {serverError && <h1>{serverError}</h1>}
        <CardList
          searchResult={searchResult}
          onPortfolioCreate={onPortfolioCreate}
        />
      </div>
    );
}

export default HomePage