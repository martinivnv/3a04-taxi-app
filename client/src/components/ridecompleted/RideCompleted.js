import { useState } from "react";
import PageTemplate from "../pageTemplate/PageTemplate";





const RideCompleted = () => {
    const [fare, setfare] = useState("");
    const [points, setpoints] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  
   

    return (
		<PageTemplate>
			<div
				style={{
					borderStyle: "solid",
					borderWidth: "medium",
					borderColor: "#FF7518",
					padding: "0 2em 2em 2em",
					width: "290px",
          
				}}
				className="rounded-corners"
			>
              
<body>
  <h1>Ride Completed!</h1>
  <p>Thank you for riding with Qurb! We hope you had a great ride!</p>
<div style={{ lineHeight: 0.5}}>
<h2>Calculated Price</h2>
  <p>$26.60</p>
</div>
 <div style={{ lineHeight: 0.5}}>
 <h2>Points Earned: </h2>
  <p>12</p>
 </div>
 
  <h2 >Rate your fellow riders:</h2>
  <form onSubmit={handleSubmit}
	style={{ display: "flex", flexDirection: "column" , gap: "0.5em"  }}
            >
    <label for="rider1">Rider 1:</label>
    <select id="rider1" name="rider1">
      <option value="5">5 stars</option>
      <option value="4">4 stars</option>
      <option value="3">3 stars</option>
      <option value="2">2 stars</option>
      <option value="1">1 star</option>
    </select>
   
    <label for="rider2">Rider 2:</label>
    <select id="rider2" name="rider2">
      <option value="5">5 stars</option>
      <option value="4">4 stars</option>
      <option value="3">3 stars</option>
      <option value="2">2 stars</option>
      <option value="1">1 star</option>
    </select>
    <label for="rider3">Rider 3:</label>
    <select id="rider3" name="rider3">
      <option value="5">5 stars</option>
      <option value="4">4 stars</option>
      <option value="3">3 stars</option>
      <option value="2">2 stars</option>
      <option value="1">1 star</option>
    </select>
   
    
    <button type="submit" style={{ fontSize: "1em" }}>
	Submit
	</button>
  </form>
  
  
</body>

            </div>
            </PageTemplate>
	);
};

export default RideCompleted;