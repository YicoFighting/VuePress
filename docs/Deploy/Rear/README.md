---
sidebar: auto
---

# 后端部署

## 购买云服务器

控制台

链接：[阿里云 - 弹性计算 (aliyun.com)](https://ecs-buy.aliyun.com/wizard?spm=5176.13329450.home-res.buy.2c4f4df5EyzBkC#/postpay/cn-shenzhen?orderSource=buyWizard-console-overview)

基础配置：

> 按量付费
>
> 华南 1(深圳)，选一个离你地区最近的
>
> 2vCPU 4GB
>
> 高主频计算型 hfc7
>
> CentOS 8.0 以上版本

系统配置

> root
>
> \*\*\*\*(密码)
>
> 主机名:xiao

## 配置云服务器

### 连接云服务器

Windows 电脑上我推荐直接使⽤ git bash ssh ⼯具

Mac OS 电脑上我们可以直接通过终端来使⽤ ssh ⼯具

```sh
#连接云服务器
ssh root@公网IP
```

如果在计算机中想要更改主机名，修改之后需要重启服务器

```sh
# 修改主机名 重启服务器
hostnamectl --static set-hostname coder
```

### 安装 Node.js

我们安装软件使⽤⼯具：dnf

> DNF，全称 Dandified（时髦的、华丽的）
>
> Yum； 是 Yum 的下⼀个版本，也被称之为 Yum 的替代品；
>
> 如果是 centos7 的版本，没有⾃带 dnf，需要通过 yum 进⾏安装（这个⾃⾏安装⼀下）；
>
> 刚才在选择云服务器时，我选择的是 centos8，所以是⾃带 dnf 的；

检查 dnf 是否可⽤

```sh
dnf --help
```

如果我们希望安装⼀个软件包，可以进⾏如下的操作

```sh
# 搜索软件包
dnf search nodejs
# 查看软件包信息: nodejs的版本是10.21.0
dnf info nodejs
# 安装nodejs
dnf install nodejs
```

我们会发现版本其实是 10.21.0：

> 我们其实希望使⽤更⾼的版本，⽐如最新的 LTS 或者 Current 版本；
>
> 这个时候我们可以使⽤之前讲过的⼀个⼯具：n；

```sh
# 安装n
npm install n -g
# 通过n安装最新的lts和current
n install lts
n install latest
# 通过n切换版本
n
```

如果发现切换之后终端没有反应，可以进⾏重启：

> ⽅式⼀：重新通过 ssh 建⽴连接；
>
> ⽅式⼆：重启 ssh service sshd restart

### 安装 MySQL

使⽤ dnf 来安装 MySQL：

```sh
# 查找MySQL
dnf search mysql-server
# 查看MySQL，这⾥的版本是8.0.21
dnf info mysql-server
# 安装MySQL，这⾥加-y的意思是依赖的内容也安装
dnf install mysql-server -y
```

启动 mysql-server

```sh
# 开启MySQL后台服务
systemctl start mysqld
# 查看MySQL服务：active (running)表示启动成功
systemctl status mysqld
# 随着系统⼀起启动
systemctl enable mysqld
```

### 配置 MySQL

配置 MySQL 账号和密码

```sh
mysql_secure_installation
# 接下来有⼀些选项，⽐如密码强度等等⼀些
# MySQL8开始通常设置密码强度较强，选择2
# 其他的选项可以⾃⾏选择 一般选y
# 强密码包括大小写、数字、特殊字符
# 例如:MiMa123456!
```

现在，我们就可以直接在服务器中操作 MySQL 了

```sh
# 登录mysql
mysql -u root -p
# 展示数据库
mysql> show databases;
```

如果我们希望在⾃⼰的电脑上直接连接 MySQL

Navicat

> 连接名:随意
>
> 主机:公网 IP
>
> 端口:3306
>
> 用户名:root
>
> 密码:MiMa123456!

但是阿⾥云默认有在安全组中禁⽌掉 3306 端的连接，所以我们需要配置 3306 的安全组

> 服务器实例
>
> 更多
>
> 网络和安全组
>
> 安全组配置
>
> 配置规则
>
> 快速添加，勾选 3306(MySQL)

然后再配置 root 可以远程连接

```sh
# 必须登录mysql后执行
# 使⽤mysql数据库
mysql> use mysql;
# 查看user表中，连接权限，默认看到root是localhost
mysql> select host, user from user;
# 修改权限
mysql> update user set host = '%' where user = 'root';
# 刷新列表,使其生效
mysql> flush privileges;
```

#### 数据库迁移

第⼀步：在服务器 MySQL 中创建 coder 的数据库： 可以通过命令，也可以通过 Navicat 直接创建

> 右键 => 新建数据库 => 字符集：utf8mb4 => 排序规则：utf8mb4_0900_ai_ci

第⼆步：在 Navicat ⼯具中本地 MySQL 直接导出数据库

> 右键 => 转储 SQL 文件 => 结构 + 数据

第三步：在 Navicat ⼯具中服务器 MySQL 中执⾏ MySQL

> 找到第一步新建的数据库 => 右键 => 运行 SQL 文件

## 部署 Node 项⽬

### 直接上传文件

使用 FileZilla

> 新建站点
>
> 协议：SSH
>
> 主机：公网 IP
>
> 端口：不填(使用默认的)
>
> 用户：root
>
> 密码：MiMa123456
>
> 然后从本地站点拖到远程站点

### ⼿动部署

#### 代码托管到 Git 仓库

在 GitHub 中创建仓库，并且将当前代码放到 GitHub 中 添加.gitignore ⽂件时，忽略⼀些⽂件：

> 忽略 uploads
>
> 忽略.env

#### clone 到服务器

服务器我们使⽤ Git 来 clone 代码：

> centos8 服务器中默认是没有安装 Git 的；
>
> 我们可以通过 dnf 来安装

```sh
dnf search git;
dnf info git;
# 当然你也可以直接安装（上⾯两个只是让⼤家看⼀下Git的详情）
dnf install git;
```

我们可以在根⽬录下创建⼀个⾃⼰的⽂件夹，⽐如 xiao

```sh
cd /
mkdir xiao
cd xiao/
```

clone 项⽬到 xiao 中

```sh
#git clone https://github.com/coder/hub.git
git clone https://github.com/Xiao/hub.git
```

### VSCode 打开代码

可以使⽤⼀个 VSCode 的插件：remote-ssh

```sh
ssh root@公网IP
```

安装项⽬的依赖：

```sh
npm install
```

配置.env ⽂件

```sh
APP_HOST=http://110.110.110.110
APP_PORT=8001
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_DATABASE=coder
MYSQL_USER=root
MYSQL_PASSWORD=MiMa123456!
```

注意：加⼊ 8001 端⼝到安全组中

> 服务器实例
>
> 更多
>
> 网络和安全组
>
> 安全组配置
>
> 配置规则
>
> 手动添加
>
> | 授权策略 | 优先级 | 协议类型   | 端口范围        | 授权对象      | 描述     |
> | -------- | ------ | ---------- | --------------- | ------------- | -------- |
> | 允许     | 1      | 自定义 TCP | 目的: 8001/8001 | 源: 0.0.0.0/0 | 运行端口 |

### pm2 启动 node 程序

在真实的部署过程中，我们会使⽤⼀个⼯具 pm2 来管理 Node 的进程：

PM2 是⼀个 Node 的进程管理器；

我们可以使⽤它来管理 Node 的后台进程；

这样在关闭终端时，Node 进程会继续执⾏，那么服务器就可以继续为前端提供服务了；

安装 pm2

```sh
 npm install pm2 -g
```

pm2 常⽤的命令：

```sh
# 命名进程
[root@xiao coder]# pm2 start ./src/main.js --name xiao
pm2 start app.js --name my-api
# 显示所有进程状态
pm2 list
# 停⽌指定的进程
pm2 stop 0
# 停⽌所有进程
pm2 stop all
# 重启所有进程
pm2 restart all
# 重启指定的进程
pm2 restart 0
# 杀死指定的进程
pm2 delete 0
# 杀死全部进程
pm2 delete all
#后台运⾏pm2，启动4个app.js，实现负载均衡
[root@xiao coder]#  pm2 start ./src/main.js -i 2
pm2 start app.js -i 4(几核就写几)
```

## jenkins ⾃动化部署

### 安装 Java 环境

Jenkins 本身是依赖 Java 的，所以我们需要先安装 Java 环境：

这⾥我安装了 Java1.8 的环境

```sh
dnf search java1.8
dnf install java-1.8.0-openjdk.x86_64
```

### 安装 Jenkins

因为 Jenkins 本身是没有在 dnf 的软件仓库包中的，所以我们需要连接 Jenkins 仓库

```sh
wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.rep
o
# 导⼊GPG密钥以确保您的软件合法
rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key
```

编辑⼀下⽂件/etc/yum.repos.d/jenkins.repo

可以通过 vim 编辑

```sh
[jenkins]
name=Jenkins-stable
# baseurl=http://pkg.jenkins.io/redhat-stable 去掉 -stable
baseurl=http://pkg.jenkins.io/redhat
gpgcheck=1
```

安装 Jenkins

```sh
dnf install jenkins
```

启动 Jenkins 的服务

```sh
# 启动
systemctl start jenkins
# 状态
systemctl status jenkins
# 开机自启
systemctl enable jenkins
# 报错
jenkins.service is not a native service, redirecting to systemd-sysv-install.
Executing: /usr/lib/systemd/systemd-sysv-install enable jenkins
# 开机自启修改
/usr/lib/systemd/systemd-sysv-install enable jenkins
```

Jenkins 默认使⽤ 8080 端⼝提供服务，所以需要加⼊到安全组中：

> 服务器实例
>
> 更多
>
> 网络和安全组
>
> 安全组配置
>
> 配置规则
>
> 手动添加
>
> | 授权策略 | 优先级 | 协议类型   | 端口范围        | 授权对象      | 描述     |
> | -------- | ------ | ---------- | --------------- | ------------- | -------- |
> | 允许     | 1      | 自定义 TCP | 目的: 8080/8080 | 源: 0.0.0.0/0 | 运行端口 |

### Jenkins 配置

打开浏览器，输⼊：公网 IP:8080

> 注意：你输⼊⾃⼰的 IP 地址

获取输⼊管理员密码：

> 在下⾯的地址中 cat /var/lib/jenkins/secrets/initialAdminPassword
>
> 管理员密码：xxxxxxxxx

**可以安装推荐的插件**

### Jenkins 任务

账号密码都是 root

**新建任务**

> 输入一个任务名称：字段不为空，且合法
>
> 选择 构建一个自由风格的软件项目

**General**

> 丢弃旧的构建
>
> 保持构建的天数 ： 10
>
> 保持构建的最大个数：8

**源码管理**

> Git
>
> Repository URL：https://github.com/coder/coder.git
>
> Credentials：添加 => jenkins => Username with password => 用户名和密码填 github 的 => 然后左边就可以选择了
>
> 指定分支：master 改成 main

**构建触发器**

> 轮询 SCM：H H \* \* \*

**构建环境**

> ​ jenkins 首页 => 管理 jenkins => 插件管理 => 可选插件 =>NodeJS Plugin
>
> ​ jenkins 首页 => 管理 jenkins => 全局工具配置 => NodeJS => 别名(随意 Node16) => 选择版本
>
> 选择 Provide Node & npm bin/ folder to PATH

**构建**

执⾏的任务：

> 查看 Node 的版本等是否有问题；
>
> 执⾏ npm install 安装项⽬的依赖；
>
> 移除 /mnt/coder 中的⽂件，除了.env

执行 shell

```shell
ls
node -v
npm -v
npm install
cd /mnt/xiao/
ls
shopt -s extglob
#rm -rf /mnt/xiao/* !(".env"|"."|".."|"ecosystem.config.js")
#rm -rf /mnt/xiao/* !(.env|.|..|ecosystem.config.js)
find /mnt/xiao/* | grep -v ecosystem.config.js | xargs rm -rf
cd /var/lib/jenkins/workspace/xiao
ls
pwd
cp -rf * /mnt/xiao/
```

### Jenkins 的权限

> 利用 Remote-SSH 连接服务器，找到/etc/sysconf/jenkins，然后修改权限。

```sh
将29行的JENKINS_USER="jenkins"修改成JENKINS_USER="root"
```

> 保存之后，重启 jenkins

```sh
#重启jenkins
[root@主机名 ~]# systemctl restart jenkins
```

> 然后再次点击立即构建，如果出现 ERROR:Error fetching remote repo "origin"的话，是 github 的原因(因为有的时候连接不上)；构建成功刷新之后，就会显示自己的项目了。

### 最后启动

```javascript
// ecosystem.config.js⽂件
module.exports = {
  apps: [
    {
      name: 'coder',
      script: './src/main.js',
      watch: true,
    },
  ],
};
```

启动监听，每次有新代码，都会启动

```sh
pm2 start ecosystem.config.js
```

**星光不问赶路人，时光不负有心人。**
