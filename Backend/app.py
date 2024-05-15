from flask import Flask, request
import json
from flask_cors import CORS

port = 5000

app = Flask(__name__)
CORS(app)

@app.route('/',methods=['GET'])
def text():
    name = request.args.get('name')
    message = request.args.get('message')
    print(name)
    print(message)
    text = {name, message}
    text = list(text)
    json_string = json.dumps(text)
    return json_string

if __name__ == "__main__":
    app.run(debug=True, port=port)
