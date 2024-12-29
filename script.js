document.addEventListener("DOMContentLoaded", () => {
    // ページ読み込み時のセクションフェードイン
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
        section.style.opacity = 0;
        section.style.transition = `opacity 1s ease-in-out ${index * 0.5}s`;
        section.style.opacity = 1;
    });

    // ヘッダークリック時の色変更
    const header = document.querySelector("header");
    header.addEventListener("click", () => {
        header.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    });

    // 重要なニュース強調
    const newsArticles = document.querySelectorAll("main > section:nth-child(3) article");
    newsArticles.forEach(article => {
        article.addEventListener("mouseover", () => {
            article.style.backgroundColor = "#ffcccb";
        });
        article.addEventListener("mouseout", () => {
            article.style.backgroundColor = "";
        });
    });
});
