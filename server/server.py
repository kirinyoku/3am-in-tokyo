import replicate
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

model = replicate.models.get("cjwbw/anything-v3-better-vae")
version = model.versions.get("09a5805203f4c12da649ec1923bb7729517ca25fcac790e640eaa9ed66573b65")

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

@app.route('/api', methods=['POST'])
def api():
  global inputs
  data = request.get_json()
  inputs['prompt'] = data['prompt']
  inputs['negative_prompt'] = data['negativePrompt']

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