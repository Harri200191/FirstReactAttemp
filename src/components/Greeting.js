import React from "react";

function Greeting(){
    const tim = new Date;
    const hrs = tim.getHours();
    let timeofday;
  
    if (hrs<12){
      timeofday = "Morning!";
    }
    else if (hrs>=12 && hrs<17){
      timeofday = "Afternoon!";
    }
    else{
      timeofday = "Night";
    }

    return (
        <h2 className="greeting">Good {timeofday}</h2>
    )
}

export default Greeting;