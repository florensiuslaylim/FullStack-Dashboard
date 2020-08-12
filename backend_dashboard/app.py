from flask import Flask
from flask_restful import Resource, Api
from flask_jwt import JWT
from flask_cors import CORS

from security import authenticate, identity
from resources.user import UserRegister

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'super-secret'
api = Api(app)
cors = CORS(app)

# CORS(app, resources={ r'/*': {'origins': *}}, supports_credentials=True)

@app.before_first_request
def create_tables():
    db.create_all()

jwt = JWT(app, authenticate, identity )

api.add_resource(UserRegister, '/register')

if __name__ == '__main__':
    from db import db
    db.init_app(app)
    app.run(debug=True)
