---
sidebar: auto
---

# 前端部署

## 购买云服务器

### 注册账号

[官网](https://www.aliyun.com/)

### 购买服务器

链接：[阿里云 - 弹性计算 (aliyun.com)](https://ecs-buy.aliyun.com/wizard?#/postpay/cn-guangzhou?orderSource=buyWizard-console-overview&internetMaxBandwidthOut=1&period=1&periodType=Yearly)

#### 基础配置

> 付费模式：按量付费
>
> 地域及可用区：华南 3(广州)
>
> 实例规格：2vCPU 4GiB 选推荐的高主频计算型 hfc7
>
> 当前选择实例 ecs.hfc7.large （2 vCPU 4 GiB，高主频计算型 hfc7）
>
> 镜像：公共镜像 CentOS 8.264 位
>
> 存储默认即可
>
> 快照服务：保留 7 天

### 网络与安全组

**安全组**

> 创建安全组：[云服务器管理控制台 (aliyun.com)](https://ecs.console.aliyun.com/?spm=5176.ecsbuyv3.securityGroup.3.129c3675ru59TZ#/securityGroup/region/cn-guangzhou/create)
>
> 授权对象：0.0.0.0/0 表示所有 IP 均可访问
>
> 安全组名称：可修改
>
> 网络：默认即可
>
> 安全组类型：普通安全组

#### 系统配置

> 登录凭证：自定义密码
>
> 登录名：root
>
> 登录密码：\*\*\*\*(一定要记住)
>
> 实例名称：自定义
>
> 主机名：自定义(操作系统可见的名字)

## 远程连接

### git bash

> 建议用 git bash，因为它有 ssh，可以进行远程连接

```bash
ssh root@公网IP
#是否确定连接
Are you sure you want to continue connecting (yes/no)?  y
#请选择yes还是no
please type "yes" or "no": yes
#输入密码  注意：输入时看不到  但是密码已经输入进去了
root@公网IP's password:***(上面的登录密码)
#成功连接  出现类似就成功了
[root@主机名~]#
```

### Remote-SSH

> VSCODE 插件，左侧会出现一个小电视的图标
>
> ​ 点击这个小电视，点击 SSH TARGETS 右边的+号；在弹出的弹窗输入 ssh root@公网 IP，按 ENTER；选择第一个更新。添加完成之后，点击右键(Connect to Host in Current Window)，然后输入密码(服务器的登录密码)。

## 安装环境

> CentOs 8.2 自带 dnf，服务器装包工具，和 npm 等类似

### 安装 java

```bash
#搜索java包
[root@主机名 ~]# dnf search java-1.8
#安装java包
[root@主机名 ~]# dnf install java-1.8.0-openjdk.x86_64
#确定安装吗
y
#输入java如果能看到一系列东西 安装成功
[root@主机名 ~]# java
```

### 安装 Jenkins

#### 安装

```bash
#wget：Linux做下载的工具 放在/etc/yum.repos.d/jenkins.repo这个文件夹 后面是url地址
[root@主机名 ~]# wget –O /etc/yum.repos.d/jenkins.repo
http://pkg.jenkins-ci.org/redhat-stable/jenkins.repo
#jenkins.repo需要放在/etc/yum.repos.d/这个文件夹下
#命令没有错，位置错了，所以重新移动一下
[root@主机名 ~]# mv jenkins.repo /etc/yum.repos.d/
#进入/etc/yum.repos.d/文件夹
[root@主机名 ~]# cd /etc/yum.repos.d/
#看列出的文件是否有jenkins.repo 有就移动成功了
[root@主机名  yum.repos.d]# ls
# 导入GPG密钥以确保您的软件合法
[root@主机名  yum.repos.d]# rpm --import https://pkg.jenkins.io/redhat/jenkins.io.key
# 编辑jenkins.repo
[root@主机名  yum.repos.d]# vi jenkins.repo
#点击i 下方出现INSERT(插入)  删除网址后面的-stable
#baseurl=http://pkg.jenkins.io/redhat
#先按ESC退出 再按shift+:  下方出现:  然后输入wq  保存并退出
#安装jenkins
[root@主机名  yum.repos.d]# dnf install jenkins
#确认安装吗
y
#启动
[root@主机名  yum.repos.d]# systemctl start jenkins
#查看状态  是否启动成功  绿色的active(running)就是启动成功了
[root@主机名  yum.repos.d]# systemctl status jenkins
#ctrl+c退出  随着操作系统启动而启动  报错，然后执行Executing的内容
[root@主机名  yum.repos.d]# systemctl enable jenkins
#执行Executing的内容  不显示内容  执行成功
[root@主机名  yum.repos.d]# /usr/lib/systemd/systemd-sysv-install enable jenkins
```

#### 使用

> jenkins 跑在服务器的 8080 端口，有图形化界面。

1、修改安全组

> 手动修改实例的安全组，添加一条规则：端口范围-目的：8080/8080 授权对象-源：0.0.0.0/0

2、进入 jenkins

> 浏览器地址栏: 公网 IP:8080

3、页面上有个**该文件在服务器：地址...**

```bash
#查看某一个文件包含的东西
[root@主机名  yum.repos.d]# cat 地址
***********************(会打印管理员密码)
```

4、输入管理员密码

> 将密码粘贴到输入框，点击继续

5、安装推荐的插件

6、创建第一个管理员用户

> 用户名：xiao 记住
>
> 密码：MiMa123456 记住
>
> 全名：自定义
>
> 电子邮箱地址：自定义

7、保存并完成

8、进入 Jenkins

### 安装 nginx

```bash
#安装nginx
[root@主机名 ~]# dnf install nginx
```

#### 启动

```bash
#启动nginx
[root@主机名 ~]#systemctl start nginx
#查看状态
[root@主机名 ~]#systemctl status nginx
#随操作系统启动自动启动
[root@主机名 ~]#systemctl enable nginx
```

> ​ 也可以在浏览器测试 nginx 是否安装成功，直接在浏览器输入公网 IP 回车，出现一个 Welcome to nginx...。其实这是一个 index.html 文件，页面内容第一行末尾写 It is located in /usr/share/nginx/html，这个是存放 index 文件的目录。

#### 使用

1、进入存放 index 的文件夹

```bash
#进入存放index的文件夹
[root@主机名 ~]# cd  /usr/share/nginx/html
```

2、编写 index 文件

```bash
#编写index文件
[root@主机名 html]# vi index.html
```

3、按 shift+： 输入 q 退出 去其他地方进行编辑

4、进入 root 文件夹下

```bash
#进入root文件夹
[root@主机名 html]# cd /root/
```

5、创建存放**项目**的文件夹

```bash
#在root下创建cms文件夹 存放项目
[root@主机名 ~]# mkdir cms
```

6、进入**项目**文件夹

```bash
#进入项目文件夹
[root@主机名 ~]# cd cms/
```

7、新建 index.html 文件

```bash
#新建index.html文件
[root@主机名 cms]# touch index.html
```

8、编辑 index.html 文件

```bash
#编辑index.html文件
[root@主机名 cms]# vi index.html
```

> 输入 i，进入编辑模式；在页面输入 Hello Nginx；点击 ESC 退出；shift+： ，输入 wq，保存并退出。

9、修改 nginx 让默认访问的文件变成项目下的 index.html

```bash
#修改nginx
[root@主机名 cms]# vi /etc/nginx/nginx.conf
```

10、按照 Remote-SSH 连接成功之后

> 点击打开文件夹，在输入框选择文件夹/文件，进行修改，例如修改项目中的 index.html 文件，让它成为真正的 html 文件。

11、修改 nginx 的权限

> nginx 目录：/etc/nginx/nginx.conf；进入 nginx 的配置文件进行修改

```bash
#将nginx的权限改为root  因为有些文件nginx没有权限访问
将第五行  user nginx;修改成use root;
```

12、修改 nginx 的默认访问文件

```bash
server {
	    #默认80端口
        listen       80 default_server;
        listen       [::]:80 default_server;
        server_name  _;
        #注释默认的访问路径
        # root         /usr/share/nginx/html;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        location / {
        	#添加项目的访问路径
            root /root/cms;
            #访问上面路径的index.html文件
            index index.html;
            #history路由模式刷新404  必须添加这一行   哈希路由应该没事
            try_files $uri $uri/ /index.html;
        }

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }
```

> 保存后，重启 nginx

```bash
#重启nginx
[root@主机名 ~]# systemctl restart nginx
```

> 这个时候刷新浏览器，访问的就是在项目中新建的 index.html 文件

## 自动化部署

> 原理：将代码 push 到 github 仓库，然后在 Jenkins 创建个任务(每隔半小时，自动去 github 仓库 clone 代码)，然后在 Jenkins 执行 npm run build 生成 dist 文件夹，再用 shell 脚本把生成的 dist 文件夹移动到存放项目的文件夹(cms)

### 将代码 push 到 github

> 点击头像旁的+号，选择 New repository；给仓库起名，选择 private(私有)，然后点击 create repository 创建仓库。

```bash
echo "# 项目名" >> README.md
#vue创建项目默认有
git init
git add README.md
git commit -m "first commit"
git branch -M main
```

> 需要进行的操作

```bash
#查看remote  显示origin就是有项目了
git remote
#先把项目中的remote移除
git remote remove origin
#执行这一语句 与仓库进行绑定
git remote add origin git@github.com:xiao/cs.git
#推送至远程仓库  刷新浏览器，就有对应代码了
git push -u origin main
```

### 使用 Jenkins 新建项目

> ​ 来到 Jenkins 的首页(公网 IP:8080)，选择新建任务(new item)，选择第一个 **构建一个自由风格的软件项目(Freestyle project)**，**任务名称**可以自定义，然后点击确定。
>
> ​ 在 General，需要进行很多配置，详情在后面。

### 安装 git

> 因为 Jenkins-General 的源码管理要使用 git，而服务器上没有 git

```bash
#安装git
[root@主机名 ~]# dnf install git
#确认安装吗
y
```

> Jenkins-General：源码管理选择 git，Repository URL 填入对应的 github 仓库(因为仓库私有，所以需要认证)。Credentials(认证)：点击添加，进入到添加凭据。

### 添加凭据

> **Domain**：全局凭据
>
> **类型：**Username with password
>
> **范围：**全局
>
> **用户名：**github 用户名
>
> **密码：**github 不允许密码访问，需要使用 token。

得到 github 的 token：

> 点击头像=>选择 settings=>选择 Developer settings=>选择 Personal access tokens=>点击 Generate new token
>
> Note：自定义
>
> Expiration(有效期)：自定义
>
> 勾选 repo 全选这个 repo

点击生成 token，将 token 复制到上面，点击添加，就可以选择**Credentials**了。

### 继续配置 Jenkins

**Jenkins-General**

> **源码管理：**git
>
> **Repository URL**：仓库 url 地址
>
> **Credentials**：选择凭据
>
> **指定分支**：\*/main
>
> **构建触发器：**定时构建 日程表：H 9 \* \* \*
>
> **构建环境：**需要选择 Node，因为没有 Node，所以需要安装。

**定时构建语法**

```bash
*(分) *(时) *(天) *(月) *(周)
#每半小时构建一次OR每半小时检查一次远程代码分支，有更新则构建
H/30 * * * *
#每两小时构建一次OR每两小时检查一次远程代码分支，有更新则构建
H H/2 * * *
#每天凌晨两点定时构建
H 2 * * *
#每月15号执行构建
H H 15 * *
#工作日，上午9点整执行
H 9 * * 1-5
#每周1,3,5，从8:30开始，截止19:30，每4小时30分构建一次
H/30 8-20/4 * * 1,3,5
```

### 安装 Node

> 构建环境需要 Node 环境，因为没有 Node，所以需要安装，这个是安装在 Jenkins 上的。

点击左上角 Jenkins 的图片，回到首页。

> 点击系统管理(Manage Jenkins)=>点击插件管理(Manage Plugins)=>可选插件=>找到 NodeJs 勾选(下面有这一行：NodeJS Plugin executes [NodeJS](http://nodejs.org/) script as a build step.)=>点击 Download now and install after restart=>返回首页(或者它自己会自动重启)

安装 node

> 首页=>系统管理=>全局工具配置=>划到最下面 NodeJS=>点击新增 NodeJS=>别名自定义，勾选自动安装，版本选择 14.17.5=>点击保存

### 继续配置 Jenkins

> 点击首页=>所有(任务列表)=>名称下的任务，进入任务=>点击配置

**Jenkins-General**

> **源码管理：**git
>
> **Repository URL**：仓库 url 地址
>
> **Credentials**：选择凭据
>
> **指定分支**：\*/main
>
> **构建触发器：**定时构建 日程表：H 9 \* \* \*
>
> **构建环境：**Provide Node & npm bin/ folder to PATH
>
> **构建：**详见下方

执行 shell

```shell
#!/bin/bash
#当前所在位置
pwd
#node版本
node -v
#npm版本
npm -v
#安装npm依赖包
npm install
#打包
npm run build
#输出 构建完成
echo "构建完成"
#查看目录结构
ls
#删除该文件夹下面的东西
#rm：remove -r：递归 f:强制的移除
#当前的Jenkins可能没有权限，所以也要修改它的权限
rm -rf /root/cms/*
#将打包的dist文件夹下的内容移动到cms项目
cp -rf ./dist/* /root/cms/
```

> 然后点击保存，之后可以点击左侧菜单的立即构建，测试是否配置成功(可以进去看控制台输出)。

**设置 Jenkins 的权限**

> 利用 Remote-SSH 连接服务器，找到/etc/sysconf/jenkins，然后修改权限。

```bash
将29行的JENKINS_USER="jenkins"修改成JENKINS_USER="root"
```

> 保存之后，重启 jenkins

```bash
#重启jenkins
[root@主机名 ~]# systemctl restart jenkins
```

> 然后再次点击立即构建，如果出现 ERROR:Error fetching remote repo "origin"的话，是 github 的原因(因为有的时候连接不上)；构建成功刷新之后，就会显示自己的项目了。

## 生产环境

> 需要修改生产环境的 API

**星光不问赶路人，时光不负有心人。**
