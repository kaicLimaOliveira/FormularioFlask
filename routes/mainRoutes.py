from flask import Blueprint, request
from controllers import DashboardController

main = Blueprint('main', __name__, template_folder='templates', url_prefix='/')


@main.route('', methods=['GET'])
def index():
    return DashboardController.Dashboard().index()

@main.route('verify-code', methods=['POST'])
def verify_code():
    return DashboardController.Dashboard().verify_code(request)

@main.route('create', methods=['POST'])
def create():
    return DashboardController.Dashboard().create()