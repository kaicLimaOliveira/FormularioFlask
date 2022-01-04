from flask import Flask
from routes import loginRoutes, mainRoutes
from flask_cors import CORS

app = Flask(__name__)
app.register_blueprint(loginRoutes.login)
app.register_blueprint(mainRoutes.main)
CORS(app)

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5001)