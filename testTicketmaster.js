// import React, {useState, useEffect} from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
//   <h4 id="scrollspyHeading1">First heading</h4>
//   <p>...</p>
//   <h4 id="scrollspyHeading2">Second heading</h4>
//   <p>...</p>
//   <h4 id="scrollspyHeading3">Third heading</h4>
//   <p>...</p>
//   <h4 id="scrollspyHeading4">Fourth heading</h4>
//   <p>...</p>
//   <h4 id="scrollspyHeading5">Fifth heading</h4>
//   <p>...</p>
// </div>
// const Ticketmaster = (props) => {
//   const [events, setEvents] = usestate('');


//   //indianapolis coords= 39.791000,-86.148003
//   //Fort wayne coords= 41.093842,-85.139236
//   const handleClick = () => {
//     fetch(`https://app.ticketmaster.com/discovery/v2/events.json?radius=50&latlong=${props.lat},${props.lng}&apikey=AicDIwZULrFyeiU2PUc8Ladxa9R3YsRx&size=20&date.asc&images`)
//     .then(res => res.json())
//     .then(res =>{
//       setEvents(res._embedded.events[0].name)
//       // setImages(res._embedded.events[0].images[0].url)
//     })
//   }
// return (
//   <div>
//     <p>{events}</p>
//     <button onClick={handleClick}>Events</button>
//   </div>
//   )
// }

// export default Ticketmaster;


 