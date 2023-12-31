from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

@app.route('/api/data', methods=['GET'])
def get_data():
    data = {
        "meta": {
            "title": "Hola",
            "subtitle": "Lo logre",
            "image": {
                    "src": "/images/home-hero-macbook.png",
                    "width": 768,
                    "height": 449
                }
        }
    }
    
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)