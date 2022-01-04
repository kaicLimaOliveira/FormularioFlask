from flask import render_template, request, redirect, session, url_for


class Dashboard:
    def __init__(self):
        pass

    def index(self):
        return render_template('dashboard.html')

    def verify_code(self, request):
        verify_code = request.get_json()
        code = int(verify_code['code'])

        registered_codes = [1, 4, 5, 6, 7, 8, 12, 25, 34]

        if code in registered_codes:
            return {
                'Response': 'fulfilled'
            }
        else:
            return{
                'Response': 'reject'
            }
            
