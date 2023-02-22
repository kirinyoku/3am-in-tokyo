import replicate
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

model = replicate.models.get("cjwbw/pastel-mix")
version = model.versions.get("0c9ff376fe89e11daecf5a3781d782acc69415b2f1fa910460c59e5325ed86f7")

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
  inputs['prompt'] = 'masterpiece, best quality, ultra-detailed, illustration, portrait, ' + data['prompt']
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
    res = 'error'
    
  return {'data': res}

if __name__ == '__main__':
   app.run()