import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-page">

      {/* ── Section 1 ── */}
      <section className="about-section">
        <div className="about-section-inner">
          <div className="about-text">
            <h2 className="about-section-title">His Holiness Haladhara Swami</h2>
            <p>
              His Holiness Haladhara Swami was born and brought up in Odisha, India. He came into
              contact with the devotees at ISKCON Bhubaneswar temple in 1992 and was initiated in
              1994, receiving the name Halayudha Dasa. Soon after joining the temple as a full-time
              devotee, he rendered service in the traveling sankirtana party.
            </p>
            <p>
              He also served as the head pujari of Sri Sri Krishna-Balarama Temple in Bhubaneswar,
              Odisha. Following the personal instructions of his spiritual master, he began preaching
              the teachings of Srimad Bhagavatam in Oriya.
            </p>
            <p>
              His Holiness Haladhara Swami primarily preaches in Oriya, Hindi, and English.
            </p>
          </div>
          <div className="about-image-wrap">
            <img
              src="/images/Gurudeva1.png"
              alt="His Holiness Haladhara Swami"
              className="about-photo"
            />
          </div>
        </div>
      </section>

      <div className="about-divider" />

      {/* ── Section 2 ── */}
      <section className="about-section about-section--reverse">
        <div className="about-section-inner">
          <div className="about-text">
            <h2 className="about-section-title">Preaching Mission</h2>
            <p>
              His selfless mood, loving service, and inspiring dedication led to his acceptance of
              the renounced order of life, sannyasa, on March 20th, 2016, from His Holiness Radha
              Govinda Swami Maharaja at the Sri Sri Krishna-Balarama Temple in ISKCON Bhubaneswar.
            </p>
            <p>
              His Holiness Haladhara Swami frequently travels to various European and Asian countries
              to propagate the glories and teachings of His Divine Grace A.C. Bhaktivedanta Swami
              Prabhupada and his revered spiritual master, Srila Gour Govinda Swami.
            </p>
            <p>
              Throughout his 30 years of devotional life, His Holiness Haladhara Swami has exemplified
              the principle of &lsquo;simple living, high thinking&rsquo; and strongly emphasizes the
              utmost importance of serving the spiritual master (sri guru-seva) and chanting the holy
              names of the Lord (sri nama-seva) without compromise.
            </p>
          </div>
          <div className="about-image-wrap">
            <img
              src="/images/Gurudeva2.png"
              alt="Preaching Mission"
              className="about-photo"
            />
          </div>
        </div>
      </section>

      <div className="about-divider" />

      {/* ── Section 3 ── */}
      <section className="about-section about-section--centered">
        <h2 className="about-section-title">Founder of Taptajivanam</h2>
        <p>
          In 2019, during His Holiness Haladhara Swami&rsquo;s European tour in France, at ISKCON New
          Mayapura, he expressed his cherished desire to create a platform where all audio lectures of
          his spiritual master would be available for everyone. He aimed to explain the mission of his
          spiritual master Śrī Śrīmad Gaura Govinda Svāmī Mahārāja, emphasizing that everything is present in Srila Prabhupada&rsquo;s books
          and that there is no need to seek teachings outside of ISKCON.
        </p>
        <p>
          In 2020, with the assistance of his disciples and followers, His Holiness Haladhara Swami
          curates daily selections of quotes and lectures. These lectures are then transformed into
          small audio clips that capture the essence of his revered Gurudeva&rsquo;s teachings.
        </p>
        <a
          href="https://www.taptajivanam.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="about-external-link"
        >
          Visit Taptajivanam &rarr;
        </a>
      </section>

    </div>
  );
}
