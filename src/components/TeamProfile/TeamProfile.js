import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { teamMemberAll } from "../../data/teamData.js";
import "./TeamProfile.scss";

const TeamProfile = () => {
  const [memberProfile, setMemberProfile] = useState();
  const { profile } = useParams();
  useEffect(() => {
    const memberData = teamMemberAll.find((data) => data.profile === profile);
    setMemberProfile(memberData);
  });
  return (
    <section className="team_profile_section container_custom">
      <div className="team_profile_container">
        <div className="team_profile_wrapper">
          <div className="team_profile_img_wrapper">
            <img
              className="team_profile_img img-fluid"
              src={memberProfile?.img}
              alt=""
            />
          </div>
          <div className="team_profile_main">
            <h2>{memberProfile?.name}</h2>
            <p>{memberProfile?.designation}</p>
            <div className="details_short_wrapper">
              <small>{memberProfile?.description}</small>
            </div>
          </div>
        </div>

        <div className="details_long_wrapper">
          <div>
            <p> {memberProfile?.name}'s story </p>
          </div>
          <div>{memberProfile?.description}</div>
        </div>
        {/* {memberProfile?.name} <br />
        {memberProfile?.designation} <br />
        {memberProfile?.description} */}
      </div>
    </section>
  );
};

export default TeamProfile;
