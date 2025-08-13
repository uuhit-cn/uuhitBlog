---
icon: pen-to-square
date: 2025-08-13
order: 11
category:
  - nginx,docker
tag:
  - 红
  - 大
  - 圆
---

# docker容器中的前端访问后端容器的三种路径

## 一、环境
阿里云服务器server01， IP：123.56.99.88；
前端部署在docker容器 “prod-ngxin”，端口映射：80:80；
后端docker容器 “prod-banckend”，端口映射：48081:8080;
容器都在docker网络 “prod-net”中。

## 二、“前端连接后端”的三种路径

### 1、通过docker别名访问
必要条件：在同一个docker网络中。
proxy_pass中，url直接使用后端的容器名，端口使用后端容器中监听的端口。
如下：
>proxy_pass http://<span style="color:red">prod-backend</span>:8080/

完整nginx.cnf如下：
```md
user  nginx;
worker_processes  auto;

error_log  /var/log/nginx/error.log notice;
pid        /var/run/nginx.pid;

events {
    worker_connections  1024;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;
	sendfile        on;
    keepalive_timeout  65;
	

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    #tcp_nopush     on;
    #gzip  on;

    server {
		listen 80;
		server_name _;

		location / {
			root /usr/share/nginx/html;
			try_files $uri $uri/ /index.html;  # 将所有请求重定向到 index.html
			index index.html index.htm;
		}

		location /prod-api/ {
			proxy_set_header Host $http_host;
			proxy_set_header X-Real-IP $remote_addr;
			proxy_set_header REMOTE-HOST $remote_addr;
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
			proxy_pass http://prod-backend:8080/;
		}
		
		error_page   500 502 503 504  /50x.html;
        	location = /50x.html {
            		root   html;
       	 }
         }
}
```

### 2、本地访问、localhost或者127.0.0.1
必要条件：前端nginx容器 和 后端容器，位于同一台服务器中。
注意对docker net网络并没有要求。
