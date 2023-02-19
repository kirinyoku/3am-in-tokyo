import replicate
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

model = replicate.models.get("cjwbw/anything-v4.0")
version = model.versions.get("42a996d39a96aedc57b2e0aa8105dea39c9c89d9d266caf6bb4327a1c191b061")

inputs = {
    'prompt': '',
    'negative_prompt': '',
    'width': 512,
    'height': 512,
    'num_outputs': 1,
    'num_inference_steps': 20,
    'guidance_scale': 7,
    'scheduler': "DPMSolverMultistep", 
}

@app.route('/form', methods=['POST'])
def form():
  global inputs
  data = request.get_json()
  inputs['prompt'] = data['prompt']
  inputs['negative_prompt'] = data['negativePrompt']

  return 'ok'

@app.route('/predict', methods=['GET'])
def predict():
  global inputs
  try:
    response = version.predict(**inputs)[0]
  except:
    predict()
  return {'data': response}

if __name__ == '__main__':
   app.run()