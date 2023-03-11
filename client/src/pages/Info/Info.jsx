import React from 'react';
import example from '../../assets/example.png';
import './Info.scss';

const Info = () => {
  return (
    <main className="info">
      <div className="info__row">
        <h2 className="info__title">Readme</h2>
        <p className="info__text">
          weights from:{' '}
          <a href="https://openai.com/dall-e-2/" rel="noreferrer" target="_blank">
            openai.com/dall-e-2
          </a>
        </p>
        <article className="info__article">
          <h1>
            <b>DALL-E</b>
          </h1>
          <p>
            DALL·E 2 is a new AI system that can create realistic images and art from a description
            in natural language. DALL·E 2 can create original, realistic images and art from a text
            description. It can combine concepts, attributes, and styles.
          </p>
          <p>
            DALL·E 2 has learned the relationship between images and the text used to describe them.
            It uses a process called “diffusion,” which starts with a pattern of random dots and
            gradually alters that pattern towards an image when it recognizes specific aspects of
            that image.
          </p>
          <p>
            e.g. <b>An astronaut riding a horse in photorealistic style.</b>
          </p>
          <p>
            <img width="" height="" src={example} alt="example" />
          </p>
          <pre>
            <code>An astronaut riding a horse in photorealistic style.</code>
          </pre>
        </article>
      </div>
    </main>
  );
};

export default Info;
