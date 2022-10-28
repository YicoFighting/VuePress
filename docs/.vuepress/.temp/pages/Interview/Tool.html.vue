<template><div><h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> GIT</h1>
<h2 id="_1-git-与-svn-的区别在哪里" tabindex="-1"><a class="header-anchor" href="#_1-git-与-svn-的区别在哪里" aria-hidden="true">#</a> 1. git 与 svn 的区别在哪里？</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">git 和 svn 最大的区别在于 git 是分布式的，而 svn 是集中式的。因此我们不能再离线的情况下使用 svn。如果服务器</span></span>
<span class="line"><span style="color: #abb2bf">出现问题，我们就没有办法使用 svn 来提交我们的代码。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">svn 中的分支是整个版本库的复制的一份完整目录，而 git 的分支是指针指向某次提交，因此 git 的分支创建更加开销更小</span></span>
<span class="line"><span style="color: #abb2bf">并且分支上的变化不会影响到其他人。svn 的分支变化会影响到所有的人。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">svn 的指令相对于 git 来说要简单一些，比 git 更容易上手。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详细资料可以参考：
<a href="https://github.com/geeeeeeeeek/git-recipes/wiki/3.5-%E5%B8%B8%E8%A7%81%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%AF%94%E8%BE%83" target="_blank" rel="noopener noreferrer">《常见工作流比较》<ExternalLinkIcon/></a>
<a href="https://juejin.im/post/5bd95bf4f265da392c5307eb" target="_blank" rel="noopener noreferrer">《对比 Git 与 SVN，这篇讲的很易懂》<ExternalLinkIcon/></a>
<a href="https://blog.csdn.net/github_33304260/article/details/80171456" target="_blank" rel="noopener noreferrer">《GIT 与 SVN 世纪大战》<ExternalLinkIcon/></a>
<a href="https://www.jianshu.com/p/e8ad60710017" target="_blank" rel="noopener noreferrer">《Git 学习小记之分支原理》<ExternalLinkIcon/></a></p>
<h2 id="_2-经常使用的-git-命令" tabindex="-1"><a class="header-anchor" href="#_2-经常使用的-git-命令" aria-hidden="true">#</a> 2. 经常使用的 git 命令？</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">git init                     // 新建 git 代码库</span></span>
<span class="line"><span style="color: #abb2bf">git add                      // 添加指定文件到暂存区</span></span>
<span class="line"><span style="color: #abb2bf">git rm                       // 删除工作区文件，并且将这次删除放入暂存区</span></span>
<span class="line"><span style="color: #abb2bf">git commit -m [message]      // 提交暂存区到仓库区</span></span>
<span class="line"><span style="color: #abb2bf">git branch                   // 列出所有分支</span></span>
<span class="line"><span style="color: #abb2bf">git checkout -b [branch]     // 新建一个分支，并切换到该分支</span></span>
<span class="line"><span style="color: #abb2bf">git status                   // 显示有变更的文件</span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详细资料可以参考：
<a href="http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html" target="_blank" rel="noopener noreferrer">《常用 Git 命令清单》<ExternalLinkIcon/></a></p>
<h2 id="_3-git-pull-和-git-fetch-的区别" tabindex="-1"><a class="header-anchor" href="#_3-git-pull-和-git-fetch-的区别" aria-hidden="true">#</a> 3. git pull 和 git fetch 的区别</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">git fetch 只是将远程仓库的变化下载下来，并没有和本地分支合并。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">git pull 会将远程仓库的变化下载下来，并和当前分支合并。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://blog.csdn.net/weixin_41975655/article/details/82887273" target="_blank" rel="noopener noreferrer">《详解 git pull 和 git fetch 的区别》<ExternalLinkIcon/></a></p>
<h2 id="_4-git-rebase-和-git-merge-的区别" tabindex="-1"><a class="header-anchor" href="#_4-git-rebase-和-git-merge-的区别" aria-hidden="true">#</a> 4. git rebase 和 git merge 的区别</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">git merge 和 git rebase 都是用于分支合并，关键在 commit 记录的处理上不同。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">git merge 会新建一个新的 commit 对象，然后两个分支以前的 commit 记录都指向这个新 commit 记录。这种方法会</span></span>
<span class="line"><span style="color: #abb2bf">保留之前每个分支的 commit 历史。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">git rebase 会先找到两个分支的第一个共同的 commit 祖先记录，然后将提取当前分支这之后的所有 commit 记录，然后</span></span>
<span class="line"><span style="color: #abb2bf">将这个 commit 记录添加到目标分支的最新提交后面。经过这个合并后，两个分支合并后的 commit 记录就变为了线性的记</span></span>
<span class="line"><span style="color: #abb2bf">录了。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://www.jianshu.com/p/f23f72251abc" target="_blank" rel="noopener noreferrer">《git rebase 和 git merge 的区别》<ExternalLinkIcon/></a>
<a href="https://blog.csdn.net/liuxiaoheng1992/article/details/79108233" target="_blank" rel="noopener noreferrer">《git merge 与 git rebase 的区别》<ExternalLinkIcon/></a></p>
</div></template>
