// wait for DOM and scripts to load
window.addEventListener("load", () => {
  const printContents = document.getElementById("printable").innerHTML;
  const originalContents = document.body.innerHTML;

  function printDiv() {
    document.body.innerHTML = printContents;
    console.log(printContents);
    window.print();
    document.body.innerHTML = originalContents;

    attachListenter();
  }
  function attachListenter() {
    document
      .querySelector("[data-print-button]")
      .addEventListener("click", function () {
        console.log("Print Button Clicked");
        printDiv();
      });
  }
  attachListenter();
});
