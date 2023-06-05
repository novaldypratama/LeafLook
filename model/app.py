import os
import tensorflow as tf
import numpy as np
from tensorflow import keras
from skimage import io
from tensorflow.keras.preprocessing import image
from PIL import Image


# Flask utils
from flask import Flask, redirect, url_for, request, render_template
from flask_cors import CORS
from werkzeug.utils import secure_filename
from gevent.pywsgi import WSGIServer

# Define a flask app
app = Flask(__name__)
CORS(app)

# Model saved with Keras model.save()

# You can also use pretrained model from Keras
# Check https://keras.io/applications/


@app.route('/', methods=['GET'])
def index():
    return "gege!"


@app.route('/predict', methods=['GET', 'POST'])
def predict():
    if request.method == 'POST':
        file = request.files['file']
        file.save('uploaded_image.jpg')

        model = tf.keras.models.load_model('PlantDNet.h5', compile=False)
        print('Model loaded. Check http://127.0.0.1:5000/')

        def model_predict(img_path, model):
            img = image.load_img(img_path, grayscale=False, target_size=(64, 64))
            show_img = image.load_img(img_path, grayscale=False, target_size=(64, 64))
            x = image.img_to_array(img)
            x = np.expand_dims(x, axis=0)
            x = np.array(x, 'float32')
            x /= 255
            preds = model.predict(x)
            return preds

        # Make prediction
        preds = model_predict('uploaded_image.jpg', model)
        print(preds[0])

        disease_class = ['Pepper__bell___Bacterial_spot', 'Pepper__bell___healthy', 'Potato___Early_blight',
                         'Potato___Late_blight', 'Potato___healthy', 'Tomato_Bacterial_spot', 'Tomato_Early_blight',
                         'Tomato_Late_blight', 'Tomato_Leaf_Mold', 'Tomato_Septoria_leaf_spot',
                         'Tomato_Spider_mites_Two_spotted_spider_mite', 'Tomato__Target_Spot',
                         'Tomato__Tomato_YellowLeaf__Curl_Virus', 'Tomato__Tomato_mosaic_virus', 'Tomato_healthy']
        a = preds
        ind = np.argmax(a)
        conf = round(preds[0][ind] * 100)
        result = disease_class[ind]
        if (conf < 80):
            result = "Bukan tanaman"
        print('Prediction:', result)
        print('Confidence:', conf)
        return {"predict": result, "confidence": conf}


@app.route("/data", methods=["GET", "POST"])
# @jit
def main():
    model =tf.keras.models.load_model('PlantDNet.h5',compile=False)
    print('Model loaded. Check http://127.0.0.1:5000/')


    def model_predict(img_path, model):
        img = image.load_img(img_path, grayscale=False, target_size=(64, 64))
        show_img = image.load_img(img_path, grayscale=False, target_size=(64, 64))
        x = image.img_to_array(img)
        x = np.expand_dims(x, axis=0)
        x = np.array(x, 'float32')
        x /= 255
        preds = model.predict(x)
        return preds

    test = "test.JPG"
    print("cek1")

    preds = model_predict(test, model)
    print(preds[0])

    disease_class = ['Pepper__bell___Bacterial_spot', 'Pepper__bell___healthy', 'Potato___Early_blight',
                         'Potato___Late_blight', 'Potato___healthy', 'Tomato_Bacterial_spot', 'Tomato_Early_blight',
                         'Tomato_Late_blight', 'Tomato_Leaf_Mold', 'Tomato_Septoria_leaf_spot',
                         'Tomato_Spider_mites_Two_spotted_spider_mite', 'Tomato__Target_Spot',
                         'Tomato__Tomato_YellowLeaf__Curl_Virus', 'Tomato__Tomato_mosaic_virus', 'Tomato_healthy']
    a = preds[0]
    ind=np.argmax(a)
    print('Prediction:', disease_class[ind])
    result=disease_class[ind]
    return result


if __name__ == '__main__':
    # app.run(port=5002, debug=True)

    # Serve the app with gevent
    http_server = WSGIServer(('', 5000), app)
    http_server.serve_forever()