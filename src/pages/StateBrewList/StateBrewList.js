import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

   

function StateBrewList() {
    const {state} = useParams()
    console.log(state)
    const [ brews, setBrews ] = useState([]);
    const fetchBrews = async () => {
        try {
            // 1) use the fetch function to make an HTTP request to SWAPI
            const response = await fetch('https://api.openbrewerydb.org/v1/breweries?by_state=' + state);
            // 2) take the response response object that gets returned from the fetch function parse it's incoming json body
            const brewData = await response.json(); 
            // 3) set the ships state with the returned JSON data
            setBrews(brewData);
        } catch (error) {
        }
    };

    useEffect(() => {
        fetchBrews();
    }, [state]);
    console.log(brews)
  return (
    <>
    <h1>{state} breweries</h1>
    {brews.map(brew => {
        return (
            <Link to={`/brewery/${brew.name}`} key={brew.id} state = {{brew:brew}}>
            <div>
                <p>
                {brew.name}
                </p>
            </div>
            </Link>
        )
    })}
   

    </>
  )
}

export default StateBrewList








