from flask import Flask, send_file, jsonify
import os
from config import *
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/upload', methods=['POST'])
def upload():
    filelist = request.files.getlist('file')
    if filelist == [] :
        return jsonify({'message': 'There is no files'}), 400
    save_file = []
    for file in filelist:
        file_path = os.path.join(PATH, file.filename)
        file.save(file_path)
        save_file.append(file.filename)
    return jsonify({'message': 'Files uploaded successfully', 'files': save_file}), 201

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

@app.route('/files/<name>', methods=['GET'])
def get_file_by_name(name):
    absolute_path = os.path.join(PATH, name)
    return send_file(absolute_path, as_attachment=True) # descarga

if __name__ == '__main__':
   app.run(host='0.0.0.0', port=8000, debug=True)