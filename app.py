import os
from tabnanny import filename_only

import numpy as np
from flask import Flask, render_template, request, send_from_directory
from keras.models import load_model
from keras.preprocessing import image

app = Flask(__name__,template_folder='templates')

APP_ROOT = os.path.dirname(os.path.abspath(__file__))

# for main route, serve index.html file from frontend
@app.route("/")
def index():
    return render_template("index.html")

# route for uploaing the image
@app.route("/upload", methods=["POST"])
def upload():
    target = os.path.join(APP_ROOT, 'images/')
    print(target)
    if not os.path.isdir(target):
            os.mkdir(target)
    else:
        print("Couldn't create upload directory: {}".format(target))
    print(request.files.getlist("file"))

    # saving uploaded file
    for upload in request.files.getlist("file"):
        print(upload)
        print("{} is the file name".format(upload.filename))
        filename = upload.filename
        destination = "/".join([target, filename])
        print("Accept incoming file:", filename)
        print("Save it to:", destination)
        upload.save(destination)
        import numpy as np
        from keras.models import load_model
        from keras.preprocessing import image
        new_model = load_model('covidPredict.h5')
        new_model.summary()
        test_image = image.load_img('images\\'+filename,target_size=(64,64))
        test_image = image.img_to_array(test_image)
        test_image = np.expand_dims(test_image, axis = 0)
        result = new_model.predict(test_image)
        if result[0][0] == 0:
        
            prediction = 'Patient is Corona Positive'
        else:
            prediction = 'Patient is Healthy'

    return render_template("result.html",image_name=filename, text=prediction)

# route for upload
@app.route('/upload/<filename>')
def send_image(filename):
    return send_from_directory("images", filename)

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')

