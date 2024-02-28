# Covid Prediction

## COVID-19 detection from X-ray scans of the chest using CNN
---

## about project
the unbeatable problem we faced in the second wave of covid was a high amount of people rushing to test if they were covid positive or not. people had to wait for hours to get tested and shortage of COVID testing kits was an issue too. we have come up with an AI model that solves all these problems. it requires only the x-ray of the chest to find out if you are covid positive or not with 95% accuracy. if diagnosed person is affected by COVID , person will be provided with instructions on what they should do as immediate action. and for additional care link of expert guideline on covid will be given. if the person is diagnosed covid negative he will be given instruction on what they should do to remain unaffected by covid. we are planning to add feature that will suggest nearest clinic or hospital near them.
<br/>

### What is COVID-19?

COVID-19 is the infectious disease caused by the most recently
discovered corona virus. This new virus and disease were unknown
before the outbreak began in Wuhan, China, in December 2019.

<br/>

### What are the symptoms of COVID-19?

The most common symptoms of COVID-19 are fever, tiredness, and
dry cough. Some patients may have aches and pains, nasal
congestion, runny nose, sore throat or diarrhea. These symptoms are
usually mild and begin gradually. 

<br/>

## <strong> Note: Please do not claim diagnostic performance of a model in the absence of a clinical study!  </strong>

# Getting Started

## Prerequisites
- python3
    

## clone or download
```terminal
$ git clone https://github.com/KMJ-007/AU-Hackathon.git
$ pip install -r requirements.txt
```

## folder structure
```terminal
images
templates
    index.html
    result.html
test
    covid
    NonCovid
app.py
covidPredict.h5
Readme.md
requirement.md
Resnet_cnn.py
script.js
style.js
```

## Run the project
```python
python app.py
```
## What challenges we faced in building project?
- Dataset for chest x-ray's were not available, and we wanted to find the specific covid inflected chest X-ray, and Non-covid x-ray, this was the biggest challenges we had, for solution we combined different dataset for making our own dataset.

## Technologies
- ![TensorFlow](https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white)
- ![Keras](https://img.shields.io/badge/Keras-%23D00000.svg?style=for-the-badge&logo=Keras&logoColor=white)
- ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
  
  <!-- demo video/images of projects -->
![](demo/Screenshot%202022-03-27%20160237.png)
![](demo/Screenshot%202022-03-27%20160311.png)
![](demo/Screenshot%202022-03-27%20160335.png)

  ## Team Name: Mokey

- [Om Delvadia](mailto:om.delvadia02@gmail.com)
- [Nishit Kareliya](mailto:nishit.s.027@gmail.com)
