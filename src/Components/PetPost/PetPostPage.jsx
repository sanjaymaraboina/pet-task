import React from "react";
import { Helmet } from "react-helmet";
import "./PetPostPage.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import customerImage from "../../assets/girl2.png";
import Statusbar from "../utils/CircularProgressBar";
import Chat from "../../assets/chat.png";

const PetPostsPage = () => {
  const pets = [
    {
      name: "Rottweiler",
      age: "2 Years 8 Months",
      gender: "Female",
      location: "Ameerpet, Hyderabad (75 Miles)",
      image: "https://freeimghost.net/images/2025/05/09/Mask-group.png",
    },
    {
      name: "Rottweiler",
      age: "2 Years 8 Months",
      gender: "Female",
      location: "Ameerpet, Hyderabad (75 Miles)",
      image: "https://freeimghost.net/images/2025/05/09/Mask-group-1.png",
    },
    {
      name: "Rottweiler",
      age: "2 Years 8 Months",
      gender: "Female",
      location: "Ameerpet, Hyderabad (75 Miles)",
      image: "https://freeimghost.net/images/2025/05/09/Mask-group-2.png",
    },
  ];

  const profiles = [
    {
      fullName: "Ranjith Soma",
      petName: "Simba",
      location: "Yellareddy road Ameerpet, Hyderabad",
      match: 80,
    },
    {
      fullName: "Ranjith Soma",
      petName: "Snoopy",
      location: "Yellareddy road Ameerpet, Hyderabad",
      match: 80,
    },
    {
      fullName: "Ranjith Soma",
      petName: "Miro",
      location: "Yellareddy road Ameerpet, Hyderabad",
      match: 80,
    },
    {
      fullName: "Ranjith Soma",
      petName: "Venky",
      location: "Yellareddy road Ameerpet, Hyderabad",
      match: 80,
    },
  ];

  return (
    <div className="pet-page">
      <Helmet>
        <title>My Posts - Pet Adoption</title>
        <meta
          name="description"
          content="Manage your pet adoption posts and view matched adopter profiles."
        />
      </Helmet>

      <Navbar />

      <h1 className="title">My Posts</h1>

      <div className="button-group">
        <div className="btn-left">
          <button
            className="btn blue"
            aria-label="View pets available for adoption"
          >
            Adopt
          </button>
          <button className="btn green" aria-label="View rehomed pets">
            Rehomed
          </button>
        </div>
        <div>
          <Link to="/Addpost">
            <button className="btn orange" aria-label="Add a new pet post">
              + Add post
            </button>
          </Link>
        </div>
      </div>

      <div className="pet-grid">
        {pets.map((pet, idx) => (
          <div className="pet-card" key={idx}>
            <img src={pet.image} alt={pet.name} loading="lazy" />
            <div className="pet-info">
              <h2>{pet.name}</h2>
              <p>
                {pet.age}, {pet.gender}
              </p>
              <p className="location">{pet.location}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="profile-table">
        <h2>Matched Profiles</h2>
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Pet Name</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((profile, idx) => (
              <tr key={idx}>
                <td>
                  <div className="user-info">
                    <img src={customerImage} alt={profile.fullName} />
                    {profile.fullName}
                  </div>
                </td>
                <td>{profile.petName}</td>
                <td>{profile.location}</td>
                <td>
                  <div className="status">
                    <Statusbar
                      value={profile.match}
                      pathColor="orange"
                      trailColor="rgba(255, 165, 0, 0.2)"
                      textColor="orange"
                      textWeight="bold"
                    />

                    <button
                      className="msg-btn"
                      aria-label={`Message ${profile.fullName}`}
                    >
                      Message
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="chat">
          <img src={Chat} loading="lazy"></img>
        </div>
      </div>
    </div>
  );
};

export default PetPostsPage;
