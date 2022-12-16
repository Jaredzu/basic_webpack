import component from './component';

console.log("Hola desde App");

document.body.appendChild(component());

for (let index = 0; index < 5; index++) {
    document.body.appendChild(component(`holas ${index}`));

}