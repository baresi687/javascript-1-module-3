const resultDiv = document.querySelector(".message-container");

const messageSuccessContainer = document.querySelector(".message-success");
const messageInfoContainer = document.querySelector(".message-info");
const messageWarningContainer = document.querySelector(".message-warning");
const messageErrorContainer = document.querySelector(".message-error");

messageSuccessContainer.innerHTML = createToaster(
  "success",
  "File is upoaded successfully 😁"
);
messageInfoContainer.innerHTML = createToaster(
  "info",
  "File is upoaded but here is more information 😉"
);
messageWarningContainer.innerHTML = createToaster(
  "warning",
  "File is missing 😒"
);
messageErrorContainer.innerHTML = createToaster(
  "error",
  "Can not find file 🤢"
);

// resultDiv.innerHTML = createToaster("success", "File is upoaded successfully");
// resultDiv.innerHTML += createToaster(
//   "info",
//   "File is upoaded but here is more information"
// );
// resultDiv.innerHTML += createToaster("warning", "File is missing");
// resultDiv.innerHTML += createToaster("error", "Can not find file");
