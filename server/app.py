from flask import *
import os
from config import *

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload():
   file = request.files['file']
   filepath = os.path.join(PATH, file.filename)
   file.save(filepath)
   return jsonify({"message": "File uploaded successfully", "path": filepath}), 200

@app.route('/files', methods=['GET'])
def files():
    dir = []
    files = []
    founded = os.listdir(PATH)
    for f in founded :
        full_path = os.path.join(PATH, f)
        if os.path.isdir(full_path):
            dir.append(f)
        else:
            files.append(f)
    return jsonify({"content": {"directories" : dir, "files" : files}}), 200


if __name__ == '__main__':
   app.run(host='0.0.0.0', port=8000, debug=True)