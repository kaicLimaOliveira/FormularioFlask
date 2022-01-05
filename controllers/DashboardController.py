from flask import render_template, request, redirect, session, url_for


class Dashboard:
    def __init__(self):
        pass

    def index(self):
        return render_template('dashboard.html')

    def verify_code(self, req):
        try:
            verify_code = req.get_json()
            code = ''
            try:
                code = int(verify_code['code'])
            except Exception as e:
                print(e)
                
                return {'error': True, 'msg': 'Código enviado incorretamente'}

            registered_codes = [1, 4, 5, 6, 7, 8, 12, 25, 34]

            print(code)
            if code in registered_codes:
                print(code)
                return {'error': True, 'msg': "Código"}
            return {'error': False, 'msg': 'Código disponível'}
                
        except Exception as e:
            return {'error': True, 'msg': "Falha na conexão"}
        
    def create(self, req):
        print(req.form)
        try:
            code = req.form.get('verifyCode')
            social_reason = req.form.get('inputSocialReason')
            nome = req.form.get('inputName')
            cnpj = req.form.get('cnpj')
            tel = req.form.get('inputTel')
            email = req.form.get('inputEmail')
            
            if not social_reason:
                return redirect(url_for('main.index', msg='form-void'))
            if not nome:
                return redirect(url_for('main.index', msg='form-void'))
            if not email:
                return redirect(url_for('main.index', msg='form-void'))
                
            try:
                int(code)
                int(cnpj)
                int(tel)
            except:
                return redirect(url_for('main.index', msg='invalid-code'))    
            return redirect(url_for('main.index', msg='success'))
        
        
        
        except Exception as e:
            print(e)
    
    
