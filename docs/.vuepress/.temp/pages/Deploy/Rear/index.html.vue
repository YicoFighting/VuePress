<template><div><h1 id="后端部署" tabindex="-1"><a class="header-anchor" href="#后端部署" aria-hidden="true">#</a> 后端部署</h1>
<h2 id="购买云服务器" tabindex="-1"><a class="header-anchor" href="#购买云服务器" aria-hidden="true">#</a> 购买云服务器</h2>
<p>控制台</p>
<p>链接：<a href="https://ecs-buy.aliyun.com/wizard?spm=5176.13329450.home-res.buy.2c4f4df5EyzBkC#/postpay/cn-shenzhen?orderSource=buyWizard-console-overview" target="_blank" rel="noopener noreferrer">阿里云 - 弹性计算 (aliyun.com)<ExternalLinkIcon/></a></p>
<p>基础配置：</p>
<blockquote>
<p>按量付费</p>
<p>华南 1(深圳)，选一个离你地区最近的</p>
<p>2vCPU 4GB</p>
<p>高主频计算型 hfc7</p>
<p>CentOS 8.0 以上版本</p>
</blockquote>
<p>系统配置</p>
<blockquote>
<p>root</p>
<p>****(密码)</p>
<p>主机名:xiao</p>
</blockquote>
<h2 id="配置云服务器" tabindex="-1"><a class="header-anchor" href="#配置云服务器" aria-hidden="true">#</a> 配置云服务器</h2>
<h3 id="连接云服务器" tabindex="-1"><a class="header-anchor" href="#连接云服务器" aria-hidden="true">#</a> 连接云服务器</h3>
<p>Windows 电脑上我推荐直接使⽤ git bash ssh ⼯具</p>
<p>Mac OS 电脑上我们可以直接通过终端来使⽤ ssh ⼯具</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #7F848E; font-style: italic">#连接云服务器</span></span>
<span class="line"><span style="color: #ABB2BF">ssh root@公网IP</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果在计算机中想要更改主机名，修改之后需要重启服务器</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #7F848E; font-style: italic"># 修改主机名 重启服务器</span></span>
<span class="line"><span style="color: #ABB2BF">hostnamectl --static set-hostname coder</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-node-js" tabindex="-1"><a class="header-anchor" href="#安装-node-js" aria-hidden="true">#</a> 安装 Node.js</h3>
<p>我们安装软件使⽤⼯具：dnf</p>
<blockquote>
<p>DNF，全称 Dandified（时髦的、华丽的）</p>
<p>Yum； 是 Yum 的下⼀个版本，也被称之为 Yum 的替代品；</p>
<p>如果是 centos7 的版本，没有⾃带 dnf，需要通过 yum 进⾏安装（这个⾃⾏安装⼀下）；</p>
<p>刚才在选择云服务器时，我选择的是 centos8，所以是⾃带 dnf 的；</p>
</blockquote>
<p>检查 dnf 是否可⽤</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #ABB2BF">dnf --help</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果我们希望安装⼀个软件包，可以进⾏如下的操作</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #7F848E; font-style: italic"># 搜索软件包</span></span>
<span class="line"><span style="color: #ABB2BF">dnf search nodejs</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 查看软件包信息: nodejs的版本是10.21.0</span></span>
<span class="line"><span style="color: #ABB2BF">dnf info nodejs</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 安装nodejs</span></span>
<span class="line"><span style="color: #ABB2BF">dnf install nodejs</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们会发现版本其实是 10.21.0：</p>
<blockquote>
<p>我们其实希望使⽤更⾼的版本，⽐如最新的 LTS 或者 Current 版本；</p>
<p>这个时候我们可以使⽤之前讲过的⼀个⼯具：n；</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #7F848E; font-style: italic"># 安装n</span></span>
<span class="line"><span style="color: #ABB2BF">npm install n -g</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 通过n安装最新的lts和current</span></span>
<span class="line"><span style="color: #ABB2BF">n install lts</span></span>
<span class="line"><span style="color: #ABB2BF">n install latest</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 通过n切换版本</span></span>
<span class="line"><span style="color: #ABB2BF">n</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果发现切换之后终端没有反应，可以进⾏重启：</p>
<blockquote>
<p>⽅式⼀：重新通过 ssh 建⽴连接；</p>
<p>⽅式⼆：重启 ssh service sshd restart</p>
</blockquote>
<h3 id="安装-mysql" tabindex="-1"><a class="header-anchor" href="#安装-mysql" aria-hidden="true">#</a> 安装 MySQL</h3>
<p>使⽤ dnf 来安装 MySQL：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #7F848E; font-style: italic"># 查找MySQL</span></span>
<span class="line"><span style="color: #ABB2BF">dnf search mysql-server</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 查看MySQL，这⾥的版本是8.0.21</span></span>
<span class="line"><span style="color: #ABB2BF">dnf info mysql-server</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 安装MySQL，这⾥加-y的意思是依赖的内容也安装</span></span>
<span class="line"><span style="color: #ABB2BF">dnf install mysql-server -y</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动 mysql-server</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #7F848E; font-style: italic"># 开启MySQL后台服务</span></span>
<span class="line"><span style="color: #ABB2BF">systemctl start mysqld</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 查看MySQL服务：active (running)表示启动成功</span></span>
<span class="line"><span style="color: #ABB2BF">systemctl status mysqld</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 随着系统⼀起启动</span></span>
<span class="line"><span style="color: #ABB2BF">systemctl </span><span style="color: #56B6C2">enable</span><span style="color: #ABB2BF"> mysqld</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置-mysql" tabindex="-1"><a class="header-anchor" href="#配置-mysql" aria-hidden="true">#</a> 配置 MySQL</h3>
<p>配置 MySQL 账号和密码</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #ABB2BF">mysql_secure_installation</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 接下来有⼀些选项，⽐如密码强度等等⼀些</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># MySQL8开始通常设置密码强度较强，选择2</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 其他的选项可以⾃⾏选择 一般选y</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 强密码包括大小写、数字、特殊字符</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 例如:MiMa123456!</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，我们就可以直接在服务器中操作 MySQL 了</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #7F848E; font-style: italic"># 登录mysql</span></span>
<span class="line"><span style="color: #ABB2BF">mysql -u root -p</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 展示数据库</span></span>
<span class="line"><span style="color: #ABB2BF">mysql&gt; show databases;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们希望在⾃⼰的电脑上直接连接 MySQL</p>
<p>Navicat</p>
<blockquote>
<p>连接名:随意</p>
<p>主机:公网 IP</p>
<p>端口:3306</p>
<p>用户名:root</p>
<p>密码:MiMa123456!</p>
</blockquote>
<p>但是阿⾥云默认有在安全组中禁⽌掉 3306 端的连接，所以我们需要配置 3306 的安全组</p>
<blockquote>
<p>服务器实例</p>
<p>更多</p>
<p>网络和安全组</p>
<p>安全组配置</p>
<p>配置规则</p>
<p>快速添加，勾选 3306(MySQL)</p>
</blockquote>
<p>然后再配置 root 可以远程连接</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #7F848E; font-style: italic"># 必须登录mysql后执行</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 使⽤mysql数据库</span></span>
<span class="line"><span style="color: #ABB2BF">mysql&gt; use mysql;</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 查看user表中，连接权限，默认看到root是localhost</span></span>
<span class="line"><span style="color: #ABB2BF">mysql&gt; </span><span style="color: #C678DD">select</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">host,</span><span style="color: #ABB2BF"> user from user;</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 修改权限</span></span>
<span class="line"><span style="color: #ABB2BF">mysql&gt; update user </span><span style="color: #56B6C2">set</span><span style="color: #ABB2BF"> host = </span><span style="color: #98C379">&#39;%&#39;</span><span style="color: #ABB2BF"> where user = </span><span style="color: #98C379">&#39;root&#39;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 刷新列表,使其生效</span></span>
<span class="line"><span style="color: #ABB2BF">mysql&gt; flush privileges;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="数据库迁移" tabindex="-1"><a class="header-anchor" href="#数据库迁移" aria-hidden="true">#</a> 数据库迁移</h4>
<p>第⼀步：在服务器 MySQL 中创建 coder 的数据库： 可以通过命令，也可以通过 Navicat 直接创建</p>
<blockquote>
<p>右键 =&gt; 新建数据库 =&gt; 字符集：utf8mb4 =&gt; 排序规则：utf8mb4_0900_ai_ci</p>
</blockquote>
<p>第⼆步：在 Navicat ⼯具中本地 MySQL 直接导出数据库</p>
<blockquote>
<p>右键 =&gt; 转储 SQL 文件 =&gt; 结构 + 数据</p>
</blockquote>
<p>第三步：在 Navicat ⼯具中服务器 MySQL 中执⾏ MySQL</p>
<blockquote>
<p>找到第一步新建的数据库 =&gt; 右键 =&gt; 运行 SQL 文件</p>
</blockquote>
<h2 id="部署-node-项目" tabindex="-1"><a class="header-anchor" href="#部署-node-项目" aria-hidden="true">#</a> 部署 Node 项⽬</h2>
<h3 id="直接上传文件" tabindex="-1"><a class="header-anchor" href="#直接上传文件" aria-hidden="true">#</a> 直接上传文件</h3>
<p>使用 FileZilla</p>
<blockquote>
<p>新建站点</p>
<p>协议：SSH</p>
<p>主机：公网 IP</p>
<p>端口：不填(使用默认的)</p>
<p>用户：root</p>
<p>密码：MiMa123456</p>
<p>然后从本地站点拖到远程站点</p>
</blockquote>
<h3 id="手动部署" tabindex="-1"><a class="header-anchor" href="#手动部署" aria-hidden="true">#</a> ⼿动部署</h3>
<h4 id="代码托管到-git-仓库" tabindex="-1"><a class="header-anchor" href="#代码托管到-git-仓库" aria-hidden="true">#</a> 代码托管到 Git 仓库</h4>
<p>在 GitHub 中创建仓库，并且将当前代码放到 GitHub 中 添加.gitignore ⽂件时，忽略⼀些⽂件：</p>
<blockquote>
<p>忽略 uploads</p>
<p>忽略.env</p>
</blockquote>
<h4 id="clone-到服务器" tabindex="-1"><a class="header-anchor" href="#clone-到服务器" aria-hidden="true">#</a> clone 到服务器</h4>
<p>服务器我们使⽤ Git 来 clone 代码：</p>
<blockquote>
<p>centos8 服务器中默认是没有安装 Git 的；</p>
<p>我们可以通过 dnf 来安装</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #ABB2BF">dnf search git;</span></span>
<span class="line"><span style="color: #ABB2BF">dnf info git;</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 当然你也可以直接安装（上⾯两个只是让⼤家看⼀下Git的详情）</span></span>
<span class="line"><span style="color: #ABB2BF">dnf install git;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以在根⽬录下创建⼀个⾃⼰的⽂件夹，⽐如 xiao</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #56B6C2">cd</span><span style="color: #ABB2BF"> /</span></span>
<span class="line"><span style="color: #ABB2BF">mkdir xiao</span></span>
<span class="line"><span style="color: #56B6C2">cd</span><span style="color: #ABB2BF"> xiao/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>clone 项⽬到 xiao 中</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #7F848E; font-style: italic">#git clone https://github.com/coder/hub.git</span></span>
<span class="line"><span style="color: #ABB2BF">git clone https://github.com/Xiao/hub.git</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vscode-打开代码" tabindex="-1"><a class="header-anchor" href="#vscode-打开代码" aria-hidden="true">#</a> VSCode 打开代码</h3>
<p>可以使⽤⼀个 VSCode 的插件：remote-ssh</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #ABB2BF">ssh root@公网IP</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装项⽬的依赖：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #ABB2BF">npm install</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置.env ⽂件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #ABB2BF">APP_HOST=http://110.110.110.110</span></span>
<span class="line"><span style="color: #ABB2BF">APP_PORT=8001</span></span>
<span class="line"><span style="color: #ABB2BF">MYSQL_HOST=localhost</span></span>
<span class="line"><span style="color: #ABB2BF">MYSQL_PORT=3306</span></span>
<span class="line"><span style="color: #ABB2BF">MYSQL_DATABASE=coder</span></span>
<span class="line"><span style="color: #ABB2BF">MYSQL_USER=root</span></span>
<span class="line"><span style="color: #ABB2BF">MYSQL_PASSWORD=MiMa123456!</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：加⼊ 8001 端⼝到安全组中</p>
<blockquote>
<p>服务器实例</p>
<p>更多</p>
<p>网络和安全组</p>
<p>安全组配置</p>
<p>配置规则</p>
<p>手动添加</p>
<table>
<thead>
<tr>
<th>授权策略</th>
<th>优先级</th>
<th>协议类型</th>
<th>端口范围</th>
<th>授权对象</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>允许</td>
<td>1</td>
<td>自定义 TCP</td>
<td>目的: 8001/8001</td>
<td>源: 0.0.0.0/0</td>
<td>运行端口</td>
</tr>
</tbody>
</table>
</blockquote>
<h3 id="pm2-启动-node-程序" tabindex="-1"><a class="header-anchor" href="#pm2-启动-node-程序" aria-hidden="true">#</a> pm2 启动 node 程序</h3>
<p>在真实的部署过程中，我们会使⽤⼀个⼯具 pm2 来管理 Node 的进程：</p>
<p>PM2 是⼀个 Node 的进程管理器；</p>
<p>我们可以使⽤它来管理 Node 的后台进程；</p>
<p>这样在关闭终端时，Node 进程会继续执⾏，那么服务器就可以继续为前端提供服务了；</p>
<p>安装 pm2</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #ABB2BF"> npm install pm2 -g</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>pm2 常⽤的命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #7F848E; font-style: italic"># 命名进程</span></span>
<span class="line"><span style="color: #ABB2BF">[root@xiao coder]</span><span style="color: #7F848E; font-style: italic"># pm2 start ./src/main.js --name xiao</span></span>
<span class="line"><span style="color: #ABB2BF">pm2 start app.js --name my-api</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 显示所有进程状态</span></span>
<span class="line"><span style="color: #ABB2BF">pm2 list</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 停⽌指定的进程</span></span>
<span class="line"><span style="color: #ABB2BF">pm2 stop 0</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 停⽌所有进程</span></span>
<span class="line"><span style="color: #ABB2BF">pm2 stop all</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 重启所有进程</span></span>
<span class="line"><span style="color: #ABB2BF">pm2 restart all</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 重启指定的进程</span></span>
<span class="line"><span style="color: #ABB2BF">pm2 restart 0</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 杀死指定的进程</span></span>
<span class="line"><span style="color: #ABB2BF">pm2 delete 0</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 杀死全部进程</span></span>
<span class="line"><span style="color: #ABB2BF">pm2 delete all</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#后台运⾏pm2，启动4个app.js，实现负载均衡</span></span>
<span class="line"><span style="color: #ABB2BF">[root@xiao coder]</span><span style="color: #7F848E; font-style: italic">#  pm2 start ./src/main.js -i 2</span></span>
<span class="line"><span style="color: #ABB2BF">pm2 start app.js -i 4(几核就写几)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jenkins-自动化部署" tabindex="-1"><a class="header-anchor" href="#jenkins-自动化部署" aria-hidden="true">#</a> jenkins ⾃动化部署</h2>
<h3 id="安装-java-环境" tabindex="-1"><a class="header-anchor" href="#安装-java-环境" aria-hidden="true">#</a> 安装 Java 环境</h3>
<p>Jenkins 本身是依赖 Java 的，所以我们需要先安装 Java 环境：</p>
<p>这⾥我安装了 Java1.8 的环境</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #ABB2BF">dnf search java1.8</span></span>
<span class="line"><span style="color: #ABB2BF">dnf install java-1.8.0-openjdk.x86_64</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-jenkins" tabindex="-1"><a class="header-anchor" href="#安装-jenkins" aria-hidden="true">#</a> 安装 Jenkins</h3>
<p>因为 Jenkins 本身是没有在 dnf 的软件仓库包中的，所以我们需要连接 Jenkins 仓库</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #ABB2BF">wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.rep</span></span>
<span class="line"><span style="color: #ABB2BF">o</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 导⼊GPG密钥以确保您的软件合法</span></span>
<span class="line"><span style="color: #ABB2BF">rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编辑⼀下⽂件/etc/yum.repos.d/jenkins.repo</p>
<p>可以通过 vim 编辑</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #ABB2BF">[jenkins]</span></span>
<span class="line"><span style="color: #ABB2BF">name=Jenkins-stable</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># baseurl=http://pkg.jenkins.io/redhat-stable 去掉 -stable</span></span>
<span class="line"><span style="color: #ABB2BF">baseurl=http://pkg.jenkins.io/redhat</span></span>
<span class="line"><span style="color: #ABB2BF">gpgcheck=1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装 Jenkins</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #ABB2BF">dnf install jenkins</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动 Jenkins 的服务</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #7F848E; font-style: italic"># 启动</span></span>
<span class="line"><span style="color: #ABB2BF">systemctl start jenkins</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 状态</span></span>
<span class="line"><span style="color: #ABB2BF">systemctl status jenkins</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 开机自启</span></span>
<span class="line"><span style="color: #ABB2BF">systemctl </span><span style="color: #56B6C2">enable</span><span style="color: #ABB2BF"> jenkins</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 报错</span></span>
<span class="line"><span style="color: #ABB2BF">jenkins.service is not a native service, redirecting to systemd-sysv-install.</span></span>
<span class="line"><span style="color: #ABB2BF">Executing: /usr/lib/systemd/systemd-sysv-install </span><span style="color: #56B6C2">enable</span><span style="color: #ABB2BF"> jenkins</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 开机自启修改</span></span>
<span class="line"><span style="color: #ABB2BF">/usr/lib/systemd/systemd-sysv-install </span><span style="color: #56B6C2">enable</span><span style="color: #ABB2BF"> jenkins</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Jenkins 默认使⽤ 8080 端⼝提供服务，所以需要加⼊到安全组中：</p>
<blockquote>
<p>服务器实例</p>
<p>更多</p>
<p>网络和安全组</p>
<p>安全组配置</p>
<p>配置规则</p>
<p>手动添加</p>
<table>
<thead>
<tr>
<th>授权策略</th>
<th>优先级</th>
<th>协议类型</th>
<th>端口范围</th>
<th>授权对象</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>允许</td>
<td>1</td>
<td>自定义 TCP</td>
<td>目的: 8080/8080</td>
<td>源: 0.0.0.0/0</td>
<td>运行端口</td>
</tr>
</tbody>
</table>
</blockquote>
<h3 id="jenkins-配置" tabindex="-1"><a class="header-anchor" href="#jenkins-配置" aria-hidden="true">#</a> Jenkins 配置</h3>
<p>打开浏览器，输⼊：公网 IP:8080</p>
<blockquote>
<p>注意：你输⼊⾃⼰的 IP 地址</p>
</blockquote>
<p>获取输⼊管理员密码：</p>
<blockquote>
<p>在下⾯的地址中 cat /var/lib/jenkins/secrets/initialAdminPassword</p>
<p>管理员密码：xxxxxxxxx</p>
</blockquote>
<p><strong>可以安装推荐的插件</strong></p>
<h3 id="jenkins-任务" tabindex="-1"><a class="header-anchor" href="#jenkins-任务" aria-hidden="true">#</a> Jenkins 任务</h3>
<p>账号密码都是 root</p>
<p><strong>新建任务</strong></p>
<blockquote>
<p>输入一个任务名称：字段不为空，且合法</p>
<p>选择 构建一个自由风格的软件项目</p>
</blockquote>
<p><strong>General</strong></p>
<blockquote>
<p>丢弃旧的构建</p>
<p>保持构建的天数 ： 10</p>
<p>保持构建的最大个数：8</p>
</blockquote>
<p><strong>源码管理</strong></p>
<blockquote>
<p>Git</p>
<p>Repository URL：https://github.com/coder/coder.git</p>
<p>Credentials：添加 =&gt; jenkins =&gt; Username with password =&gt; 用户名和密码填 github 的 =&gt; 然后左边就可以选择了</p>
<p>指定分支：master 改成 main</p>
</blockquote>
<p><strong>构建触发器</strong></p>
<blockquote>
<p>轮询 SCM：H H * * *</p>
</blockquote>
<p><strong>构建环境</strong></p>
<blockquote>
<p>​ jenkins 首页 =&gt; 管理 jenkins =&gt; 插件管理 =&gt; 可选插件 =&gt;NodeJS Plugin</p>
<p>​ jenkins 首页 =&gt; 管理 jenkins =&gt; 全局工具配置 =&gt; NodeJS =&gt; 别名(随意 Node16) =&gt; 选择版本</p>
<p>选择 Provide Node &amp; npm bin/ folder to PATH</p>
</blockquote>
<p><strong>构建</strong></p>
<p>执⾏的任务：</p>
<blockquote>
<p>查看 Node 的版本等是否有问题；</p>
<p>执⾏ npm install 安装项⽬的依赖；</p>
<p>移除 /mnt/coder 中的⽂件，除了.env</p>
</blockquote>
<p>执行 shell</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #ABB2BF">ls</span></span>
<span class="line"><span style="color: #ABB2BF">node -v</span></span>
<span class="line"><span style="color: #ABB2BF">npm -v</span></span>
<span class="line"><span style="color: #ABB2BF">npm install</span></span>
<span class="line"><span style="color: #56B6C2">cd</span><span style="color: #ABB2BF"> /mnt/xiao/</span></span>
<span class="line"><span style="color: #ABB2BF">ls</span></span>
<span class="line"><span style="color: #56B6C2">shopt</span><span style="color: #ABB2BF"> -s extglob</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#rm -rf /mnt/xiao/* !(&quot;.env&quot;|&quot;.&quot;|&quot;..&quot;|&quot;ecosystem.config.js&quot;)</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#rm -rf /mnt/xiao/* !(.env|.|..|ecosystem.config.js)</span></span>
<span class="line"><span style="color: #ABB2BF">find /mnt/xiao/* | grep -v ecosystem.config.js | xargs rm -rf</span></span>
<span class="line"><span style="color: #56B6C2">cd</span><span style="color: #ABB2BF"> /var/lib/jenkins/workspace/xiao</span></span>
<span class="line"><span style="color: #ABB2BF">ls</span></span>
<span class="line"><span style="color: #56B6C2">pwd</span></span>
<span class="line"><span style="color: #ABB2BF">cp -rf * /mnt/xiao/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jenkins-的权限" tabindex="-1"><a class="header-anchor" href="#jenkins-的权限" aria-hidden="true">#</a> Jenkins 的权限</h3>
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
<h3 id="最后启动" tabindex="-1"><a class="header-anchor" href="#最后启动" aria-hidden="true">#</a> 最后启动</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #7F848E; font-style: italic">// ecosystem.config.js⽂件</span></span>
<span class="line"><span style="color: #E5C07B">module</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">exports</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">apps</span><span style="color: #ABB2BF">: [</span></span>
<span class="line"><span style="color: #ABB2BF">    {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">name</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&#39;coder&#39;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&#39;./src/main.js&#39;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">watch</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">true</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    },</span></span>
<span class="line"><span style="color: #ABB2BF">  ],</span></span>
<span class="line"><span style="color: #ABB2BF">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动监听，每次有新代码，都会启动</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #ABB2BF">pm2 start ecosystem.config.js</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>星光不问赶路人，时光不负有心人。</strong></p>
</div></template>
