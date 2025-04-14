import axios from "axios"
import { CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch } from "./company"

interface SearchResponce {
    data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
    try{
        const data = await axios.get<SearchResponce>(
            `https://financialmodelingprep.com/stable/search-symbol?query=${query}&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return data;
    } catch(error){
        console.error("Error message: ", error)
        return "Error"
    }
    
}

export const getCompanyProfile = async (symbol: string) => {
    try{
        const data = await axios.get<CompanyProfile[]>(
            `https://financialmodelingprep.com/stable/profile?symbol=${symbol}&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return data;
    } catch(error){
        console.error("Error message: ", error)
    }
    
}

export const getCompanyKeyMetrics = async (symbol: string) => {
    try{
        const data = await axios.get<CompanyKeyMetrics[]>(
            `https://financialmodelingprep.com/stable/key-metrics-ttm?symbol=${symbol}&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return data;
    } catch(error){
        console.error("Error message: ", error)
    }
    
}

export const getCompanyIncomeStatement = async (symbol: string, limit: number) => {
    try{
        const data = await axios.get<CompanyIncomeStatement[]>(
            `https://financialmodelingprep.com/stable/key-metrics-ttm?symbol=${symbol}&limit=${limit}&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return data;
    } catch(error){
        console.error("Error message: ", error)
    }
    
}