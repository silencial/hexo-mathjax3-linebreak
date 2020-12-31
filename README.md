# hexo-mathjax3-linebreak

Currently MathJax3 does not support `\\` line break feature [issue](https://github.com/mathjax/MathJax/issues/2312), so I write this plugin to wrap **some** display math environments with `\displaylines{}` to make multiline works.

## Logic

1. No number, no align

```
$$
...
$$
```

2. No number, with align

```
\begin{align*}
...
\end{align*}
```

or

```
\begin{aligned}
...
\end{aligned}
```

3. With number, no align

```
\begin{equation}
...
\tag{abc}
\end{equation}
```

4. With number, with align

```
\begin{align*}
... \tag{a} \\
... \tag{b} \\
...
\end{align*}
```

```
\begin{equation}
...
\begin{aligned}
...
\end{aligned}
\tag{abc}
\end{equation}
```

1, 3 and 4.2 need to be wrap.

- For 1, wrap the whole thing
- For 3 and 4.2, the wrap starts after `\begin{equaiton}` and ends before the `\tag`

Also the `\tag` is excluded from the wrapping since it will break the display of the number

## Note

Only applied on `html` so your `md` files can stay the same and you can simply uninstall this plugin when MathJax3 solves this problem.
