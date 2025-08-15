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

# docker容器中的前端访问后端容器的几种路径

## 一、环境
阿里云服务器server01， IP：123.56.99.88；
前端部署在docker容器 “prod-ngxin”，端口映射：80:80；
后端docker容器 “prod-backend”，端口映射：48081:8080;
容器都在docker网络 “prod-net”中。

结论：推荐 路径3 和 路径1

## 二、“前端连接后端”的几种路径

### 1、通过docker别名访问
必要条件：前后端容器都要在同一个(创建的)docker网络中。
nginx.cnf文件的proxy_pass中，url直接使用后端的容器名，端口使用后端容器中对应的端口。
如下：
>proxy_pass http://<span style="color:red">prod-backend</span>:8080/

路径：prod-nginx 容器 → Docker DNS 解析容器名 → prod-backend 容器（直接通过 8080 端口）

优势：不受阿里云安全组限制、资源消耗最小、不暴露端口安全性高。
注意，需要在后端的代码中考虑到其他容器别名等参数 或者 容器启动时设置参数。

<span style="color:red">推荐</span>。

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

### 2、通过公网访问
必要条件：阿里云安全组中“入方向”开放48081端口（来源建议限定“前端的IP”，本例是123.56.99.88）。
nginx.cnf配置如下：
>proxy_pass http://<span style="color:red">123.56.99.88</span>:48081/

路径：prod-nginx 容器 → Docker 网关 → 宿主机 eth0 → 公网出口 → 阿里云虚拟化层（安全组检查）→ 宿主机公网入口 → 宿主机端口 48081 → prod-backend 容器

优势：彻底的前后端分离，解耦程度最高。
劣势：必须配置安全组规则、流量绕行公网，性能差、产生公网流量。

不能变动配置的情况下，最后的应急选择。

### 3、通过阿里云服务器内网IP(VPC)访问
必要条件：前端后端所在的宿主机，都是阿里云服务器。
实测，对阿里云安全组并没有要求，不需要设置放行。
当然，对docker网络也没有要求。

&nbsp;&nbsp;&nbsp;&nbsp;步骤1、在后端服务器中ifconfig，确定eth:0 (或者eth:1) 的IP。 例如：172.27.152.x
&nbsp;&nbsp;&nbsp;&nbsp;步骤2、ngxin.cnf如下，注意是用的是宿主机端口：
>proxy_pass http://<span style="color:red">172.27.152.x</span>:48081/

路径：prod-nginx 容器 → Docker 网关 → 宿主机 eth0 → 宿主机端口 48081 → prod-backend 容器

优势：解耦程度很高、只需要修改nginx的配置文件即可，不需要其他设置配合。
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不经过公网、不需要设置安全组（是的，虽然经过端口48081，但是不需要安全组放行48081的访问，实测如此）。

<span style="color:red">推荐</span>。

### 4、通过docker网桥IP访问
必要条件：前端和后端处于同一台服务器、同一个docker网络中（docker网桥一般情况下是每台服务器建立一个网络，默认不互通）。
实测，对阿里云安全组并没有要求，不需要设置放行。

&nbsp;&nbsp;&nbsp;&nbsp;步骤1、在后端服务器中ifconfig，确定IP。 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“docker0”对应的IP，是docker默认建立的，一般为172.17.0.1。
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“br-xxxxxx”对应的IP，是手动创建的docker网络。本例是prod-net，IP是17.19.0.1。
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这两个选用其中任意一个都可以，只要前端后端都在此网段中就行。
&nbsp;&nbsp;&nbsp;&nbsp;步骤2、建议在前端容器ifconfig，查看一下对应IP，确保同一个网段中。
&nbsp;&nbsp;&nbsp;&nbsp;步骤3、ngxin.cnf如下，注意是用的是宿主机端口：
>proxy_pass http://<span style="color:red">172.17.0.1</span>:48081/

路径：prod-nginx 容器 → Docker 网关 → 宿主机 eth0 → 宿主机端口 48081 → prod-backend 容器

优势：解耦程度很高、只需要修改nginx的配置文件即可，不需要其他设置配合。
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不经过公网、不需要设置安全组（是的，虽然经过端口48081，但是不需要安全组放行48081的访问，实测如此）。

劣势：不如 路径3。因为要考虑到前后端可能不在同一个docker网段中。

### 其他
据说还有“host.docker.internal连接”、“127.0.0.1配合特定容器启动设置” 等连接方式，
因为博主没用过，不了解。