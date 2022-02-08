function createToaster(type = "", message = "") {
  return `<div class="toaster ${type}">
  <span>Classname: ${type}</span><span>${message}</span>
  </div>`;
}
