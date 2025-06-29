import React from "react";
import portfolioData from "../portfolioData";

export default function CertificationsAwards() {
  const { certifications = [], awards = [] } = portfolioData;
  return (
    <section id="certifications-awards" className="certifications-awards-section" aria-labelledby="certs-header">
      <h2 id="certs-header" className="section-header">Certifications</h2>
      <ul className="cert-list" aria-label="Certifications">
        {certifications.map((cert) => (
          <li key={cert.credentialId} className="cert-card" aria-label={cert.title + ' from ' + cert.issuer}>
            <div className="cert-title-row">
              <span className="cert-title">{cert.title}</span>
              {cert.issuer && <span className="cert-issuer">{cert.issuer}</span>}
            </div>
            {cert.credentialId && (
              <div className="cert-id">
                <span className="cert-label">Credential ID:</span> <span>{cert.credentialId}</span>
              </div>
            )}
          </li>
        ))}
      </ul>
      <hr className="cert-award-divider" aria-hidden="true" />
      <h2 className="section-header">Awards</h2>
      <ul className="award-list" aria-label="Awards">
        {awards.map((award) => (
          <li key={award.title + award.date} className="award-card" aria-label={award.title + ' from ' + award.issuer}>
            <div className="award-title-row">
              <span className="award-title">{award.title}</span>
              {award.date && <span className="award-date">{award.date}</span>}
              {award.issuer && <span className="award-issuer">{award.issuer}</span>}
            </div>
            <div className="award-desc">{award.description}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
