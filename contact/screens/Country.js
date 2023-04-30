import React, { useEffect, useState } from "react";

  
function Country() {
  const [country, setCountry] = useState("");
  const [cases, setCases] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");
  const [todayCases, setTodayCases] = useState("");
  const [deathCases, setDeathCases] = useState("");
  const [recoveredCases, setRecoveredCases] = useState("");
  const [userInput, setUserInput] = useState("");
  
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  
  const setData = ({
    country,
    cases,
    deaths,
    recovered,
    todayCases,
    todayDeaths,
    todayRecovered,
  }) => {
    setCountry(country);
    setCases(cases);
    setRecovered(recovered);
    setDeaths(deaths);
    setTodayCases(todayCases);
    setDeathCases(todayDeaths);
    setRecoveredCases(todayRecovered);
  };
  
  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };
  const handleSubmit = (props) => {
    props.preventDefault();
    fetch(`https://disease.sh/v3/covid-19/countries/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };
  
  return (
    <div className="">
      <h1 className="text-red-500 font-bold text-2xl m-2">COVID-19 CASES COUNTRY WISE</h1>
      <div className="flex">
        <form onSubmit={handleSubmit}>
          {/* input county name */}
          <input className="p-2 rounded" onChange={handleSearch} placeholder="Enter Country Name" />
          <br />
          <button className="bg-blue-700 text-white p-2 m-2 rounded" type="submit">Search</button>
        </form>
      </div>
  
      {/* Showing the details of the country */}
      <div className="">
        <p  className="bg-steal-500 p-4">Country Name : {country} </p>
  
        <p  className="bg-yellow-400 p-4">Cases : {cases}</p>
  
        <p  className="bg-red-400 p-4">Deaths : {deaths}</p>
  
        <p  className="bg-green-500 p-4">Recovered : {recovered}</p>
  
        <p  className="bg-yellow-400 p-4">Cases Today : {todayCases}</p>
  
        <p  className="bg-red-300 p-4">Deaths Today : {deathCases}</p>
  
        <p  className="bg-green-300 p-4">Recovered Today : {recoveredCases}</p>
      </div>
    </div>
  );
}
  
export default Country;
