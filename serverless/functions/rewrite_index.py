def handle(event, context):
    request = event['Records'][0]['cf']['request']

    if request['uri'].endswith('/'):
        request['uri'] = f"{request['uri']}index.html"

    return request
