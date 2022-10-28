<template><div><h1 id="前端部署" tabindex="-1"><a class="header-anchor" href="#前端部署" aria-hidden="true">#</a> 前端部署</h1>
<h2 id="购买云服务器" tabindex="-1"><a class="header-anchor" href="#购买云服务器" aria-hidden="true">#</a> 购买云服务器</h2>
<h3 id="注册账号" tabindex="-1"><a class="header-anchor" href="#注册账号" aria-hidden="true">#</a> 注册账号</h3>
<p><a href="https://www.aliyun.com/" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a></p>
<h3 id="购买服务器" tabindex="-1"><a class="header-anchor" href="#购买服务器" aria-hidden="true">#</a> 购买服务器</h3>
<p>链接：<a href="https://ecs-buy.aliyun.com/wizard?#/postpay/cn-guangzhou?orderSource=buyWizard-console-overview&amp;internetMaxBandwidthOut=1&amp;period=1&amp;periodType=Yearly" target="_blank" rel="noopener noreferrer">阿里云 - 弹性计算 (aliyun.com)<ExternalLinkIcon/></a></p>
<h4 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置" aria-hidden="true">#</a> 基础配置</h4>
<blockquote>
<p>付费模式：按量付费</p>
<p>地域及可用区：华南 3(广州)</p>
<p>实例规格：2vCPU 4GiB 选推荐的高主频计算型 hfc7</p>
<p>当前选择实例 ecs.hfc7.large （2 vCPU 4 GiB，高主频计算型 hfc7）</p>
<p>镜像：公共镜像 CentOS 8.264 位</p>
<p>存储默认即可</p>
<p>快照服务：保留 7 天</p>
</blockquote>
<h3 id="网络与安全组" tabindex="-1"><a class="header-anchor" href="#网络与安全组" aria-hidden="true">#</a> 网络与安全组</h3>
<p><strong>安全组</strong></p>
<blockquote>
<p>创建安全组：<a href="https://ecs.console.aliyun.com/?spm=5176.ecsbuyv3.securityGroup.3.129c3675ru59TZ#/securityGroup/region/cn-guangzhou/create" target="_blank" rel="noopener noreferrer">云服务器管理控制台 (aliyun.com)<ExternalLinkIcon/></a></p>
<p>授权对象：0.0.0.0/0 表示所有 IP 均可访问</p>
<p>安全组名称：可修改</p>
<p>网络：默认即可</p>
<p>安全组类型：普通安全组</p>
</blockquote>
<h4 id="系统配置" tabindex="-1"><a class="header-anchor" href="#系统配置" aria-hidden="true">#</a> 系统配置</h4>
<blockquote>
<p>登录凭证：自定义密码</p>
<p>登录名：root</p>
<p>登录密码：****(一定要记住)</p>
<p>实例名称：自定义</p>
<p>主机名：自定义(操作系统可见的名字)</p>
</blockquote>
<h2 id="远程连接" tabindex="-1"><a class="header-anchor" href="#远程连接" aria-hidden="true">#</a> 远程连接</h2>
<h3 id="git-bash" tabindex="-1"><a class="header-anchor" href="#git-bash" aria-hidden="true">#</a> git bash</h3>
<blockquote>
<p>建议用 git bash，因为它有 ssh，可以进行远程连接</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #ABB2BF">ssh root@公网IP</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#是否确定连接</span></span>
<span class="line"><span style="color: #ABB2BF">Are you sure you want to </span><span style="color: #C678DD">continue</span><span style="color: #ABB2BF"> connecting (yes/no)?  y</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#请选择yes还是no</span></span>
<span class="line"><span style="color: #ABB2BF">please </span><span style="color: #56B6C2">type</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;yes&quot;</span><span style="color: #ABB2BF"> or </span><span style="color: #98C379">&quot;no&quot;</span><span style="color: #ABB2BF">: yes</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#输入密码  注意：输入时看不到  但是密码已经输入进去了</span></span>
<span class="line"><span style="color: #ABB2BF">root@公网IP</span><span style="color: #98C379">&#39;s password:***(上面的登录密码)</span></span>
<span class="line"><span style="color: #98C379">#成功连接  出现类似就成功了</span></span>
<span class="line"><span style="color: #98C379">[root@主机名~]#</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="remote-ssh" tabindex="-1"><a class="header-anchor" href="#remote-ssh" aria-hidden="true">#</a> Remote-SSH</h3>
<blockquote>
<p>VSCODE 插件，左侧会出现一个小电视的图标</p>
<p>​ 点击这个小电视，点击 SSH TARGETS 右边的+号；在弹出的弹窗输入 ssh root@公网 IP，按 ENTER；选择第一个更新。添加完成之后，点击右键(Connect to Host in Current Window)，然后输入密码(服务器的登录密码)。</p>
</blockquote>
<h2 id="安装环境" tabindex="-1"><a class="header-anchor" href="#安装环境" aria-hidden="true">#</a> 安装环境</h2>
<blockquote>
<p>CentOs 8.2 自带 dnf，服务器装包工具，和 npm 等类似</p>
</blockquote>
<h3 id="安装-java" tabindex="-1"><a class="header-anchor" href="#安装-java" aria-hidden="true">#</a> 安装 java</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #7F848E; font-style: italic">#搜索java包</span></span>
<span class="line"><span style="color: #ABB2BF">[root@主机名 ~]</span><span style="color: #7F848E; font-style: italic"># dnf search java-1.8</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#安装java包</span></span>
<span class="line"><span style="color: #ABB2BF">[root@主机名 ~]</span><span style="color: #7F848E; font-style: italic"># dnf install java-1.8.0-openjdk.x86_64</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#确定安装吗</span></span>
<span class="line"><span style="color: #ABB2BF">y</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#输入java如果能看到一系列东西 安装成功</span></span>
<span class="line"><span style="color: #ABB2BF">[root@主机名 ~]</span><span style="color: #7F848E; font-style: italic"># java</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-jenkins" tabindex="-1"><a class="header-anchor" href="#安装-jenkins" aria-hidden="true">#</a> 安装 Jenkins</h3>
<h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #7F848E; font-style: italic">#wget：Linux做下载的工具 放在/etc/yum.repos.d/jenkins.repo这个文件夹 后面是url地址</span></span>
<span class="line"><span style="color: #ABB2BF">[root@主机名 ~]</span><span style="color: #7F848E; font-style: italic"># wget –O /etc/yum.repos.d/jenkins.repo</span></span>
<span class="line"><span style="color: #ABB2BF">http://pkg.jenkins-ci.org/redhat-stable/jenkins.repo</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#jenkins.repo需要放在/etc/yum.repos.d/这个文件夹下</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#命令没有错，位置错了，所以重新移动一下</span></span>
<span class="line"><span style="color: #ABB2BF">[root@主机名 ~]</span><span style="color: #7F848E; font-style: italic"># mv jenkins.repo /etc/yum.repos.d/</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#进入/etc/yum.repos.d/文件夹</span></span>
<span class="line"><span style="color: #ABB2BF">[root@主机名 ~]</span><span style="color: #7F848E; font-style: italic"># cd /etc/yum.repos.d/</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#看列出的文件是否有jenkins.repo 有就移动成功了</span></span>
<span class="line"><span style="color: #ABB2BF">[root@主机名  yum.repos.d]</span><span style="color: #7F848E; font-style: italic"># ls</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 导入GPG密钥以确保您的软件合法</span></span>
<span class="line"><span style="color: #ABB2BF">[root@主机名  yum.repos.d]</span><span style="color: #7F848E; font-style: italic"># rpm --import https://pkg.jenkins.io/redhat/jenkins.io.key</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 编辑jenkins.repo</span></span>
<span class="line"><span style="color: #ABB2BF">[root@主机名  yum.repos.d]</span><span style="color: #7F848E; font-style: italic"># vi jenkins.repo</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#点击i 下方出现INSERT(插入)  删除网址后面的-stable</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#baseurl=http://pkg.jenkins.io/redhat</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#先按ESC退出 再按shift+:  下方出现:  然后输入wq  保存并退出</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#安装jenkins</span></span>
<span class="line"><span style="color: #ABB2BF">[root@主机名  yum.repos.d]</span><span style="color: #7F848E; font-style: italic"># dnf install jenkins</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#确认安装吗</span></span>
<span class="line"><span style="color: #ABB2BF">y</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#启动</span></span>
<span class="line"><span style="color: #ABB2BF">[root@主机名  yum.repos.d]</span><span style="color: #7F848E; font-style: italic"># systemctl start jenkins</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#查看状态  是否启动成功  绿色的active(running)就是启动成功了</span></span>
<span class="line"><span style="color: #ABB2BF">[root@主机名  yum.repos.d]</span><span style="color: #7F848E; font-style: italic"># systemctl status jenkins</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#ctrl+c退出  随着操作系统启动而启动  报错，然后执行Executing的内容</span></span>
<span class="line"><span style="color: #ABB2BF">[root@主机名  yum.repos.d]</span><span style="color: #7F848E; font-style: italic"># systemctl enable jenkins</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#执行Executing的内容  不显示内容  执行成功</span></span>
<span class="line"><span style="color: #ABB2BF">[root@主机名  yum.repos.d]</span><span style="color: #7F848E; font-style: italic"># /usr/lib/systemd/systemd-sysv-install enable jenkins</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h4>
<blockquote>
<p>jenkins 跑在服务器的 8080 端口，有图形化界面。</p>
</blockquote>
<p>1、修改安全组</p>
<blockquote>
<p>手动修改实例的安全组，添加一条规则：端口范围-目的：8080/8080 授权对象-源：0.0.0.0/0</p>
</blockquote>
<p>2、进入 jenkins</p>
<blockquote>
<p>浏览器地址栏: 公网 IP:8080</p>
</blockquote>
<p>3、页面上有个<strong>该文件在服务器：地址...</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #7F848E; font-style: italic">#查看某一个文件包含的东西</span></span>
<span class="line"><span style="color: #ABB2BF">[root@主机名  yum.repos.d]</span><span style="color: #7F848E; font-style: italic"># cat 地址</span></span>
<span class="line"><span style="color: #ABB2BF">***********************(会打印管理员密码)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、输入管理员密码</p>
<blockquote>
<p>将密码粘贴到输入框，点击继续</p>
</blockquote>
<p>5、安装推荐的插件</p>
<p>6、创建第一个管理员用户</p>
<blockquote>
<p>用户名：xiao 记住</p>
<p>密码：MiMa123456 记住</p>
<p>全名：自定义</p>
<p>电子邮箱地址：自定义</p>
</blockquote>
<p>7、保存并完成</p>
<p>8、进入 Jenkins</p>
<h3 id="安装-nginx" tabindex="-1"><a class="header-anchor" href="#安装-nginx" aria-hidden="true">#</a> 安装 nginx</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #7F848E; font-style: italic">#安装nginx</span></span>
<span class="line"><span style="color: #ABB2BF">[root@主机名 ~]</span><span style="color: #7F848E; font-style: italic"># dnf install nginx</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #7F848E; font-style: italic">#启动nginx</span></span>
<span class="line"><span style="color: #ABB2BF">[root@主机名 ~]</span><span style="color: #7F848E; font-style: italic">#systemctl start nginx</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#查看状态</span></span>
<span class="line"><span style="color: #ABB2BF">[root@主机名 ~]</span><span style="color: #7F848E; font-style: italic">#systemctl status nginx</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#随操作系统启动自动启动</span></span>
<span class="line"><span style="color: #ABB2BF">[root@主机名 ~]</span><span style="color: #7F848E; font-style: italic">#systemctl enable nginx</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>​ 也可以在浏览器测试 nginx 是否安装成功，直接在浏览器输入公网 IP 回车，出现一个 Welcome to nginx...。其实这是一个 index.html 文件，页面内容第一行末尾写 It is located in /usr/share/nginx/html，这个是存放 index 文件的目录。</p>
</blockquote>
<h4 id="使用-1" tabindex="-1"><a class="header-anchor" href="#使用-1" aria-hidden="true">#</a> 使用</h4>
<p>1、进入存放 index 的文件夹</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #7F848E; font-style: italic">#进入存放index的文件夹</span></span>
<span class="line"><span style="color: #ABB2BF">[root@主机名 ~]</span><span style="color: #7F848E; font-style: italic"># cd  /usr/share/nginx/html</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2、编写 index 文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #7F848E; font-style: italic">#编写index文件</span></span>
<span class="line"><span style="color: #ABB2BF">[root@主机名 html]</span><span style="color: #7F848E; font-style: italic"># vi index.html</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3、按 shift+： 输入 q 退出 去其他地方进行编辑</p>
<p>4、进入 root 文件夹下</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #7F848E; font-style: italic">#进入root文件夹</span></span>
<span class="line"><span style="color: #ABB2BF">[root@主机名 html]</span><span style="color: #7F848E; font-style: italic"># cd /root/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>5、创建存放<strong>项目</strong>的文件夹</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #7F848E; font-style: italic">#在root下创建cms文件夹 存放项目</span></span>
<span class="line"><span style="color: #ABB2BF">[root@主机名 ~]</span><span style="color: #7F848E; font-style: italic"># mkdir cms</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>6、进入<strong>项目</strong>文件夹</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #7F848E; font-style: italic">#进入项目文件夹</span></span>
<span class="line"><span style="color: #ABB2BF">[root@主机名 ~]</span><span style="color: #7F848E; font-style: italic"># cd cms/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>7、新建 index.html 文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #7F848E; font-style: italic">#新建index.html文件</span></span>
<span class="line"><span style="color: #ABB2BF">[root@主机名 cms]</span><span style="color: #7F848E; font-style: italic"># touch index.html</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>8、编辑 index.html 文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #7F848E; font-style: italic">#编辑index.html文件</span></span>
<span class="line"><span style="color: #ABB2BF">[root@主机名 cms]</span><span style="color: #7F848E; font-style: italic"># vi index.html</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>输入 i，进入编辑模式；在页面输入 Hello Nginx；点击 ESC 退出；shift+： ，输入 wq，保存并退出。</p>
</blockquote>
<p>9、修改 nginx 让默认访问的文件变成项目下的 index.html</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #7F848E; font-style: italic">#修改nginx</span></span>
<span class="line"><span style="color: #ABB2BF">[root@主机名 cms]</span><span style="color: #7F848E; font-style: italic"># vi /etc/nginx/nginx.conf</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>10、按照 Remote-SSH 连接成功之后</p>
<blockquote>
<p>点击打开文件夹，在输入框选择文件夹/文件，进行修改，例如修改项目中的 index.html 文件，让它成为真正的 html 文件。</p>
</blockquote>
<p>11、修改 nginx 的权限</p>
<blockquote>
<p>nginx 目录：/etc/nginx/nginx.conf；进入 nginx 的配置文件进行修改</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #7F848E; font-style: italic">#将nginx的权限改为root  因为有些文件nginx没有权限访问</span></span>
<span class="line"><span style="color: #ABB2BF">将第五行  user nginx;修改成use root;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>12、修改 nginx 的默认访问文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #ABB2BF">server {</span></span>
<span class="line"><span style="color: #ABB2BF">	    </span><span style="color: #7F848E; font-style: italic">#默认80端口</span></span>
<span class="line"><span style="color: #ABB2BF">        listen       80 default_server;</span></span>
<span class="line"><span style="color: #ABB2BF">        listen       [::]:80 default_server;</span></span>
<span class="line"><span style="color: #ABB2BF">        server_name  _;</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #7F848E; font-style: italic">#注释默认的访问路径</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #7F848E; font-style: italic"># root         /usr/share/nginx/html;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #7F848E; font-style: italic"># Load configuration files for the default server block.</span></span>
<span class="line"><span style="color: #ABB2BF">        include /etc/nginx/default.d/*.conf;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">        location / {</span></span>
<span class="line"><span style="color: #ABB2BF">        	</span><span style="color: #7F848E; font-style: italic">#添加项目的访问路径</span></span>
<span class="line"><span style="color: #ABB2BF">            root /root/cms;</span></span>
<span class="line"><span style="color: #ABB2BF">            </span><span style="color: #7F848E; font-style: italic">#访问上面路径的index.html文件</span></span>
<span class="line"><span style="color: #ABB2BF">            index index.html;</span></span>
<span class="line"><span style="color: #ABB2BF">            </span><span style="color: #7F848E; font-style: italic">#history路由模式刷新404  必须添加这一行   哈希路由应该没事</span></span>
<span class="line"><span style="color: #ABB2BF">            try_files </span><span style="color: #E06C75">$uri</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">$uri</span><span style="color: #ABB2BF">/ /index.html;</span></span>
<span class="line"><span style="color: #ABB2BF">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">        error_page 404 /404.html;</span></span>
<span class="line"><span style="color: #ABB2BF">            location = /40x.html {</span></span>
<span class="line"><span style="color: #ABB2BF">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">        error_page 500 502 503 504 /50x.html;</span></span>
<span class="line"><span style="color: #ABB2BF">            location = /50x.html {</span></span>
<span class="line"><span style="color: #ABB2BF">        }</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>保存后，重启 nginx</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #7F848E; font-style: italic">#重启nginx</span></span>
<span class="line"><span style="color: #ABB2BF">[root@主机名 ~]</span><span style="color: #7F848E; font-style: italic"># systemctl restart nginx</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>这个时候刷新浏览器，访问的就是在项目中新建的 index.html 文件</p>
</blockquote>
<h2 id="自动化部署" tabindex="-1"><a class="header-anchor" href="#自动化部署" aria-hidden="true">#</a> 自动化部署</h2>
<blockquote>
<p>原理：将代码 push 到 github 仓库，然后在 Jenkins 创建个任务(每隔半小时，自动去 github 仓库 clone 代码)，然后在 Jenkins 执行 npm run build 生成 dist 文件夹，再用 shell 脚本把生成的 dist 文件夹移动到存放项目的文件夹(cms)</p>
</blockquote>
<h3 id="将代码-push-到-github" tabindex="-1"><a class="header-anchor" href="#将代码-push-到-github" aria-hidden="true">#</a> 将代码 push 到 github</h3>
<blockquote>
<p>点击头像旁的+号，选择 New repository；给仓库起名，选择 private(私有)，然后点击 create repository 创建仓库。</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #56B6C2">echo</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;# 项目名&quot;</span><span style="color: #ABB2BF"> &gt;&gt; README.md</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#vue创建项目默认有</span></span>
<span class="line"><span style="color: #ABB2BF">git init</span></span>
<span class="line"><span style="color: #ABB2BF">git add README.md</span></span>
<span class="line"><span style="color: #ABB2BF">git commit -m </span><span style="color: #98C379">&quot;first commit&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">git branch -M main</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>需要进行的操作</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #7F848E; font-style: italic">#查看remote  显示origin就是有项目了</span></span>
<span class="line"><span style="color: #ABB2BF">git remote</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#先把项目中的remote移除</span></span>
<span class="line"><span style="color: #ABB2BF">git remote remove origin</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#执行这一语句 与仓库进行绑定</span></span>
<span class="line"><span style="color: #ABB2BF">git remote add origin git@github.com:xiao/cs.git</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#推送至远程仓库  刷新浏览器，就有对应代码了</span></span>
<span class="line"><span style="color: #ABB2BF">git push -u origin main</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-jenkins-新建项目" tabindex="-1"><a class="header-anchor" href="#使用-jenkins-新建项目" aria-hidden="true">#</a> 使用 Jenkins 新建项目</h3>
<blockquote>
<p>​ 来到 Jenkins 的首页(公网 IP:8080)，选择新建任务(new item)，选择第一个 <strong>构建一个自由风格的软件项目(Freestyle project)</strong>，<strong>任务名称</strong>可以自定义，然后点击确定。</p>
<p>​ 在 General，需要进行很多配置，详情在后面。</p>
</blockquote>
<h3 id="安装-git" tabindex="-1"><a class="header-anchor" href="#安装-git" aria-hidden="true">#</a> 安装 git</h3>
<blockquote>
<p>因为 Jenkins-General 的源码管理要使用 git，而服务器上没有 git</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #7F848E; font-style: italic">#安装git</span></span>
<span class="line"><span style="color: #ABB2BF">[root@主机名 ~]</span><span style="color: #7F848E; font-style: italic"># dnf install git</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#确认安装吗</span></span>
<span class="line"><span style="color: #ABB2BF">y</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>Jenkins-General：源码管理选择 git，Repository URL 填入对应的 github 仓库(因为仓库私有，所以需要认证)。Credentials(认证)：点击添加，进入到添加凭据。</p>
</blockquote>
<h3 id="添加凭据" tabindex="-1"><a class="header-anchor" href="#添加凭据" aria-hidden="true">#</a> 添加凭据</h3>
<blockquote>
<p><strong>Domain</strong>：全局凭据</p>
<p>**类型：**Username with password</p>
<p>**范围：**全局</p>
<p>**用户名：**github 用户名</p>
<p>**密码：**github 不允许密码访问，需要使用 token。</p>
</blockquote>
<p>得到 github 的 token：</p>
<blockquote>
<p>点击头像=&gt;选择 settings=&gt;选择 Developer settings=&gt;选择 Personal access tokens=&gt;点击 Generate new token</p>
<p>Note：自定义</p>
<p>Expiration(有效期)：自定义</p>
<p>勾选 repo 全选这个 repo</p>
</blockquote>
<p>点击生成 token，将 token 复制到上面，点击添加，就可以选择<strong>Credentials</strong>了。</p>
<h3 id="继续配置-jenkins" tabindex="-1"><a class="header-anchor" href="#继续配置-jenkins" aria-hidden="true">#</a> 继续配置 Jenkins</h3>
<p><strong>Jenkins-General</strong></p>
<blockquote>
<p>**源码管理：**git</p>
<p><strong>Repository URL</strong>：仓库 url 地址</p>
<p><strong>Credentials</strong>：选择凭据</p>
<p><strong>指定分支</strong>：*/main</p>
<p>**构建触发器：**定时构建 日程表：H 9 * * *</p>
<p>**构建环境：**需要选择 Node，因为没有 Node，所以需要安装。</p>
</blockquote>
<p><strong>定时构建语法</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #ABB2BF">*(分) *(时) *(天) *(月) *(周)</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#每半小时构建一次OR每半小时检查一次远程代码分支，有更新则构建</span></span>
<span class="line"><span style="color: #ABB2BF">H/30 * * * *</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#每两小时构建一次OR每两小时检查一次远程代码分支，有更新则构建</span></span>
<span class="line"><span style="color: #ABB2BF">H H/2 * * *</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#每天凌晨两点定时构建</span></span>
<span class="line"><span style="color: #ABB2BF">H 2 * * *</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#每月15号执行构建</span></span>
<span class="line"><span style="color: #ABB2BF">H H 15 * *</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#工作日，上午9点整执行</span></span>
<span class="line"><span style="color: #ABB2BF">H 9 * * 1-5</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#每周1,3,5，从8:30开始，截止19:30，每4小时30分构建一次</span></span>
<span class="line"><span style="color: #ABB2BF">H/30 8-20/4 * * 1,3,5</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-node" tabindex="-1"><a class="header-anchor" href="#安装-node" aria-hidden="true">#</a> 安装 Node</h3>
<blockquote>
<p>构建环境需要 Node 环境，因为没有 Node，所以需要安装，这个是安装在 Jenkins 上的。</p>
</blockquote>
<p>点击左上角 Jenkins 的图片，回到首页。</p>
<blockquote>
<p>点击系统管理(Manage Jenkins)=&gt;点击插件管理(Manage Plugins)=&gt;可选插件=&gt;找到 NodeJs 勾选(下面有这一行：NodeJS Plugin executes <a href="http://nodejs.org/" target="_blank" rel="noopener noreferrer">NodeJS<ExternalLinkIcon/></a> script as a build step.)=&gt;点击 Download now and install after restart=&gt;返回首页(或者它自己会自动重启)</p>
</blockquote>
<p>安装 node</p>
<blockquote>
<p>首页=&gt;系统管理=&gt;全局工具配置=&gt;划到最下面 NodeJS=&gt;点击新增 NodeJS=&gt;别名自定义，勾选自动安装，版本选择 14.17.5=&gt;点击保存</p>
</blockquote>
<h3 id="继续配置-jenkins-1" tabindex="-1"><a class="header-anchor" href="#继续配置-jenkins-1" aria-hidden="true">#</a> 继续配置 Jenkins</h3>
<blockquote>
<p>点击首页=&gt;所有(任务列表)=&gt;名称下的任务，进入任务=&gt;点击配置</p>
</blockquote>
<p><strong>Jenkins-General</strong></p>
<blockquote>
<p>**源码管理：**git</p>
<p><strong>Repository URL</strong>：仓库 url 地址</p>
<p><strong>Credentials</strong>：选择凭据</p>
<p><strong>指定分支</strong>：*/main</p>
<p>**构建触发器：**定时构建 日程表：H 9 * * *</p>
<p>**构建环境：**Provide Node &amp; npm bin/ folder to PATH</p>
<p>**构建：**详见下方</p>
</blockquote>
<p>执行 shell</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #7F848E; font-style: italic">#!/bin/bash</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#当前所在位置</span></span>
<span class="line"><span style="color: #56B6C2">pwd</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#node版本</span></span>
<span class="line"><span style="color: #ABB2BF">node -v</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#npm版本</span></span>
<span class="line"><span style="color: #ABB2BF">npm -v</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#安装npm依赖包</span></span>
<span class="line"><span style="color: #ABB2BF">npm install</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#打包</span></span>
<span class="line"><span style="color: #ABB2BF">npm run build</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#输出 构建完成</span></span>
<span class="line"><span style="color: #56B6C2">echo</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;构建完成&quot;</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#查看目录结构</span></span>
<span class="line"><span style="color: #ABB2BF">ls</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#删除该文件夹下面的东西</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#rm：remove -r：递归 f:强制的移除</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#当前的Jenkins可能没有权限，所以也要修改它的权限</span></span>
<span class="line"><span style="color: #ABB2BF">rm -rf /root/cms/*</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#将打包的dist文件夹下的内容移动到cms项目</span></span>
<span class="line"><span style="color: #ABB2BF">cp -rf ./dist/* /root/cms/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>然后点击保存，之后可以点击左侧菜单的立即构建，测试是否配置成功(可以进去看控制台输出)。</p>
</blockquote>
<p><strong>设置 Jenkins 的权限</strong></p>
<blockquote>
<p>利用 Remote-SSH 连接服务器，找到/etc/sysconf/jenkins，然后修改权限。</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #ABB2BF">将29行的JENKINS_USER=</span><span style="color: #98C379">&quot;jenkins&quot;</span><span style="color: #ABB2BF">修改成JENKINS_USER=</span><span style="color: #98C379">&quot;root&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>保存之后，重启 jenkins</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #7F848E; font-style: italic">#重启jenkins</span></span>
<span class="line"><span style="color: #ABB2BF">[root@主机名 ~]</span><span style="color: #7F848E; font-style: italic"># systemctl restart jenkins</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>然后再次点击立即构建，如果出现 ERROR:Error fetching remote repo &quot;origin&quot;的话，是 github 的原因(因为有的时候连接不上)；构建成功刷新之后，就会显示自己的项目了。</p>
</blockquote>
<h2 id="生产环境" tabindex="-1"><a class="header-anchor" href="#生产环境" aria-hidden="true">#</a> 生产环境</h2>
<blockquote>
<p>需要修改生产环境的 API</p>
</blockquote>
<p><strong>星光不问赶路人，时光不负有心人。</strong></p>
</div></template>
