FROM python:3.9

WORKDIR /app

ENV FLASK_APP=app.py
ENV FLASK_ENV=development
ENV FLASK_RUN_HOST=0.0.0.0

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

EXPOSE 5000

CMD gunicorn -b 0.0.0.0:5000 app:app