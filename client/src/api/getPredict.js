const getPredict = ({ prompt, size }) => {
  return fetch('https://api-3am-in-tokyo-kirinyoku.vercel.app/api/v1/dall-e', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt, size }),
  }).then((data) => data.json());
};

export default getPredict;
