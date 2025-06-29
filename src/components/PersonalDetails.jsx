import portfolioData from "../portfolioData";

const personalDetails = portfolioData.personalDetails;

export default function PersonalDetails() {
  return (
    <section className="personal-details personal-card" aria-label="Personal Details">
      <div className="profile-pic-placeholder">
        <span className="profile-pic-gradient">
          <img src={personalDetails.userDisplayPic} alt="Profile" className="profile-pic" />
        </span>
      </div>
      <div className="personal-header-row">
        <div className="personal-accent-bar" aria-hidden="true"></div>
        <h2 className="personal-header">About Me</h2>
      </div>
      <h3 className="personal-name">{personalDetails.name}</h3>
      <p className="personal-role"><span className="personal-label">Role:</span> {personalDetails.role} <span className="personal-at">at</span> <span className="personal-company">{personalDetails.company}</span></p>
      <p className="personal-age"><span className="personal-label">Age:</span> {personalDetails.age}</p>
      <p className="personal-location"><span className="personal-label">Location:</span> {personalDetails.location}</p>
      <p className="personal-email"><span className="personal-label">Email:</span> <a href={`mailto:${personalDetails.email}`}>{personalDetails.email}</a></p>
      <p className="personal-bio">{personalDetails.bio}</p>
    </section>
  );
}
