# hexo-mathjax3-linebreak

Currently MathJax3 does not support `\\` line break feature [issue](https://github.com/mathjax/MathJax/issues/2312), so I write this   plugin to wrap all display math environments with `\displaylines{}` to make multiline works.

Only applied on `html` so your `md` files can stay the same and you can simply uninstall this plugin when MathJax3 solves this problem.