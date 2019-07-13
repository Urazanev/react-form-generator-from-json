
export default (configuration) => {
  const element = document.createElement("a");
  const file = new Blob([JSON.stringify(configuration)], {type: "application/json"});
  element.href = URL.createObjectURL(file);
  element.download = "formData.json";
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();
}
