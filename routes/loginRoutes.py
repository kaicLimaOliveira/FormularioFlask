from flask import Blueprint, request

login = Blueprint('login', __name__, template_folder='templates', url_prefix='/login')

@login.route('')
def index():
    return '<h1>Login</h1>'
