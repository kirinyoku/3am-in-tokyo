import replicate
from flask import Flask, request
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
    'num_inference_steps': '',
    'guidance_scale': '',
    'scheduler': '', 
}

@app.route('/api', methods=['POST'])
def api():
  global inputs
  data = request.get_json()
  inputs['prompt'] = 'masterpiece, best quality, ultra-detailed, illustration, detailed light, photorealistic ' + data['prompt']
  inputs['negative_prompt'] = data['negativePrompt']
  inputs['num_inference_steps'] = data['inferenceSteps']
  inputs['guidance_scale'] = data['guidanceScale']
  inputs['scheduler'] = data['scheduler']

  return 'Success'

@app.route('/response', methods=['GET'])
def response():
  global inputs
  try: 
    res = version.predict(**inputs)[0]
  except:
    return res = 'error'
    
  return {'data': res}

if __name__ == '__main__':
   app.run()