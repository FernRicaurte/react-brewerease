import { useState } from "react";
 import './Main.css'

export default function Main() {

  const [showinfo, setShowInfo] = useState(false)

  const handleClick = (evt) => {

      setShowInfo(!showinfo)

     }
  return (


    <section className="home-page">
        <h2>WELCOME</h2>
        {!showinfo ?
        <img src="https://i.imgur.com/HnGEAnl.png" alt="BrewerEase Logo" onClick={handleClick} />
          :
          <>
           <img src="https://i.imgur.com/HnGEAnl.png" alt="BrewerEase Logo" onClick={handleClick} />
          <p>
           <i>
            "Milk is for babies. When you grow up, you have to drink beer."
          </i> 
           <br/>- Arnold Schwarzenegger
          </p>
          </>
        }
    </section>
  )
}
