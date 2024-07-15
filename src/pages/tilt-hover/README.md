# 3D tilt hover effect

### Skills

- React
- SCSS
- [Vanilla-tilt](https://micku7zu.github.io/vanilla-tilt.js/)

### Description

- `useRef`를 이용하여 icon 요소에 대한 DOM을 참조한다.
- `useEffect`를 사용하여 컴포넌트가 마운트될 때 아이콘 요소에 대하여 VanillaTilt 효과를 초기화 한다.
- 이벤트 핸들러인 mouseEnter와 mouseLeave는 각 아이콘의 색상을 가져와 배경 색을 변경한다.

⚠️ CSS에서 icon에 `hover` 할 시, 배경 색을 아이콘 색과 같이 바뀌게 하려고 했다.
하지만 CSS만으로 부모 요소의 스타일을 자식 요소의` hover` 상태에 따라 변경 할 수 없다.

<br>

## JavaScript Version

```
VanillaTilt.init(document.querySelector("your-element", {
  max: 25,
  speed: 400
}));

let list = document.querySelectorAll('.icon-wrapper li');
let bg = document.querySelector('body');
list.forEach(element => {
  element.addEventListener("mouseenter", function(event){
    let color = event.target.style.getPropertyValue('--clr');
    bg.style.backgroundColor = color;
  })
  element.addEventListener("mouseleave", function(event){
    bg.style.backgroundColor = '#fff';
  })
})
```
