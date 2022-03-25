import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
// import Contacts from "./components/Contacts";
import data from "./data";


export default function App() {
  const cardElement = data.map(item => {
    return (
      <Card
        key={ item.id }
        item={ item }
      />
    )
  }
  )
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card-list">
        { cardElement }
      </section>
      {/* <Contacts /> */ }
    </div>
  )
}





// export default function App() {
//   const date = new Date();
//   const hours = date.getHours();
//   let timeOfDay;

//   if (hours >= 6 && hours < 12) {
//     timeOfDay = "morning"
//   } else if (hours >= 12 && hours < 6) {
//     timeOfDay = "afternoon"
//   } else { timeOfDay = "evening" }

//   return (
//     <>
//       <h1>Good { timeOfDay }!</h1>
//     </>
//   )
// }


// import React from "react";
// import Contacts from "./components/Contacts"

// export default function App() {
//   return (
//     <div className="contacts">
//       <Contacts
//         img="./images/cat1.jpg"
//         name="Mr. Whiskerson"
//         phone="(212) 555-1234"
//         email="mr.whiskaz1@catnap.meow"
//       />
//       <Contacts
//         img="./images/cat2.jpg"
//         name="Fluffykins"
//         phone="(212) 555-2345"
//         email="fluff@me.com"
//       />
//       <Contacts
//         img="./images/cat3.jpg"
//         name="Felix"
//         phone="(212) 555-4567"
//         email="thecat@hotmail.com"
//       />
//       <Contacts
//         img="./images/cat4.jpg"
//         name="Pumpkin"
//         phone="(212) 555-4123"
//         email="mr.whiskaz4@catnap.meow"
//       />
//     </div>
//   )
// }

// ***turn the array into h3 elements

// export default function App() {
//   const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]

//   return (
//     <>
//       <h3>{ colors }</h3>
//     </>
//   )
// }


