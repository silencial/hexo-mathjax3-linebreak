hexo.extend.filter.register('after_render:html', (html, { page }) => {
    return html.replace(/<span class="math display">\\\[(.+?)\\\]<\/span>/gs, "<span class=\"math display\">\\[\n\\displaylines{$1}\n\\]</span>");
});
