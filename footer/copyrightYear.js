export default function copyrightYear() {
  // wait for DOM and scripts to load
  window.addEventListener("load", () => {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.getElementById("copyright");
    copyrightElement.textContent = `${currentYear} `;
  });
}
