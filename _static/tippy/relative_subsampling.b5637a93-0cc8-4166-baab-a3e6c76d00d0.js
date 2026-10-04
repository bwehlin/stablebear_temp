selector_to_html = {"a[href=\"glossary.html#term-principal-submatrix\"]": "<dt id=\"term-principal-submatrix\">principal submatrix</dt><dd><p>A matrix obtained from a square matrix by keeping the same selection\nof rows and columns. For an index set <span class=\"math notranslate nohighlight\">\\(S\\)</span>, it is written\n<span class=\"math notranslate nohighlight\">\\(M[S,S]\\)</span>. For example, keeping the first and third rows and\ncolumns of a <span class=\"math notranslate nohighlight\">\\(3\\times 3\\)</span> matrix gives</p><p><span class=\"math notranslate nohighlight\">\\(\\begin{pmatrix} m_{11} &amp; m_{13} \\\\ m_{31} &amp; m_{33} \\end{pmatrix}\\)</span>.</p><p>For a distance matrix, this retains all pairwise distances between\nthe selected points.</p></dd>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(`article.bd-article ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'auto-start', maxWidth: 420, interactive: true, theme: 'glossary',
                onShow(instance) {MathJax.typesetPromise([instance.popper]).then(() => {});},
            });
        };
    };
    console.log("tippy tips loaded!");
};
