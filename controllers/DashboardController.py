from flask import render_template, request, redirect, session, url_for


class Dashboard:
    def __init__(self):
        pass

    def index(self):
        return render_template('dashboard.html')

    def verify_code(self, request):
        verify_code = request.get_json()
        try:
            code = int(verify_code['code'])
        except Exception as e:
            print(e)

        registered_codes = [1, 4, 5, 6, 7, 8, 12, 25, 34]

        if code in registered_codes:
            return {
                'Response': 'fulfilled'
            }
        elif code not in registered_codes:
            return {
                'error': 'reject'
            }
        else:
            return{
                'Response': 'Erro 404 NOT FOUND'
            }
        
    def create(self):
        pass    
