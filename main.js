const languageToggle = document.querySelector("#language-toggle");

languageToggle.addEventListener("click", () => {
    const language = languageToggle.getAttribute("aria-checked") === "true"
        ? "nl"
        : "en";

    document.documentElement.lang = language;
    languageToggle.setAttribute("aria-checked", String(language === "en"));
    languageToggle.setAttribute(
        "aria-label",
        language === "en" ? "Switch language to Dutch" : "Switch language to English",
    );

    document.querySelectorAll("[data-nl][data-en]").forEach((element) => {
        element.textContent = element.dataset[language];
    });
});