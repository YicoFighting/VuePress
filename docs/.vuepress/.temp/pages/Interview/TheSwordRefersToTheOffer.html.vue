<template><div><h1 id="剑指" tabindex="-1"><a class="header-anchor" href="#剑指" aria-hidden="true">#</a> 剑指</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<h3 id="二维数组中的查找" tabindex="-1"><a class="header-anchor" href="#二维数组中的查找" aria-hidden="true">#</a> 二维数组中的查找</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf">在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的</span></span>
<span class="line"><span style="color: #abb2bf">一个二维数组和一个整数，判断数组中是否含有该整数。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>思路：</p>
<p>（1）第一种方式是使用两层循环依次遍历，判断是否含有该整数。这一种方式最坏情况下的时间复杂度为 O(n^2)。</p>
<p>（2）第二种方式是利用递增序列的特点，我们可以从二维数组的右上角开始遍历。如果当前数值比所求的数要小，则将位置向下移动
，再进行判断。如果当前数值比所求的数要大，则将位置向左移动，再进行判断。这一种方式最坏情况下的时间复杂度为 O(n)。</p>
<h3 id="替换空格" tabindex="-1"><a class="header-anchor" href="#替换空格" aria-hidden="true">#</a> 替换空格</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">请实现一个函数，将一个字符串中的空格替换成“%20”。例如，当字符串为 We Are Happy.则经过替换之后的字符串为 We%20</span></span>
<span class="line"><span style="color: #abb2bf">Are%20Happy</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">使用正则表达式，结合字符串的 replace 方法将空格替换为 “%20”</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">str.replace(/\s/g,&quot;%20&quot;)</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="从尾到头打印链表" tabindex="-1"><a class="header-anchor" href="#从尾到头打印链表" aria-hidden="true">#</a> 从尾到头打印链表</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf">输入一个链表，从尾到头打印链表每个节点的值。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">利用栈来实现，首先根据头结点以此遍历链表节点，将节点加入到栈中。当遍历完成后，再将栈中元素弹出并打印，以此来实现。栈的</span></span>
<span class="line"><span style="color: #abb2bf">实现可以利用 Array 的 push 和 pop 方法来模拟。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重建二叉树" tabindex="-1"><a class="header-anchor" href="#重建二叉树" aria-hidden="true">#</a> 重建二叉树</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。例如输</span></span>
<span class="line"><span style="color: #abb2bf">入前序遍历序列 {1,2,4,7,3,5,6,8} 和中序遍历序列 {4,7,2,1,5,3,8,6}，则重建二叉树并返回。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">利用递归的思想来求解，首先先序序列中的第一个元素一定是根元素。然后我们去中序遍历中寻找到该元素的位置，找到后该元素的左</span></span>
<span class="line"><span style="color: #abb2bf">边部分就是根节点的左子树，右边部分就是根节点的右子树。因此我们可以分别截取对应的部分进行子树的递归构建。使用这种方式的</span></span>
<span class="line"><span style="color: #abb2bf">时间复杂度为 O(n)，空间复杂度为 O(logn)。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用两个栈实现队列" tabindex="-1"><a class="header-anchor" href="#用两个栈实现队列" aria-hidden="true">#</a> 用两个栈实现队列</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">用两个栈来实现一个队列，完成队列的 Push 和 Pop 操作。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">队列的一个基本特点是，元素先进先出。通过两个栈来模拟时，首先我们将两个栈分为栈 1 和栈 2。当执行队列的 push 操作时，直接</span></span>
<span class="line"><span style="color: #abb2bf">将元素 push 进栈 1 中。当队列执行 pop 操作时，首先判断栈 2 是否为空，如果不为空则直接 pop 元素。如果栈 2 为空，则将栈 1 中</span></span>
<span class="line"><span style="color: #abb2bf">的所有元素 pop 然后 push 到栈 2 中，然后再执行栈 2 的 pop 操作。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">扩展：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">当使用两个长度不同的栈来模拟队列时，队列的最大长度为较短栈的长度的两倍。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="旋转数组的最小数字" tabindex="-1"><a class="header-anchor" href="#旋转数组的最小数字" aria-hidden="true">#</a> 旋转数组的最小数字</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。 输入一个非递减排序的数组的一个旋转，输出旋转数组的</span></span>
<span class="line"><span style="color: #abb2bf">最小元素。 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为 1。 NOTE：给出的所有元素都大于 0，若数组大</span></span>
<span class="line"><span style="color: #abb2bf">小为 0，请返回 0。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（1）我们输入的是一个非递减排序的数组的一个旋转，因此原始数组的值递增或者有重复。旋转之后原始数组的值一定和一个值相</span></span>
<span class="line"><span style="color: #abb2bf">邻，并且不满足递增关系。因此我们就可以进行遍历，找到不满足递增关系的一对值，后一个值就是旋转数组的最小数字。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（2）二分法</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相关资料可以参考：
<a href="https://www.cnblogs.com/edisonchou/p/4746561.html" target="_blank" rel="noopener noreferrer">《旋转数组的最小数字》<ExternalLinkIcon/></a></p>
<h3 id="斐波那契数列" tabindex="-1"><a class="header-anchor" href="#斐波那契数列" aria-hidden="true">#</a> 斐波那契数列</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">大家都知道斐波那契数列，现在要求输入一个整数 n，请你输出斐波那契数列的第 n 项。 n&lt;=39</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">斐波那契数列的规律是，第一项为 0，第二项为 1，第三项以后的值都等于前面两项的和，因此我们可以通过循环的方式，不断通过叠</span></span>
<span class="line"><span style="color: #abb2bf">加来实现第 n 项值的构建。通过循环而不是递归的方式来实现，时间复杂度降为了 O(n)，空间复杂度为 O(1)。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="跳台阶" tabindex="-1"><a class="header-anchor" href="#跳台阶" aria-hidden="true">#</a> 跳台阶</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">一只青蛙一次可以跳上 1 级台阶，也可以跳上 2 级。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">跳台阶的问题是一个动态规划的问题，由于一次只能够跳 1 级或者 2 级，因此跳上 n 级台阶一共有两种方案，一种是从 n-1 跳上，一</span></span>
<span class="line"><span style="color: #abb2bf">种是从 n-2 级跳上，因此 f(n) = f(n-1) + f(n-2)。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">和斐波那契数列类似，不过初始两项的值变为了 1 和 2，后面每项的值等于前面两项的和。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变态跳台阶" tabindex="-1"><a class="header-anchor" href="#变态跳台阶" aria-hidden="true">#</a> 变态跳台阶</h3>
<p>题目：</p>
<p>一只青蛙一次可以跳上 1 级台阶，也可以跳上 2 级……它也可以跳上 n 级。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。</p>
<p>思路：</p>
<p>变态跳台阶的问题同上一个问题的思考方案是一样的，我们可以得到一个结论是，每一项的值都等于前面所有项的值的和。</p>
<p>f(1) = 1
f(2) = f(2-1) + f(2-2) //f(2-2) 表示 2 阶一次跳 2 阶的次数。
f(3) = f(3-1) + f(3-2) + f(3-3)
...
f(n) = f(n-1) + f(n-2) + f(n-3) + ... + f(n-(n-1)) + f(n-n)</p>
<p>再次总结可得</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">        | 1 ,(n=0 )</span></span>
<span class="line"><span style="color: #abb2bf">f(n) =  | 1 ,(n=1 )</span></span>
<span class="line"><span style="color: #abb2bf">        | 2\*f(n-1),(n&gt;=2)</span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="矩形覆盖" tabindex="-1"><a class="header-anchor" href="#矩形覆盖" aria-hidden="true">#</a> 矩形覆盖</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">我们可以用 2*1 的小矩形横着或者竖着去覆盖更大的矩形。请问用 n 个 2*1 的小矩形无重叠地覆盖一个 2\*n 的大矩形，总共</span></span>
<span class="line"><span style="color: #abb2bf">有多少种方法？</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">依旧是斐波那契数列的应用</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二进制中-1-的个数" tabindex="-1"><a class="header-anchor" href="#二进制中-1-的个数" aria-hidden="true">#</a> 二进制中 1 的个数</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">输入一个整数，输出该数二进制表示中 1 的个数。其中负数用补码表示。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">一个不为 0 的整数的二进制表示，一定会有一位为 1。我们找到最右边的一位 1，当我们将整数减去 1 时，最右边的一位 1 变为 0，它后</span></span>
<span class="line"><span style="color: #abb2bf">面的所有位都取反，因此将减一后的值与原值相与，我们就会能够消除最右边的一位 1。因此判断一个二进制中 1 的个数，我们可以判</span></span>
<span class="line"><span style="color: #abb2bf">断这个数可以经历多少次这样的过程。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">如：1100&amp;1011=1000</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数值的整数次方" tabindex="-1"><a class="header-anchor" href="#数值的整数次方" aria-hidden="true">#</a> 数值的整数次方</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">给定一个 double 类型的浮点数 base 和 int 类型的整数 exponent。求 base 的 exponent 次方。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">首先我们需要判断 exponent 正负和零取值三种情况，根据不同的情况通过递归来实现。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="调整数组顺序使奇数位于偶数前面" tabindex="-1"><a class="header-anchor" href="#调整数组顺序使奇数位于偶数前面" aria-hidden="true">#</a> 调整数组顺序使奇数位于偶数前面</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于位于数组的后半</span></span>
<span class="line"><span style="color: #abb2bf">部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">由于需要考虑到调整之后的稳定性，因此我们可以使用辅助数组的方式。首先对数组中的元素进行遍历，每遇到一个奇数就将它加入到</span></span>
<span class="line"><span style="color: #abb2bf">奇数辅助数组中，每遇到一个偶数，就将它将入到偶数辅助数组中。最后再将两个数组合并。这一种方法的时间复杂度为 O(n)，空间</span></span>
<span class="line"><span style="color: #abb2bf">复杂度为 O(n)。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="链表中倒数第-k-个节点" tabindex="-1"><a class="header-anchor" href="#链表中倒数第-k-个节点" aria-hidden="true">#</a> 链表中倒数第 k 个节点</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">输入一个链表，输出该链表中倒数第 k 个结点。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">使用两个指针，先让第一个和第二个指针都指向头结点，然后再让第二个指针走 k-1 步，到达第 k 个节点。然后两个指针同时向后</span></span>
<span class="line"><span style="color: #abb2bf">移动，当第二个指针到达末尾时，第一个指针指向的就是倒数第 k 个节点了。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="反转链表" tabindex="-1"><a class="header-anchor" href="#反转链表" aria-hidden="true">#</a> 反转链表</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">输入一个链表，反转链表后，输出链表的所有元素。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">通过设置三个变量 pre、current 和 next，分别用来保存前继节点、当前节点和后继结点。从第一个节点开始向后遍历，首先将当</span></span>
<span class="line"><span style="color: #abb2bf">前节点的后继节点保存到 next 中，然后将当前节点的后继节点设置为 pre，然后再将 pre 设置为当前节点，current 设置为 ne</span></span>
<span class="line"><span style="color: #abb2bf">xt 节点，实现下一次循环。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="合并两个排序的链表" tabindex="-1"><a class="header-anchor" href="#合并两个排序的链表" aria-hidden="true">#</a> 合并两个排序的链表</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">通过递归的方式，依次将两个链表的元素递归进行对比。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="树的子结构" tabindex="-1"><a class="header-anchor" href="#树的子结构" aria-hidden="true">#</a> 树的子结构</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">输入两棵二叉树 A、B，判断 B 是不是 A 的子结构。（ps：我们约定空树不是任意一个树的子结构）</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">通过递归的思想来解决</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">第一步首先从树 A 的根节点开始遍历，在左右子树中找到和树 B 根结点的值一样的结点 R 。</span></span>
<span class="line"><span style="color: #abb2bf">第二步两棵树同时从 R 节点和根节点以相同的遍历方式进行遍历，依次比较对应的值是否相同，当树 B 遍历结束时，结束比较。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二叉树的镜像" tabindex="-1"><a class="header-anchor" href="#二叉树的镜像" aria-hidden="true">#</a> 二叉树的镜像</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">操作给定的二叉树，将其变换为源二叉树的镜像。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">从根节点开始遍历，首先通过临时变量保存左子树的引用，然后将根节点的左右子树的引用交换。然后再递归左右节点的子树交换。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="顺时针打印矩阵" tabindex="-1"><a class="header-anchor" href="#顺时针打印矩阵" aria-hidden="true">#</a> 顺时针打印矩阵</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，</span></span>
<span class="line"><span style="color: #abb2bf">例如，如果输入如下矩阵： 1 2 3 4</span></span>
<span class="line"><span style="color: #abb2bf">5 6 7 8</span></span>
<span class="line"><span style="color: #abb2bf">9 10 11 12</span></span>
<span class="line"><span style="color: #abb2bf">13 14 15 16</span></span>
<span class="line"><span style="color: #abb2bf">则依次打印出数字 1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（1）根据左上角和右下角可以定位出一次要旋转打印的数据。一次旋转打印结束后，往对角分别前进和后退一个单位，可以确定下一</span></span>
<span class="line"><span style="color: #abb2bf">次需要打印的数据范围。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（2）使用模拟魔方逆时针解法，每打印一行，则将矩阵逆时针旋转 90 度，打印下一行，依次重复。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定义一个栈-实现-min-函数" tabindex="-1"><a class="header-anchor" href="#定义一个栈-实现-min-函数" aria-hidden="true">#</a> 定义一个栈，实现 min 函数</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">定义栈的数据结构，请在该类型中实现一个能够得到栈最小元素的 min 函数。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">使用一个辅助栈，每次将数据压入数据栈时，就把当前栈里面最小的值压入辅助栈当中。这样辅助栈的栈顶数据一直是数据栈中最小</span></span>
<span class="line"><span style="color: #abb2bf">的值。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="栈的压入弹出" tabindex="-1"><a class="header-anchor" href="#栈的压入弹出" aria-hidden="true">#</a> 栈的压入弹出</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如</span></span>
<span class="line"><span style="color: #abb2bf">序列 1,2,3,4,5 是某栈的压入顺序，序列 4,5,3,2,1 是该压栈序列对应的一个弹出序列，但 4,3,5,1,2 就不可能是该压栈序</span></span>
<span class="line"><span style="color: #abb2bf">列的弹出序列。（注意：这两个序列的长度是相等的）</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">我们可以使用一个辅助栈的方式来实现，首先遍历压栈顺序，依次将元素压入辅助栈中，每次压入元素后我们首先判断该元素是否与出</span></span>
<span class="line"><span style="color: #abb2bf">栈顺序中的此刻位置的元素相等，如果不相等，则将元素继续压栈，如果相等，则将辅助栈中的栈顶元素出栈，出栈后，将出栈顺序中</span></span>
<span class="line"><span style="color: #abb2bf">的位置后移一位继续比较。当压栈顺序遍历完成后，如果辅助栈不为空，则说明该出栈顺序不正确。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="从上往下打印二叉树" tabindex="-1"><a class="header-anchor" href="#从上往下打印二叉树" aria-hidden="true">#</a> 从上往下打印二叉树</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">从上往下打印出二叉树的每个节点，同层节点从左至右打印。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">本质上是二叉树的层序遍历，可以通过队列来实现。首先将根节点入队。然后对队列进行出队操作，每次出队时，将出队元素的左右子</span></span>
<span class="line"><span style="color: #abb2bf">节点依次加入到队列中，直到队列长度变为 0 时，结束遍历。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二叉搜索树的后序遍历" tabindex="-1"><a class="header-anchor" href="#二叉搜索树的后序遍历" aria-hidden="true">#</a> 二叉搜索树的后序遍历</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出 Yes，否则输出 No。假设输入的数组的任意两</span></span>
<span class="line"><span style="color: #abb2bf">个数字都互不相同。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">对于一个合法而二叉树的后序遍历来说，最末尾的元素为根元素。该元素前面的元素可以划分为两个部分，一部分为该元素的左子树，</span></span>
<span class="line"><span style="color: #abb2bf">所有元素的值比根元素小，一部分为该元素的右子树，所有的元素的值比该根元素大。并且每一部分都是一个合法的后序序列，因此我</span></span>
<span class="line"><span style="color: #abb2bf">们可以利用这些特点来递归判断。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二叉树中和为某一值路径" tabindex="-1"><a class="header-anchor" href="#二叉树中和为某一值路径" aria-hidden="true">#</a> 二叉树中和为某一值路径</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">输入一颗二叉树和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。路径定义为从树的根结点开始往下一直到叶结点所经</span></span>
<span class="line"><span style="color: #abb2bf">过的结点形成一条路径。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">通过对树进行深度优先遍历，遍历时保存当前节点的值并判断是否和期望值相等，如果遍历到叶节点不符合要求则回退处理。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="复杂链表的复制" tabindex="-1"><a class="header-anchor" href="#复杂链表的复制" aria-hidden="true">#</a> 复杂链表的复制</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），返回结果为</span></span>
<span class="line"><span style="color: #abb2bf">复制后复杂链表的 head。（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（1）第一种方式，首先对原有链表每个节点进行复制，通过 next 连接起来。然后当链表复制完成之后，再来设置每个节点的 ra</span></span>
<span class="line"><span style="color: #abb2bf">ndom 指针，这个时候每个节点的 random 的设置都需要从头结点开始遍历，因此时间的复杂度为 O(n^2)。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（2）第二种方式，首先对原有链表每个节点进行复制，并且使用 Map 以键值对的方式将原有节点和复制节点保存下来。当链表复</span></span>
<span class="line"><span style="color: #abb2bf">制完成之后，再来设置每个节点的 random 指针，这个时候我们通过 Map 中的键值关系就可以获取到对应的复制节点，因此</span></span>
<span class="line"><span style="color: #abb2bf">不必再从头结点遍历，将时间的复杂度降低为了 O(n)，但是空间复杂度变为了 O(n)。这是一种以空间换时间的做法。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（3）第三种方式，首先对原有链表的每个节点进行复制，并将复制后的节点加入到原有节点的后面。当链表复制完成之后，再进行</span></span>
<span class="line"><span style="color: #abb2bf">random 指针的设置，由于每个节点后面都跟着自己的复制节点，因此我们可以很容易的获取到 random 指向对应的复制节点</span></span>
<span class="line"><span style="color: #abb2bf">。最后再将链表分离，通过这种方法我们也能够将时间复杂度降低为 O(n)。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二叉搜索树与双向链表" tabindex="-1"><a class="header-anchor" href="#二叉搜索树与双向链表" aria-hidden="true">#</a> 二叉搜索树与双向链表</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">需要生成一个排序的双向列表，那么我们应该通过中序遍历的方式来调整树结构，因为只有中序遍历，返回才是一个从小到大的排序</span></span>
<span class="line"><span style="color: #abb2bf">序列。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">基本的思路是我们首先从根节点开始遍历，先将左子树调整为一个双向链表，并将左子树双向链表的末尾元素的指针指向根节点，并</span></span>
<span class="line"><span style="color: #abb2bf">将根节点的左节点指向末尾节点。再将右子树调整为一个双向链表，并将右子树双向链表的首部元素的指针指向根元素，再将根节点</span></span>
<span class="line"><span style="color: #abb2bf">的右节点指向首部节点。通过对左右子树递归调整，因此来实现排序的双向链表的构建。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串的排列" tabindex="-1"><a class="header-anchor" href="#字符串的排列" aria-hidden="true">#</a> 字符串的排列</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">输入一个字符串，按字典序打印出该字符串中字符的所有排列。例如输入字符串 abc，则打印出由字符 a,b,c 所能排列出来的所有</span></span>
<span class="line"><span style="color: #abb2bf">字符串 abc,acb,bac,bca,cab 和 cba。输入描述：输入一个字符串，长度不超过 9（可能有字符重复），字符只包括大小写字母。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">我们可以把一个字符串看做是两个部分，第一部分为它的第一个字符，第二部分是它后面的所有字符。求整个字符串的一个全排列，可</span></span>
<span class="line"><span style="color: #abb2bf">以看做两步，第一步是求所有可能出现在第一个位置的字符，即把第一个字符和后面的所有字符交换。第二步就是求后面所有字符的一</span></span>
<span class="line"><span style="color: #abb2bf">个全排列。因此通过这种方式，我们可以以递归的思路来求出当前字符串的全排列。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详细资料可以参考：
<a href="https://wiki.jikexueyuan.com/project/for-offer/question-twenty-eight.html" target="_blank" rel="noopener noreferrer">《字符串的排列》<ExternalLinkIcon/></a></p>
<h3 id="数组中出现次数超过一半的数字" tabindex="-1"><a class="header-anchor" href="#数组中出现次数超过一半的数字" aria-hidden="true">#</a> 数组中出现次数超过一半的数字</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">数组中有一个数字出现的次数超过数组长度的一半。请找出这个数字。例如输入一个长度为 9 的数组{1,2,3,2,2,2,5,4,2}。由于数</span></span>
<span class="line"><span style="color: #abb2bf">字 2 在数组中出现了 5 次，超过数组长度的一半，因此输出 2。如果不存在则输出 0。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（1）对数组进行排序，排序后的中位数就是所求数字。这种方法的时间复杂度取决于我们采用的排序方法的时间复杂度，因此最快为</span></span>
<span class="line"><span style="color: #abb2bf">O(nlogn)。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（2）由于所求数字的数量超过了数组长度的一半，因此排序后的中位数就是所求数字。因此我们可以将问题简化为求一个数组的中</span></span>
<span class="line"><span style="color: #abb2bf">位数问题。其实数组并不需要全排序，只需要部分排序。我们通过利用快排中的 partition 函数来实现，我们现在数组中随</span></span>
<span class="line"><span style="color: #abb2bf">机选取一个数字，而后通过 partition 函数返回该数字在数组中的索引 index，如果 index 刚好等于 n/2，则这个数字</span></span>
<span class="line"><span style="color: #abb2bf">便是数组的中位数，也即是要求的数，如果 index 大于 n/2，则中位数肯定在 index 的左边，在左边继续寻找即可，反之</span></span>
<span class="line"><span style="color: #abb2bf">在右边寻找。这样可以只在 index 的一边寻找，而不用两边都排序，减少了一半排序时间，这种方法的时间复杂度为 O(n)。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（3）由于该数字的出现次数比所有其他数字出现次数的和还要多，因此可以考虑在遍历数组时保存两个值：一个是数组中的一个数</span></span>
<span class="line"><span style="color: #abb2bf">字，一个是次数。当遍历到下一个数字时，如果下一个数字与之前保存的数字相同，则次数加 1，如果不同，则次数减 1，如果</span></span>
<span class="line"><span style="color: #abb2bf">次数为 0，则需要保存下一个数字，并把次数设定为 1。由于我们要找的数字出现的次数比其他所有数字的出现次数之和还要大，</span></span>
<span class="line"><span style="color: #abb2bf">则要找的数字肯定是最后一次把次数设为 1 时对应的数字。该方法的时间复杂度为 O(n)，空间复杂度为 O(1)。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详细资料可以参考：
<a href="https://blog.csdn.net/ns_code/article/details/26957383" target="_blank" rel="noopener noreferrer">《出现次数超过一半的数字》<ExternalLinkIcon/></a></p>
<h3 id="最小的-k-个数" tabindex="-1"><a class="header-anchor" href="#最小的-k-个数" aria-hidden="true">#</a> 最小的 K 个数</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">输入 n 个整数，找出其中最小的 K 个数。例如输入 4,5,1,6,2,7,3,8 这 8 个数字，则最小的 4 个数字是 1,2,3,4 。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（1）第一种思路是首先将数组排序，排序后再取最小的 k 个数。这一种方法的时间复杂度取决于我们选择的排序算法的时间复杂</span></span>
<span class="line"><span style="color: #abb2bf">度，最好的情况下为 O(nlogn)。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（2）第二种思路是由于我们只需要获得最小的 k 个数，这 k 个数不一定是按序排序的。因此我们可以使用快速排序中的 part</span></span>
<span class="line"><span style="color: #abb2bf">ition 函数来实现。每一次选择一个枢纽值，将数组分为比枢纽值大和比枢纽值小的两个部分，判断枢纽值的位置，如果该枢</span></span>
<span class="line"><span style="color: #abb2bf">纽值的位置为 k-1 的话，那么枢纽值和它前面的所有数字就是最小的 k 个数。如果枢纽值的位置小于 k-1 的话，假设枢</span></span>
<span class="line"><span style="color: #abb2bf">纽值的位置为 n-1，那么我们已经找到了前 n 小的数字了，我们就还需要到后半部分去寻找后半部分 k-n 小的值，进行划</span></span>
<span class="line"><span style="color: #abb2bf">分。当该枢纽值的位置比 k-1 大时，说明最小的 k 个值还在左半部分，我们需要继续对左半部分进行划分。这一种方法的平</span></span>
<span class="line"><span style="color: #abb2bf">均时间复杂度为 O(n)。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（3）第三种方法是维护一个容量为 k 的最大堆。对数组进行遍历时，如果堆的容量还没有达到 k ，则直接将元素加入到堆中，这</span></span>
<span class="line"><span style="color: #abb2bf">就相当于我们假设前 k 个数就是最小的 k 个数。对 k 以后的元素遍历时，我们将该元素与堆的最大值进行比较，如果比最</span></span>
<span class="line"><span style="color: #abb2bf">大值小，那么我们则将最大值与其交换，然后调整堆。如果大于等于堆的最大值，则继续向后遍历，直到数组遍历完成。这一</span></span>
<span class="line"><span style="color: #abb2bf">种方法的平均时间复杂度为 O(nlogk)。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详细资料可以参考：
<a href="https://www.kancloud.cn/kancloud/the-art-of-programming/41579" target="_blank" rel="noopener noreferrer">《寻找最小的 k 个数》<ExternalLinkIcon/></a></p>
<h3 id="连续子数组的最大和" tabindex="-1"><a class="header-anchor" href="#连续子数组的最大和" aria-hidden="true">#</a> 连续子数组的最大和</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">HZ 偶尔会拿些专业问题来忽悠那些非计算机专业的同学。今天测试组开完会后，他又发话了:在古老的一维模式识别中，常常需要计</span></span>
<span class="line"><span style="color: #abb2bf">算连续子向量的最大和,当向量全为正数的时候，问题很好解决。但是，如果向量中包含负数，是否应该包含某个负数，并期望旁边的</span></span>
<span class="line"><span style="color: #abb2bf">正数会弥补它呢？例如：{6,-3,-2,7,-15,1,2,2}，连续子向量的最大和为 8（从第 0 个开始，到第 3 个为止）。你会不会被他忽悠</span></span>
<span class="line"><span style="color: #abb2bf">住？（子向量的长度至少是 1）</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（1）第一种思路是直接暴力求解的方式，先以第一个数字为首往后开始叠加，叠加的过程中保存最大的值。然后再以第二个数字为首</span></span>
<span class="line"><span style="color: #abb2bf">往后开始叠加，并与先前保存的最大的值进行比较。这一种方法的时间复杂度为 O(n^2)。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（2）第二种思路是，首先我们观察一个最大和的连续数组的规律，我们可以发现，子数组一定是以正数开头的，中间包含了正负数。</span></span>
<span class="line"><span style="color: #abb2bf">因此我们可以从第一个数开始向后叠加，每次保存最大的值。叠加的值如果为负数，则将叠加值初始化为 0，因为后面的数加上负</span></span>
<span class="line"><span style="color: #abb2bf">数只会更小，因此需要寻找下一个正数开始下一个子数组的判断。一直往后判断，直到这个数组遍历完成为止，得到最大的值。</span></span>
<span class="line"><span style="color: #abb2bf">使用这一种方法的时间复杂度为 O(n)。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详细资料可以参考：
<a href="http://wiki.jikexueyuan.com/project/for-offer/question-thirty-one.html" target="_blank" rel="noopener noreferrer">《连续子数组的最大和》<ExternalLinkIcon/></a></p>
<h3 id="整数中-1-出现的次数-待深入理解" tabindex="-1"><a class="header-anchor" href="#整数中-1-出现的次数-待深入理解" aria-hidden="true">#</a> 整数中 1 出现的次数（待深入理解）</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">求出 1~13 的整数中 1 出现的次数，并算出 100~1300 的整数中 1 出现的次数？为此他特别数了一下 1~13 中包含 1 的数字有 1、10、11、</span></span>
<span class="line"><span style="color: #abb2bf">12、13 因此共出现 6 次，但是对于后面问题他就没辙了。ACMer 希望你们帮帮他，并把问题更加普遍化，可以很快的求出任意非负整</span></span>
<span class="line"><span style="color: #abb2bf">数区间中 1 出现的次数。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（1）第一种思路是直接遍历每个数，然后将判断每个数中 1 的个数，一直叠加。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（2）第二种思路是求出 1 出现在每位上的次数，然后进行叠加。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详细资料可以参考：
<a href="https://blog.csdn.net/yi_Afly/article/details/52012593" target="_blank" rel="noopener noreferrer">《从 1 到 n 整数中 1 出现的次数：O(logn)算法》<ExternalLinkIcon/></a></p>
<h3 id="把数组排成最小的数" tabindex="-1"><a class="header-anchor" href="#把数组排成最小的数" aria-hidden="true">#</a> 把数组排成最小的数</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。例如输入数组{3，32，321</span></span>
<span class="line"><span style="color: #abb2bf">}，则打印出这三个数字能排成的最小数字为 321323。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（1）求出数组的全排列，然后对每个排列结果进行比较。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（2）利用排序算法实现，但是比较时，比较的并不是两个元素的大小，而是两个元素正序拼接和逆序拼接的大小，如果逆序拼接的</span></span>
<span class="line"><span style="color: #abb2bf">结果更小，则交换两个元素的位置。排序结束后，数组的顺序则为最小数的排列组合顺序。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详细资料可以参考：
<a href="http://wiki.jikexueyuan.com/project/for-offer/question-thirty-three.html" target="_blank" rel="noopener noreferrer">《把数组排成最小的数》<ExternalLinkIcon/></a></p>
<h3 id="丑数-待深入理解" tabindex="-1"><a class="header-anchor" href="#丑数-待深入理解" aria-hidden="true">#</a> 丑数（待深入理解）</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">把只包含质因子 2、3 和 5 的数称作丑数。例如 6、8 都是丑数，但 14 不是，因为它包含因子 7。 习惯上我们把 1 当做是第一个丑数。求</span></span>
<span class="line"><span style="color: #abb2bf">按从小到大的顺序的第 N 个丑数。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（1）判断一个数是否为丑数，可以判断该数不断除以 2，最后余数是否为 1。判断该数不断除以 3，最后余数是否为 1。判断不断除以</span></span>
<span class="line"><span style="color: #abb2bf">5，最后余数是否为 1。在不考虑时间复杂度的情况下，可以依次遍历找到第 N 个丑数。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（2）使用一个数组来保存已排序好的丑数，后面的丑数由前面生成。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第一个只出现一次的字符" tabindex="-1"><a class="header-anchor" href="#第一个只出现一次的字符" aria-hidden="true">#</a> 第一个只出现一次的字符</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">在一个字符串（1&lt;=字符串长度&lt;=10000，全部由大写字母组成）中找到第一个只出现一次的字符，并返回它的位置。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（1）第一种思路是，从前往后遍历每一个字符。每遍历一个字符，则将字符与后边的所有字符依次比较，判断是否含有相同字符。这</span></span>
<span class="line"><span style="color: #abb2bf">一种方法的时间复杂度为 O(n^2)。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（2）第二种思路是，首先对字符串进行一次遍历，将字符和字符出现的次数以键值对的形式存储在 Map 结构中。然后第二次遍历时</span></span>
<span class="line"><span style="color: #abb2bf">，去 Map 中获取对应字符出现的次数，找到第一个只出现一次的字符。这一种方法的时间复杂度为 O(n)。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组中的逆序对" tabindex="-1"><a class="header-anchor" href="#数组中的逆序对" aria-hidden="true">#</a> 数组中的逆序对</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对</span></span>
<span class="line"><span style="color: #abb2bf">的总数 P。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（1）第一种思路是直接求解的方式，顺序扫描整个数组。每扫描到一个数字的时候，逐个比较该数字和它后面的数字的大小。如果</span></span>
<span class="line"><span style="color: #abb2bf">后面的数字比它小，则这两个数字就组成了一个逆序对。假设数组中含有 n 个数字。由于每个数字都要和 O(n）个数字作比</span></span>
<span class="line"><span style="color: #abb2bf">较，因此这个算法的时间复杂度是 O(n^2)。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（2）第二种方式是使用归并排序的方式，通过利用归并排序分解后进行合并排序时，来进行逆序对的统计，这一种方法的时间复杂</span></span>
<span class="line"><span style="color: #abb2bf">度为 O(nlogn)。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详细资料可以参考：
<a href="http://wiki.jikexueyuan.com/project/for-offer/question-thirty-six.html" target="_blank" rel="noopener noreferrer">《数组中的逆序对》<ExternalLinkIcon/></a></p>
<h3 id="两个链表的第一个公共结点" tabindex="-1"><a class="header-anchor" href="#两个链表的第一个公共结点" aria-hidden="true">#</a> 两个链表的第一个公共结点</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">输入两个链表，找出它们的第一个公共结点。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（1）第一种方法是在第一个链表上顺序遍历每个结点，每遍历到一个结点的时候，在第二个链表上顺序遍历每个结点。如果在第二</span></span>
<span class="line"><span style="color: #abb2bf">个链表上有一个结点和第一个链表上的结点一样，说明两个链表在这个结点上重合，于是就找到了它们的公共结点。如果第一</span></span>
<span class="line"><span style="color: #abb2bf">个链表的长度为 m，第二个链表的长度为 n。这一种方法的时间复杂度是 O(mn）。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（2）第二种方式是利用栈的方式，通过观察我们可以发现两个链表的公共节点，都位于链表的尾部，以此我们可以分别使用两个栈</span></span>
<span class="line"><span style="color: #abb2bf">，依次将链表元素入栈。然后在两个栈同时将元素出栈，比较出栈的节点，最后一个相同的节点就是我们要找的公共节点。这</span></span>
<span class="line"><span style="color: #abb2bf">一种方法的时间复杂度为 O(m+n)，空间复杂度为 O(m+n)。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（3）第三种方式是，首先分别遍历两个链表，得到两个链表的长度。然后得到较长的链表与较短的链表长度的差值。我们使用两个</span></span>
<span class="line"><span style="color: #abb2bf">指针来分别对两个链表进行遍历，首先将较长链表的指针移动 n 步，n 为两个链表长度的差值，然后两个指针再同时移动，</span></span>
<span class="line"><span style="color: #abb2bf">判断所指向节点是否为同一节点。这一种方法的时间复杂度为 O(m+n)，相同对于上一种方法不需要额外的空间。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详细资料可以参考：
<a href="http://wiki.jikexueyuan.com/project/for-offer/question-thirty-seven.html" target="_blank" rel="noopener noreferrer">《两个链表的第一个公共结点》<ExternalLinkIcon/></a></p>
<h3 id="数字在排序数组中出现的次数" tabindex="-1"><a class="header-anchor" href="#数字在排序数组中出现的次数" aria-hidden="true">#</a> 数字在排序数组中出现的次数</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">统计一个数字：在排序数组中出现的次数。例如输入排序数组｛ 1, 2, 3, 3, 3, 3, 4, 5｝和数字 3 ，由于 3 在这个数组中出</span></span>
<span class="line"><span style="color: #abb2bf">现了 4 次，因此输出 4 。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（1）第一种方法是直接对数组顺序遍历的方式，通过这种方法来统计数字的出现次数。这种方法的时间复杂度为 O(n)。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（2）第二种方法是使用二分查找的方法，由于数组是排序好的数组，因此相同数字是排列在一起的。统计数字出现的次数，我们需要</span></span>
<span class="line"><span style="color: #abb2bf">去找到该段数字开始和结束的位置，以此来确定数字出现的次数。因此我们可以使用二分查找的方式来确定该数字的开始和结束</span></span>
<span class="line"><span style="color: #abb2bf">位置。如果我们第一次我们数组的中间值为 k ，如果 k 值比所求值大的话，那么我们下一次只需要判断前面一部分就行了，如</span></span>
<span class="line"><span style="color: #abb2bf">果 k 值比所求值小的话，那么我们下一次就只需要判断后面一部分就行了。如果 k 值等于所求值的时候，我们则需要判断该值</span></span>
<span class="line"><span style="color: #abb2bf">是否为开始位置或者结束位置。如果是开始位置，那么我们下一次需要到后半部分去寻找结束位置。如果是结束位置，那么我们</span></span>
<span class="line"><span style="color: #abb2bf">下一次需要到前半部分去寻找开始位置。如果既不是开始位置也不是结束位置，那么我们就分别到前后两个部分去寻找开始和结</span></span>
<span class="line"><span style="color: #abb2bf">束位置。这一种方法的平均时间复杂度为 O(logn)。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二叉树的深度" tabindex="-1"><a class="header-anchor" href="#二叉树的深度" aria-hidden="true">#</a> 二叉树的深度</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">输入一棵二叉树，求该树的深度。从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深</span></span>
<span class="line"><span style="color: #abb2bf">度。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">根节点的深度等于左右深度较大值加一，因此可以通过递归遍历来实现。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="平衡二叉树" tabindex="-1"><a class="header-anchor" href="#平衡二叉树" aria-hidden="true">#</a> 平衡二叉树</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">输入一棵二叉树，判断该二叉树是否是平衡二叉树。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（1）在遍历树的每个结点的时候，调用函数得到它的左右子树的深度。如果每个结点的左右子树的深度相差都不超过 1 ，那么它</span></span>
<span class="line"><span style="color: #abb2bf">就是一棵平衡的二叉树。使用这种方法时，节点会被多次遍历，因此会造成效率不高的问题。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（2）在求一个节点的深度时，同时判断它是否平衡。如果不平衡则直接返回 -1，否则返回树高度。如果一个节点的一个子树的深</span></span>
<span class="line"><span style="color: #abb2bf">度为-1，那么就直接向上返回 -1 ，该树已经是不平衡的了。通过这种方式确保了节点只能够被访问一遍。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组中只出现一次的数字" tabindex="-1"><a class="header-anchor" href="#数组中只出现一次的数字" aria-hidden="true">#</a> 数组中只出现一次的数字</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">一个整型数组里除了两个数字之外，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（1）第一种方式是依次遍历数组，记录下数字出现的次数，从而找出两个只出现一次的数字。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（2）第二种方式，根据位运算的异或的性质，我们可以知道两个相同的数字异或等于 0，一个数和 0 异或还是它本身。由于数组中</span></span>
<span class="line"><span style="color: #abb2bf">的其他数字都是成对出现的，因此我们可以将数组中的所有数依次进行异或运算。如果只有一个数出现一次的话，那么最后剩下</span></span>
<span class="line"><span style="color: #abb2bf">的就是落单的数字。如果是两个数只出现了一次的话，那么最后剩下的就是这两个数异或的结果。这个结果中的 1 表示的是 A 和</span></span>
<span class="line"><span style="color: #abb2bf">B 不同的位。我们取异或结果的第一个 1 所在的位数，假如是第 3 位，接着通过比较第三位来将数组分为两组，相同数字一定会</span></span>
<span class="line"><span style="color: #abb2bf">被分到同一组。分组完成后再按照依次异或的思路，求得剩余数字即为两个只出现一次的数字。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="和为-s-的连续正数序列" tabindex="-1"><a class="header-anchor" href="#和为-s-的连续正数序列" aria-hidden="true">#</a> 和为 S 的连续正数序列</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">小明很喜欢数学，有一天他在做数学作业时，要求计算出 9~16 的和，他马上就写出了正确答案是 100。但是他并不满足于此，他在想究</span></span>
<span class="line"><span style="color: #abb2bf">竟有多少种连续的正数序列的和为 100（至少包括两个数）。没多久，他就得到另一组连续正数和为 100 的序列：18,19,20,21,22。</span></span>
<span class="line"><span style="color: #abb2bf">现在把问题交给你，你能不能也很快的找出所有和为 S 的连续正数序列？Good Luck!输出描述：输出所有和为 S 的连续正数序列。序</span></span>
<span class="line"><span style="color: #abb2bf">列内按照从小至大的顺序，序列间按照开始数字从小到大的顺序。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">维护一个正数序列数组，数组中初始只含有值 1 和 2，然后从 3 依次往后遍历，每遍历到一个元素则将这个元素加入到序列数组中，然后</span></span>
<span class="line"><span style="color: #abb2bf">判断此时序列数组的和。如果序列数组的和大于所求值，则将第一个元素（最小的元素弹出）。如果序列数组的和小于所求值，则继续</span></span>
<span class="line"><span style="color: #abb2bf">往后遍历，将元素加入到序列中继续判断。当序列数组的和等于所求值时，打印出此时的正数序列，然后继续往后遍历，寻找下一个连</span></span>
<span class="line"><span style="color: #abb2bf">续序列，直到数组遍历完成终止。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详细资料可以参考：
<a href="http://wiki.jikexueyuan.com/project/for-offer/question-forty-one.html" target="_blank" rel="noopener noreferrer">《和为 s 的连续正数序列》<ExternalLinkIcon/></a></p>
<h3 id="和为-s-的两个数字" tabindex="-1"><a class="header-anchor" href="#和为-s-的两个数字" aria-hidden="true">#</a> 和为 S 的两个数字</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">输入一个递增排序的数组和一个数字 S，在数组中查找两个数，是的他们的和正好是 S，如果有多对数字的和等于 S，输出两个数</span></span>
<span class="line"><span style="color: #abb2bf">的乘积最小的。输出描述：对应每个测试案例，输出两个数，小的先输出。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">首先我们通过规律可以发现，和相同的两个数字，两个数字的差值越大，乘积越小。因此我们只需要从数组的首尾开始找到第一对和</span></span>
<span class="line"><span style="color: #abb2bf">为 s 的数字对进行了。因此我们可以使用双指针的方式，左指针初始指向数组的第一个元素，右指针初始指向数组的最后一个元素</span></span>
<span class="line"><span style="color: #abb2bf">。然后首先判断两个指针指向的数字的和是否为 s ，如果为 s ，两个指针指向的数字就是我们需要寻找的数字对。如果两数的和</span></span>
<span class="line"><span style="color: #abb2bf">比 s 小，则将左指针向左移动一位后继续判断。如果两数的和比 s 大，则将右指针向右移动一位后继续判断。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详细资料可以参考：
<a href="https://www.cnblogs.com/wuguanglin/p/FindNumbersWithSum.html" target="_blank" rel="noopener noreferrer">《和为 S 的字符串》<ExternalLinkIcon/></a></p>
<h3 id="左旋转字符串" tabindex="-1"><a class="header-anchor" href="#左旋转字符串" aria-hidden="true">#</a> 左旋转字符串</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">汇编语言中有一种移位指令叫做循环左移（ROL），现在有个简单的任务，就是用字符串模拟这个指令的运算结果。对于一个给定的</span></span>
<span class="line"><span style="color: #abb2bf">字符序列 S，请你把其循环左移 K 位后的序列输出。例如，字符序列 S=”abcXYZdef”，要求输出循环左移 3 位后的结果，即 “X</span></span>
<span class="line"><span style="color: #abb2bf">YZdefabc”。是不是很简单？OK，搞定它！</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">字符串裁剪后拼接</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="翻转单词顺序列" tabindex="-1"><a class="header-anchor" href="#翻转单词顺序列" aria-hidden="true">#</a> 翻转单词顺序列</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">牛客最近来了一个新员工 Fish，每天早晨总是会拿着一本英文杂志，写些句子在本子上。同事 Cat 对 Fish 写的内容颇感兴趣，有</span></span>
<span class="line"><span style="color: #abb2bf">一天他向 Fish 借来翻看，但却读不懂它的意思。例如，“student. a am I”。后来才意识到，这家伙原来把句子单词的顺序翻转了</span></span>
<span class="line"><span style="color: #abb2bf">，正确的句子应该是“I am a student.”。Cat 对一一的翻转这些单词顺序可不在行，你能帮助他么？</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">通过空格将单词分隔，然后将数组反序后，重新拼接为字符串。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="扑克牌的顺子" tabindex="-1"><a class="header-anchor" href="#扑克牌的顺子" aria-hidden="true">#</a> 扑克牌的顺子</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">LL 今天心情特别好，因为他去买了一副扑克牌，发现里面居然有 2 个大王，2 个小王（一副牌原本是 54 张^\_^）...他随机从中抽出</span></span>
<span class="line"><span style="color: #abb2bf">了 5 张牌，想测测自己的手气，看看能不能抽到顺子，如果抽到的话，他决定去买体育彩票，嘿嘿！！“红心 A，黑桃 3，小王，大王</span></span>
<span class="line"><span style="color: #abb2bf">，方片 5”，“Oh My God!”不是顺子..... LL 不高兴了，他想了想，决定大\小王可以看成任何数字，并且 A 看作 1，J 为 11，</span></span>
<span class="line"><span style="color: #abb2bf">Q 为 12，K 为 13。上面的 5 张牌就可以变成“1,2,3,4,5”（大小王分别看作 2 和 4），“So Lucky!”。LL 决定去买体育彩票啦。</span></span>
<span class="line"><span style="color: #abb2bf">现在，要求你使用这幅牌模拟上面的过程，然后告诉我们 LL 的运气如何。为了方便起见，你可以认为大小王是 0。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">首先判断 5 个数字是不是连续的，最直观的方法是把数组排序。值得注意的是，由于 0 可以当成任意数字，我们可以用 0 去补满数</span></span>
<span class="line"><span style="color: #abb2bf">组中的空缺。如果排序之后的数组不是连续的，即相邻的两个数字相隔若干个数字，但只要我们有足够的。可以补满这两个数字的空</span></span>
<span class="line"><span style="color: #abb2bf">缺，这个数组实际上还是连续的。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">于是我们需要做 3 件事情：首先把数组排序，再统计数组中 0 的个数，最后统计排序之后的数组中相邻数字之间的空缺总数。如</span></span>
<span class="line"><span style="color: #abb2bf">果空缺的总数小于或者等于 0 的个数，那么这个数组就是连续的：反之则不连续。最后，我们还需要注意一点：如果数组中的非 0</span></span>
<span class="line"><span style="color: #abb2bf">数字重复出现，则该数组不是连续的。换成扑克牌的描述方式就是如果一副牌里含有对子，则不可能是顺子。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详细资料可以参考：
<a href="http://wiki.jikexueyuan.com/project/for-offer/question-forty-four.html" target="_blank" rel="noopener noreferrer">《扑克牌的顺子》<ExternalLinkIcon/></a></p>
<h3 id="圆圈中最后剩下的数字-约瑟夫环问题" tabindex="-1"><a class="header-anchor" href="#圆圈中最后剩下的数字-约瑟夫环问题" aria-hidden="true">#</a> 圆圈中最后剩下的数字（约瑟夫环问题）</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">0, 1, … , n-1 这 n 个数字排成一个圈圈，从数字 0 开始每次从圆圏里删除第 m 个数字。求出这个圈圈里剩下的最后一个数</span></span>
<span class="line"><span style="color: #abb2bf">字。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（1）使用环形链表进行模拟。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（2）根据规律得出（待深入理解）</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详细资料可以参考：
<a href="http://wiki.jikexueyuan.com/project/for-offer/question-forty-five.html" target="_blank" rel="noopener noreferrer">《圆圈中最后剩下的数字》<ExternalLinkIcon/></a></p>
<h3 id="_1-2-3-n" tabindex="-1"><a class="header-anchor" href="#_1-2-3-n" aria-hidden="true">#</a> 1+2+3+...+n</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">求 1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case 等关键字及条件判断语句（A?B:C）。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">由于不能使用循环语句，因此我们可以通过递归来实现。并且由于不能够使用条件判断运算符，我们可以利用 &amp;&amp; 操作符的短路特</span></span>
<span class="line"><span style="color: #abb2bf">性来实现。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="不用加减乘除做加法" tabindex="-1"><a class="header-anchor" href="#不用加减乘除做加法" aria-hidden="true">#</a> 不用加减乘除做加法</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">写一个函数，求两个整数之和，要求在函数体内不得使用 ＋、－、×、÷ 四则运算符号。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">通过位运算，递归来实现。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="把字符串转换成整数。" tabindex="-1"><a class="header-anchor" href="#把字符串转换成整数。" aria-hidden="true">#</a> 把字符串转换成整数。</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">将一个字符串转换成一个整数，要求不能使用字符串转换整数的库函数。数值为 0 或者字符串不是一个合法的数值则返回 0。输入描</span></span>
<span class="line"><span style="color: #abb2bf">述：输入一个字符串，包括数字字母符号，可以为空。输出描述：如果是合法的数值表达则返回该数字，否则返回 0。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">首先需要进行符号判断，其次我们根据字符串的每位通过减 0 运算转换为整数和，依次根据位数叠加。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组中重复的数字" tabindex="-1"><a class="header-anchor" href="#数组中重复的数字" aria-hidden="true">#</a> 数组中重复的数字</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">在一个长度为 n 的数组里的所有数字都在 0 到 n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知</span></span>
<span class="line"><span style="color: #abb2bf">道每个数字重复了几次。请找出数组中任意一个重复的数字。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（1）首先将数组排序，排序后再进行判断。这一种方法的时间复杂度为 O(nlogn)。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（2）使用 Map 结构的方式，依次记录下每一个数字出现的次数，从而可以判断是否出现重复数字。这一种方法的时间复杂度为 O</span></span>
<span class="line"><span style="color: #abb2bf">(n)，空间复杂度为 O(n)。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（3）从数组首部开始遍历，每遍历一个数字，则将该数字和它的下标相比较，如果数字和下标不等，则将该数字和它对应下标的值</span></span>
<span class="line"><span style="color: #abb2bf">交换。如果对应的下标值上已经是正确的值了，那么说明当前元素是一个重复数字。这一种方法相对于上一种方法来说不需要</span></span>
<span class="line"><span style="color: #abb2bf">额外的内存空间。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="构建乘积数组" tabindex="-1"><a class="header-anchor" href="#构建乘积数组" aria-hidden="true">#</a> 构建乘积数组</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">给定一个数组 A[0,1,...,n-1]，请构建一个数组 B[0,1,...,n-1]，其中 B 中的元素 B[i]=A[0]_A[1]_...*A[i-1]*A</span></span>
<span class="line"><span style="color: #abb2bf">[i+1]*...*A[n-1]。不能使用除法。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（1）  C[i]=A[0]×A[1]×...×A[i-1]=C[i-1]×A[i-1]</span></span>
<span class="line"><span style="color: #abb2bf">      D[i]=A[i+1]×...×A[n-1]=D[i+1]×A[i+1]</span></span>
<span class="line"><span style="color: #abb2bf">      B[i]=C[i]×D[i]</span></span>
<span class="line"><span style="color: #abb2bf">       将乘积分为前后两个部分，分别循环求出后，再进行相乘。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（2）上面的方法需要额外的内存空间，我们可以引入中间变量的方式，来降低空间复杂度。（待深入理解）</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详细资料可以参考：
<a href="https://zhuanlan.zhihu.com/p/34804711" target="_blank" rel="noopener noreferrer">《构建乘积数组》<ExternalLinkIcon/></a></p>
<h3 id="正则表达式的匹配" tabindex="-1"><a class="header-anchor" href="#正则表达式的匹配" aria-hidden="true">#</a> 正则表达式的匹配</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">请实现一个函数用来匹配包括&#39;.&#39;和&#39;_&#39;的正则表达式。模式中的字符&#39;.&#39;表示任意一个字符，而&#39;_&#39;表示它前面的字符可以出现任</span></span>
<span class="line"><span style="color: #abb2bf">意次（包含 0 次）。 在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串&quot;aaa&quot;与模式&quot;a.a&quot;和&quot;ab*ac*a&quot;匹配，</span></span>
<span class="line"><span style="color: #abb2bf">但是与&quot;aa.a&quot;和&quot;ab\*a&quot;均不匹配。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（1）状态机思路（待深入理解）</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详细资料可以参考：
<a href="http://wiki.jikexueyuan.com/project/for-offer/question-fifty-three.html" target="_blank" rel="noopener noreferrer">《正则表达式匹配》<ExternalLinkIcon/></a></p>
<h3 id="表示数值的字符串" tabindex="-1"><a class="header-anchor" href="#表示数值的字符串" aria-hidden="true">#</a> 表示数值的字符串</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。例如，字符串&quot;+100&quot;,&quot;5e2&quot;,&quot;-123&quot;,&quot;3.1416&quot;和&quot;-1E-</span></span>
<span class="line"><span style="color: #abb2bf">16&quot;都表示数值。 但是&quot;12e&quot;,&quot;1a3.14&quot;,&quot;1.2.3&quot;,&quot;+-5&quot;和&quot;12e+4.3&quot;都不是。、</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">利用正则表达式实现</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符流中第一个不重复的字符" tabindex="-1"><a class="header-anchor" href="#字符流中第一个不重复的字符" aria-hidden="true">#</a> 字符流中第一个不重复的字符</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">请实现一个函数用来找出字符流中第一个只出现一次的字符。例如，当从字符流中只读出前两个字符 &quot;go&quot; 时，第一个只出现一次</span></span>
<span class="line"><span style="color: #abb2bf">的字符是 &quot;g&quot; 。当从该字符流中读出前六个字符 &quot;google&quot; 时，第一个只出现一次的字符是 &quot;l&quot;。 输出描述：如果当前字符流</span></span>
<span class="line"><span style="color: #abb2bf">没有存在出现一次的字符，返回#字符。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">同第 34 题</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="链表中环的入口结点" tabindex="-1"><a class="header-anchor" href="#链表中环的入口结点" aria-hidden="true">#</a> 链表中环的入口结点</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">一个链表中包含环，如何找出环的入口结点？</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">首先使用快慢指针的方式我们可以判断链表中是否存在环，当快慢指针相遇时，说明链表中存在环。相遇点一定存在于环中，因此我</span></span>
<span class="line"><span style="color: #abb2bf">们可以从使用一个指针从这个点开始向前移动，每移动一个点，环的长度加一，当指针再次回到这个点的时候，指针走了一圈，因此</span></span>
<span class="line"><span style="color: #abb2bf">通过这个方法我们可以得到链表中的环的长度，我们将它记为 n 。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">然后我们设置两个指针，首先分别指向头结点，然后将一个指针先移动 n 步，然后两个指针再同时移动，当两个指针相遇时，相遇</span></span>
<span class="line"><span style="color: #abb2bf">点就是环的入口节点。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详细资料可以参考：
<a href="http://wiki.jikexueyuan.com/project/for-offer/question-fifty-six.html" target="_blank" rel="noopener noreferrer">《链表中环的入口结点》<ExternalLinkIcon/></a>
<a href="https://blog.csdn.net/shansusu/article/details/50285735" target="_blank" rel="noopener noreferrer">《《剑指 offer》——链表中环的入口结点》<ExternalLinkIcon/></a></p>
<h3 id="删除链表中重复的结点" tabindex="-1"><a class="header-anchor" href="#删除链表中重复的结点" aria-hidden="true">#</a> 删除链表中重复的结点</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。例如，链表 1-&gt;2-&gt;3-</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">&gt; 3-&gt;4-&gt;4-&gt;5 处理后为 1-&gt;2-&gt;5</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">解决这个问题的第一步是确定删除的参数。当然这个函数需要输入待删除链表的头结点。头结点可能与后面的结点重复，也就是说头</span></span>
<span class="line"><span style="color: #abb2bf">结点也可能被删除，所以在链表头额外添加一个结点。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">接下来我们从头遍历整个链表。如果当前结点的值与下一个结点的值相同，那么它们就是重复的结点，都可以被删除。为了保证删除</span></span>
<span class="line"><span style="color: #abb2bf">之后的链表仍然是相连的而没有中间断开，我们要把当前的前一个结点和后面值比当前结点的值要大的结点相连。我们要确保 prev</span></span>
<span class="line"><span style="color: #abb2bf">要始终与下一个没有重复的结点连接在一起。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二叉树的下一个结点" tabindex="-1"><a class="header-anchor" href="#二叉树的下一个结点" aria-hidden="true">#</a> 二叉树的下一个结点</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">给定一棵二叉树和其中的一个结点，如何找出中序遍历顺序的下一个结点？树中的结点除了有两个分别指向左右子结点的指针以外，</span></span>
<span class="line"><span style="color: #abb2bf">还有一个指向父节点的指针。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">这个问题我们可以分为三种情况来讨论。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">第一种情况，当前节点含有右子树，这种情况下，中序遍历的下一个节点为该节点右子树的最左子节点。因此我们只要从右子节点</span></span>
<span class="line"><span style="color: #abb2bf">出发，一直沿着左子节点的指针，就能找到下一个节点。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">第二种情况是，当前节点不含有右子树，并且当前节点为父节点的左子节点，这种情况下中序遍历的下一个节点为当前节点的父节</span></span>
<span class="line"><span style="color: #abb2bf">点。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">第三种情况是，当前节点不含有右子树，并且当前节点为父节点的右子节点，这种情况下我们沿着父节点一直向上查找，直到找到</span></span>
<span class="line"><span style="color: #abb2bf">一个节点，该节点为父节点的左子节点。这个左子节点的父节点就是中序遍历的下一个节点。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对称二叉树" tabindex="-1"><a class="header-anchor" href="#对称二叉树" aria-hidden="true">#</a> 对称二叉树</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">请实现一个函数来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">我们对一颗二叉树进行前序遍历的时候，是先访问左子节点，然后再访问右子节点。因此我们可以定义一种对称的前序遍历的方式</span></span>
<span class="line"><span style="color: #abb2bf">，就是先访问右子节点，然后再访问左子节点。通过比较两种遍历方式最后的结果是否相同，以此来判断该二叉树是否为对称二叉</span></span>
<span class="line"><span style="color: #abb2bf">树。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="按之字形顺序打印二叉树-待深入理解" tabindex="-1"><a class="header-anchor" href="#按之字形顺序打印二叉树-待深入理解" aria-hidden="true">#</a> 按之字形顺序打印二叉树（待深入理解）</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，即第一行按照</span></span>
<span class="line"><span style="color: #abb2bf">从左到右的顺序打印，第二层按照从右到左顺序打印，第三行再按照从左到右的顺序打印，其他以此类推。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">按之字形顺序打印二叉树需要两个栈。我们在打印某一行结点时，把下一层的子结点保存到相应的栈里。如果当前打印的是奇数层</span></span>
<span class="line"><span style="color: #abb2bf">，则先保存左子结点再保存右子结点到一个栈里；如果当前打印的是偶数层，则先保存右子结点再保存左子结点到第二个栈里。每</span></span>
<span class="line"><span style="color: #abb2bf">一个栈遍历完成后进入下一层循环。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详细资料可以参考：
<a href="https://www.cnblogs.com/wuguanglin/p/Print.html" target="_blank" rel="noopener noreferrer">《按之字形顺序打印二叉树》<ExternalLinkIcon/></a></p>
<h3 id="从上到下按层打印二叉树-同一层结点从左至右输出。每一层输出一行。" tabindex="-1"><a class="header-anchor" href="#从上到下按层打印二叉树-同一层结点从左至右输出。每一层输出一行。" aria-hidden="true">#</a> 从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">从上到下按层打印二叉树，同一层的结点按从左到右的顺序打印，每一层打印一行。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">用一个队列来保存将要打印的结点。为了把二叉树的每一行单独打印到一行里，我们需要两个变量：一个变量表示在当前的层中还</span></span>
<span class="line"><span style="color: #abb2bf">没有打印的结点数，另一个变量表示下一次结点的数目。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="序列化二叉树-带深入理解" tabindex="-1"><a class="header-anchor" href="#序列化二叉树-带深入理解" aria-hidden="true">#</a> 序列化二叉树（带深入理解）</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">请实现两个函数，分别用来序列化和反序列化二叉树。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">数组模拟</span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二叉搜索树的第-k-个节点" tabindex="-1"><a class="header-anchor" href="#二叉搜索树的第-k-个节点" aria-hidden="true">#</a> 二叉搜索树的第 K 个节点</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">给定一颗二叉搜索树，请找出其中的第 k 小的结点。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">对一颗树首先进行中序遍历，在遍历的同时记录已经遍历的节点数，当遍历到第 k 个节点时，这个节点即为第 k 大的节点。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据流中的中位数-待深入理解" tabindex="-1"><a class="header-anchor" href="#数据流中的中位数-待深入理解" aria-hidden="true">#</a> 数据流中的中位数（待深入理解）</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有值排序之后位于中间的数值。如果数据</span></span>
<span class="line"><span style="color: #abb2bf">流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="滑动窗口中的最大值-待深入理解" tabindex="-1"><a class="header-anchor" href="#滑动窗口中的最大值-待深入理解" aria-hidden="true">#</a> 滑动窗口中的最大值（待深入理解）</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。例如，如果输入数组{2,3,4,2,6,2,5,1}及滑动窗口的</span></span>
<span class="line"><span style="color: #abb2bf">大小 3，那么一共存在 6 个滑动窗口，他们的最大值分别为{4,4,6,6,6,5}； 针对数组{2,3,4,2,6,2,5,1}的滑动窗口有以下</span></span>
<span class="line"><span style="color: #abb2bf">6 个： {[2,3,4],2,6,2,5,1}， {2,[3,4,2],6,2,5,1}， {2,3,[4,2,6],2,5,1}， {2,3,4,[2,6,2],5,1}， {2</span></span>
<span class="line"><span style="color: #abb2bf">,3,4,2,[6,2,5],1}， {2,3,4,2,6,[2,5,1]}。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">使用队列的方式模拟</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="矩阵中的路径-待深入理解" tabindex="-1"><a class="header-anchor" href="#矩阵中的路径-待深入理解" aria-hidden="true">#</a> 矩阵中的路径（待深入理解）</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一个格子开始，每</span></span>
<span class="line"><span style="color: #abb2bf">一步可以在矩阵中向左，向右，向上，向下移动一个格子。如果一条路径经过了矩阵中的某一个格子，则该路径不能再进入该格子</span></span>
<span class="line"><span style="color: #abb2bf">。例如 a b c e s f c s a d e e 矩阵中包含一条字符串&quot;bcced&quot;的路径，但是矩阵中不包含&quot;abcb&quot;路径，因为字符串的</span></span>
<span class="line"><span style="color: #abb2bf">第一个字符 b 占据了矩阵中的第一行第二个格子之后，路径不能再次进入该格子。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="机器人的运动范围-待深入理解" tabindex="-1"><a class="header-anchor" href="#机器人的运动范围-待深入理解" aria-hidden="true">#</a> 机器人的运动范围（待深入理解）</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">地上有一个 m 行和 n 列的方格。一个机器人从坐标 0,0 的格子开始移动，每一次只能向左，右，上，下四个方向移动一格，但是不能</span></span>
<span class="line"><span style="color: #abb2bf">进入行坐标和列坐标的数位之和大于 k 的格子。 例如，当 k 为 18 时，机器人能够进入方格（35,37），因为 3+5+3+7 = 18。但是</span></span>
<span class="line"><span style="color: #abb2bf">，它不能进入方格（35,38），因为 3+5+3+8 = 19。请问该机器人能够达到多少个格子？</span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>剑指 offer 相关资料可以参考：</p>
<ul>
<li><a href="https://blog.csdn.net/zzl819954692/article/details/79648054" target="_blank" rel="noopener noreferrer">《剑指 offer 题目练习及思路分析》<ExternalLinkIcon/></a></li>
<li><a href="https://www.cnblogs.com/wuguanglin/p/code-interview.html" target="_blank" rel="noopener noreferrer">《JS 版剑指 offer》<ExternalLinkIcon/></a></li>
<li><a href="https://wiki.jikexueyuan.com/project/for-offer/" target="_blank" rel="noopener noreferrer">《剑指 Offer 学习心得》<ExternalLinkIcon/></a></li>
</ul>
<h2 id="相关算法题" tabindex="-1"><a class="header-anchor" href="#相关算法题" aria-hidden="true">#</a> 相关算法题</h2>
<h3 id="明星问题" tabindex="-1"><a class="header-anchor" href="#明星问题" aria-hidden="true">#</a> 明星问题</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">有 n 个人，其中一个明星和 n-1 个群众，群众都认识明星，明星不认识任何群众，群众和群众之间的认识关系不知道，现有一个</span></span>
<span class="line"><span style="color: #abb2bf">函数 foo(A, B)，若 A 认识 B 返回 true，若 A 不认识 B 返回 false，试设计一种算法找出明星，并给出时间复杂度。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>思路：</p>
<p>（1）第一种方法我们可以直接使用双层循环遍历的方式，每一个人都和其他人进行判断，如果一个人谁都不认识，那么他就是明星。
这一种方法的时间复杂度为 O(n^2)。</p>
<p>（2）上一种方法没有充分利用题目所给的条件，其实我们每一次比较，都可以排除一个人的可能。比如如果 A 认识 B，那么说明
A 就不会是明星，因此 A 就可以从数组中移除。如果 A 不认识 B，那么说明 B 不可能是明星，因此 B 就可以从数组中移
除。因此每一次判断都能够减少一个可能性，我们只需要从数组从前往后进行遍历，每次移除一个不可能的人，直到数组中只剩
一人为止，那么这个人就是明星。这一种方法的时间复杂度为 O(n)。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf">详细资料可以参考：</span></span>
<span class="line"><span style="color: #abb2bf">[《一个明星和 n-1 个群众》](https://www.nowcoder.com/questionTerminal/fd3caff374c945fb9ea5f107016bcd4f)</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="正负数组求和" tabindex="-1"><a class="header-anchor" href="#正负数组求和" aria-hidden="true">#</a> 正负数组求和</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">题目：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">有两个数组，一个数组里存放的是正整数，另一个数组里存放的是负整数，都是无序的，现在从两个数组里各拿一个，使得它们的和</span></span>
<span class="line"><span style="color: #abb2bf">最接近零。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">思路：</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">（1）首先我们可以对两个数组分别进行排序，正数数组按从小到大排序，负数数组按从大到小排序。排序完成后我们使用两个指针分</span></span>
<span class="line"><span style="color: #abb2bf">    别指向两个数组的首部，判断两个指针的和。如果和大于0，则负数指针往后移动一个位置，如果和小于0，则正数指针往后移动</span></span>
<span class="line"><span style="color: #abb2bf">    一个位置，每一次记录和的值，和当前保存下来的最小值进行比较。</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #282c34"><code><span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
