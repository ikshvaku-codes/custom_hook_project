import {useEffect, useState} from "react"

export default function useCurrencyInfo(currency){
    const[currencyData, setCurrencyData] = useState([])
    
    useEffect(()=>{
        console.log("Inside UseEffect")
        //console.log("Inside async Func")

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`)
        .then( (responseData) => responseData.json())
        .then( (responseData) => setCurrencyData(responseData[currency]))
        
        // console.log(`Inside Custom Hook`)
        // console.log(currencyData.width)
        // console.log(currencyData) 
        
    },[currency, currencyData, setCurrencyData])

    console.log(`Inside Custom Hook outside useEffect`)
    console.table(currencyData)
    return currencyData
}

