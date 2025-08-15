// import React from 'react'

// const owners = [
//     {
//       name: "Aditya Kathe",
//       designation: "TYCSE",
//       id: "22510061",
//       img: "WhatsApp Image 2024-08-05 at 10.38.39_e942f08c.jpg",
//     },
//     {
//       name: "Anupam Kamble",
//       designation: "TYCSE",
//       id: "22510041",
//       img: "voicelogo.jpg",
//     },
//     {
//       name: "Abhay Jadhav",
//       designation: "TYCSE",
//       id: "22510060",
//       img: "WhatsApp Image 2024-08-05 at 10.39.10_2f6cb2b9.jpg",
//     },
//   ];

// function About() {

//     return (
//         <div className="container my-5">
//           <div className="row align-items-center bg-light p-4 rounded shadow">
//             <div className="col-md-6">
//               <img
//                 src="aboutus.jpg"
//                 alt=" "
//                 className="img-fluid rounded"
//                 width="100%"
//               />
//             </div>
//             <div className="col-md-6">
//               <h2 className="mb-3">About Us</h2>
//               <p>
//                 Welcome to <strong>Sign translation</strong>, where we blend the finest
//                 ingredients with our passion for culinary excellence. Located in the
//                 heart of Sangli, our restaurant offers a unique dining experience
//                 that celebrates quality food content.
//               </p>
//               <p>
//                 Founded in 2024 by the AAA team, our goal has always been to
//                 provide an unforgettable experience with every visit. Our menu
//                 features a diverse range of dishes, each crafted with care and
//                 attention to detail, using only the freshest local ingredients.
//               </p>
//               <p>
//                 At GET SET RESTO, we believe in not just serving food but creating
//                 memories. Our dedicated team is committed to providing outstanding
//                 service and ensuring that every guest leaves with a smile.
//               </p>
//             </div>
//           </div>
    
//           <h2 className="text-center mt-5">Meet Our Owners</h2>
//           <div className="row mt-4">
//             {owners.map((owner, index) => (
//               <div key={index} className="col-md-4">
//                 <div className="card shadow border-0">
//                   <img
//                     src={owner.img}
//                     className="card-img-top"
//                     alt={owner.name}
//                   />
//                   <div className="card-body text-center">
//                     <h5 className="card-title">{owner.name}</h5>
//                     <p className="card-text">{owner.designation}</p>
//                     <p className="card-text text-muted">ID: {owner.id}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       );

// }

// export default About ;

import React from 'react';
import './about.css';

const owners = [
  {
    name: "Aditya Kathe",
    designation: "TYCSE",
    id: "22510061",
    img: "/abhi.jpg",
  },
  {
    name: "Anupam Kamble",
    designation: "TYCSE",
    id: "22510041",
    img: "/abhi.jpg",
  },
  {
    name: "Abhay Jadhav",
    designation: "TYCSE",
    id: "22510060",
    img: "/abhi.jpg",
  },
];

function About() {
  return (
    <div className="about-container">
      <div className="about-section">
        <div className="about-image">
          <img src="/aboutus.png" alt="About Us" />
        </div>
        <div className="about-content">
          <h2>About Our Mission</h2>
          <p>
            Welcome to <strong>Sign Translation</strong>, a platform committed to breaking communication
            barriers through <strong>Indian Sign Language (ISL)</strong>. Our vision is to empower the
            hearing and speech impaired community by providing real-time, AI-powered
            translation between spoken language and ISL gestures.
          </p>
          <p>
            Established in 2024 by a passionate group of engineers, our initiative focuses
            on inclusivity, accessibility, and innovation. We aim to create a world where
            sign language users feel heard, included, and connected.
          </p>
          <p>
            Join us on our journey to create meaningful technology with real human impact.
            With deep respect for diversity and culture, we strive to make ISL mainstream
            and easily understood by all.
          </p>
        </div>
      </div>

      <h2 className="owners-heading">Meet Our Founders</h2>
      <div className="owner-cards">
        {owners.map((owner, index) => (
          <div key={index} className="owner-card">
            <img src={owner.img} alt={owner.name} className="owner-image" />
            <div className="owner-info">
              <h4>{owner.name}</h4>
              <p>{owner.designation}</p>
              <span>ID: {owner.id}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
