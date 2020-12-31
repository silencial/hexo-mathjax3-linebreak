hexo.extend.filter.register('after_render:html', (html, { page }) => {
    return html.replace(/(<span class="math display">\\\[\n)(\\begin{equation}|(?!\\begin))(.+?)(\\label|\\\]<\/span>)/gs, "$1$2\\displaylines{$3}\n$4");
  });
