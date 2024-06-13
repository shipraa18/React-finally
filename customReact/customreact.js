function customRender(reactElement, mainContainer){
          // const domElement = document.createElement(reactElement.type);
          // domElement.innerHTML=reactElement.children;
          // domElement.setAttribute('href',reactElement.props.href);
          // domElement.setAttribute('target',reactElement.props.target);

          // mainContainer.appendChild(domElement);

          const domElement=document.createElement(reactElement.type);
          domElement.innerHTML=reactElement.children;
          for (const prop in reactElement.props) {
                    domElement.setAttribute(prop,reactElement.props[prop]);
          }

          mainContainer.appendChild(domElement);

}

const reactElement = {
          type: 'a',
          children: 'click me to visit google',
          props: {
                    href: 'https://google.com',
                    target: '/blank'
          },
}


const mainContainer=document.getElementById('root');

customRender(reactElement, mainContainer);

