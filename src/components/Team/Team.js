import React from "react";
import { Link } from "react-router-dom";
import { teamMemberAll } from "../../data/teamData.js";
import "./Team.scss";

const Team = () => {
  const TeamMember = ({ teamMember }) => {
    const profile = teamMember.profile;
    return (
      <div className="col-md-4 col-12">
        <div className="team_member rounded">
          <img className="team_member_img" src={teamMember.img} alt="" />
          <div className="team_member_name">
            <span>{teamMember.name}</span>
          </div>
          <small>{teamMember.description}</small>
          <div className="team_member_profile">
            <Link to={profile}>
              <span>See Profile </span>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="team_section container_custom">
      <div className="team_container">
        <h1 className="team_title">Team Members</h1>
        <div className="team_members_wrapper">
          <div className="row">
            {teamMemberAll.map((teamMember) => (
              <TeamMember key={teamMember.id} teamMember={teamMember} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
