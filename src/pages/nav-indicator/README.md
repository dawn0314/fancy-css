# Nav Menu Indicator

# 클릭 시 아이콘 위로

```jsx
<script>
      const list = document.querySelectorAll(".list");
      function activeLink() {
        list.forEach((item) => item.classList.remove("active"));
        this.classList.add("active");
      }
      list.forEach((item) => item.addEventListener("click", activeLink));
</script>
```

```css
.navigation-container li.active a .icon {
  background: var(--icon-color);
  color: #fff;
  **transform: translateY(-27px);**
  transition-delay: 0.25s;
}
```

- 각 리스트를 클릭하면 active 클래스명을 추가하여 css 스타일 적용

```tsx
<li class="list" **style="--icon-color: #b145e9"**>
	<a href="#">
		<span class="icon">
			<ion-icon name="settings-outline"></ion-icon>
		</span>
	</a>
</li>
```

<br>

# 따라오는 메뉴 배경

```css
ul li:nth-child(1).active ~ .indicator {
  // default indicator position
  transform: translateX(calc(70px * 0)); // 아이콘의 너비== 70px
}
ul li:nth-child(2).active ~ .indicator {
  transform: translateX(calc(70px * 1)); // 70px만큼 이동
}
ul li:nth-child(3).active ~ .indicator {
  transform: translateX(calc(70px * 2));
}
ul li:nth-child(4).active ~ .indicator {
  transform: translateX(calc(70px * 3));
}
ul li:nth-child(5).active ~ .indicator {
  transform: translateX(calc(70px * 4));
}
```

- `li:nth-child(1).active` : li의 n번째 자식이 active 상태일 때
- `~ .indicator` : <li>요소의 형제인 .indicator에 해당시킴
- position: absolute인 indicator를 아이콘 너비에 맞춰 x 좌표를 이동시킨다.

<br>

### Reference

https://www.youtube.com/watch?v=qzMy7yC9QvM&t=0s
