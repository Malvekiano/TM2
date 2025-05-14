module.exports = {
  apps : [{
    name: "linio2-ssl",
    script: "npx",
    args: "serve out --ssl-cert /etc/ssl/certs/linio.uno.crt --ssl-key /etc/ssl/certs/linio.uno.key --listen 443",
    env: {
      PORT: "443"
    }
  }]
}
