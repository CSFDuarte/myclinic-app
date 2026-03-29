#!/usr/bin/env python3
import http.server
import socketserver
import subprocess
import json
import os

PORT = 8765

class WebhookHandler(http.server.BaseHTTPRequestHandler):
    def do_POST(self):
        if self.path == '/webhook/deploy':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)

            try:
                data = json.loads(post_data.decode('utf-8'))
                print(f"Received webhook: {data}")

                # Trigger deploy script
                subprocess.run(['/data/.openclaw/workspace/myclinic-app/deploy-webhook.sh'],
                              capture_output=True, text=True)

                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'status': 'deploying'}).encode())
            except Exception as e:
                print(f"Error: {e}")
                self.send_response(500)
                self.end_headers()
                self.wfile.write(json.dumps({'error': str(e)}).encode())
        else:
            self.send_response(404)
            self.end_headers()

if __name__ == '__main__':
    with socketserver.TCPServer(("", PORT), WebhookHandler) as httpd:
        print(f"Webhook server running on port {PORT}")
        httpd.serve_forever()
