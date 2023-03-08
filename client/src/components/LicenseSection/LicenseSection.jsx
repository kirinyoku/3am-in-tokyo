import React from 'react';
import './LicenseSection.scss';

const LicenseSection = () => {
  return (
    <section className="content-policy" id="content-policy">
      <h2 className="content-policy__title">Content policy</h2>
      <p className="content-policy__text">In your usage, you must adhere to our Content Policy:</p>
      <p className="content-policy__text">
        Do not attempt to create, upload, or share images that are not G-rated or that could cause
        harm.
      </p>
      <ul className="content-policy__list">
        <li>
          Hate:{' '}
          <span>
            hateful symbols, negative stereotypes, comparing certain groups to animals/objects, or
            otherwise expressing or promoting hate based on identity.
          </span>
        </li>
        <li>
          Harassment: <span>mocking, threatening, or bullying an individual.</span>
        </li>
        <li>
          Violence: <span>violent acts and the suffering or humiliation of others.</span>
        </li>
        <li>
          Self-harm:{' '}
          <span>suicide, cutting, eating disorders, and other attempts at harming oneself.</span>
        </li>
        <li>
          Sexual:{' '}
          <span>
            nudity, sexual acts, sexual services, or content otherwise meant to arouse sexual
            excitement.
          </span>
        </li>
        <li>
          Shocking:{' '}
          <span>
            bodily fluids, obscene gestures, or other profane subjects that may shock or disgust.
          </span>
        </li>
        <li>
          Illegal activity: <span>drug use, theft, vandalism, and other illegal activities.</span>
        </li>
        <li>
          Deception:{' '}
          <span>major conspiracies or events related to major ongoing geopolitical events.</span>
        </li>
        <li>
          Political:{' '}
          <span>
            politicians, ballot-boxes, protests, or other content that may be used to influence the
            political process or to campaign.
          </span>
        </li>
        <li>
          Public and personal health:{' '}
          <span>
            the treatment, prevention, diagnosis, or transmission of diseases, or people
            experiencing health ailments.
          </span>
        </li>
        <li>
          Spam: <span>unsolicited bulk content.</span>
        </li>
      </ul>
    </section>
  );
};

export default LicenseSection;
