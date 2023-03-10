const getPredict = async ({ prompt, size }) => {
  const response = await fetch('https://api-3am-in-tokyo-kirinyoku.vercel.app/api/v1/dall-e', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt, size }),
  });

  if (!response.ok) {
    throw new Error('Request failed');
  }

  const data = await response.json();
  return data.data;
};

export default getPredict;
