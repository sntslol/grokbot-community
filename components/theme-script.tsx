export function ThemeScript() {
  const code = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored;
    if (!theme) {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    var root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme === "dark" ? "dark" : "light");
    root.style.colorScheme = theme === "dark" ? "dark" : "light";
  } catch (e) {
    document.documentElement.classList.add("light");
  }
})();
`;
  return (
    <script
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
}
