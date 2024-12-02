FROM python:3.9-slim

WORKDIR /Rest

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY serverNew.py .

EXPOSE 5002

CMD ["python", "serverNew.py"]

