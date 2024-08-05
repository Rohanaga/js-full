# projects related to dom and async

## projects 5 bgcolor

``` javascript
const randomColor = function(){
  const hex = "0123456789ABCDEF"
  let color = '#'
  for(let i=0; i < 6; i++){
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color;
};
let intervalId
const startchangingColor = function(){
  if(!intervalId){
  intervalId = setInterval
  (changeBgColor, 1000)
  }

  function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
  }
}
const stopchangingColor = function(){
  clearInterval(intervalId);
  intervalId = null;
}
document.querySelector('#start').addEventListener('click', startchangingColor)
document.querySelector('#stop').addEventListener('click', stopchangingColor)

```
### projects 6 keydown

``` js
const insert = document.getElementById('insert')
window.addEventListener('keydown', (e) => {
 insert.innerHTML = `
  <div class = 'color'>
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
 </table>
  </div>
   `;
});
```