import React from 'react';
import './About.css';

function AboutCard({ heading, photoSrc, alt, children }) {
  return (
    <section className="about-card" aria-label={heading}>
      <div className="about-card-header">
        <div className="about-avatar" aria-hidden="true">
          <img src={photoSrc} alt={alt} />
        </div>
        <h2 className="about-card-title">{heading}</h2>
      </div>

      <div className="about-card-body">{children}</div>
    </section>
  );
}

export default function About() {
  return (
    <div className="about-page">
      <div className="about-grid">
        <AboutCard
          heading="Haladhara Svāmī Mahārāja"
          photoSrc="/icons/hindi-card.jpg"
          alt="Haladhara Svāmī Mahārāja"
        >
          <p>
            His Haladhara Svāmī Mahārāja was born and brought up in Odisha, India. He came into contact
            with the devotees at ISKCON Bhubaneswar temple in 1992 and was initiated in 1994,
            receiving the name Halayudha Dasa by Sri Srimad Goura Govinda Swami Maharaj.
          </p>
          <p>
            Soon after joining the temple as a full-time devotee, he rendered service in the traveling
            sankirtana party. He also served as the head pujari of Sri Sri Krishna-Balarama Temple in
            Bhubaneswar, Odisha.
          </p>
          <p>
            Following the personal instructions of his spiritual master, he began preaching the
            teachings of Srimad Bhagavatam in Oriya. His Holiness Haladhara Swami primarily preaches in
            Oriya, Hindi, and English.
          </p>
          <p>
            20 March 2016 Maharaj got the renounced order of sannyasa by His Holiness Radha Govinda Goswami Maharaj.
          </p>
        </AboutCard>
      </div>
    </div>
  );
}
