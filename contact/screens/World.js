import React, { useEffect, useState } from "react";

  
function World() {

  const [cases, setCases] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");
  const [todayCases, setTodayCases] = useState("");
  const [deathCases, setDeathCases] = useState("");
  const [recoveredCases, setRecoveredCases] = useState("");
  const [userInput, setUserInput] = useState("");
  
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  
  const setData = ({
   
    cases,
    deaths,
    recovered,
    todayCases,
    todayDeaths,
    todayRecovered,
  }) => {
    
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
    fetch(`https://disease.sh/v3/covid-19/all`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };
  
  return (
    <div className="">
      <h1 className="text-red-500 font-bold text-2xl" >COVID-19 CASES WORLD WIDE</h1>
      <div className="">
        
      </div>
  
      {/* Showing the details of the country */}
      <div className="">
      
  
        <p className="bg-yellow-500 p-4">Cases : {cases}</p>
  
        <p className="bg-red-500 p-4" >Deaths : {deaths}</p>
  
        <p  className="bg-green-500 p-4">Recovered : {recovered}</p>
  
        <p  className="bg-gray-200 p-4">Cases Today : {todayCases}</p>
  
        <p  className="bg-red-300 p-4">Deaths Today : {deathCases}</p>
  
        <p  className="bg-green-300 p-4">Recovered Today : {recoveredCases}</p>
      </div>
    </div>
  );
}
  
export default World;
