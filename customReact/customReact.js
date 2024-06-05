function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  console.log(domElement);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "http://google.com",
    target: "_blank",
  },
  children: "Visit Google",
};

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);
