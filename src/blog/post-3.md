---
# layout: ../../layouts/MarkdownPostLayout.astro
title: '學習Houdini'
pubDate: 2025-03-14
description: '學習Houdini'
author: '蘇昱融'
image:
    url: '/predator/Houdini3D.png'
    alt: 'The Astro logo on a dark background with a pink glow.'
tags: ["3d"]
draft: true

---
## 用數學做藝術 - Houdini

大家可能聽過 Blender、3ds MAX、C4D 和 Maya，但是比較少人知道 Houdini，可能是因為 Houdini 這個軟體很難學。Houdini 是一個3d創作平台，強項在程序化(proceduralism)和特效。

我的3D軟體的學習要從在德國的時間說起。2022年，我離開的前一年，碩士已經快讀完，剩下很多時間我開始學Blender。
我記得我也跟大多數人是從 Blender Guru 的甜甜圈開始，然後是Blender Guru 的椅子和沙發。
之後陸續完成了很多作品，這要感謝網路上 Blender community 和 Youtube, Stack Exchange 等資源。我發現我很會用 Geometry Nodes
，可能是因為我是讀物理的吧!

最近我決定嘗試 Houdini 是因為 Blender 在操控 Attribute 很不方便，又看到 Youtube 有人做出很酷的 Motion Design 動畫，居然需要用到 divergence (散度)。想說這些厲害的藝術家也需要讀數學，真佩服。因為我常接觸物理和數學的概念，也不會怕程式碼和數學，所以我覺得我應該很適合學Houdini。

其實有了對 3D 背後的原理的了解，在 Houdini 操控 Attribute 非常直觀，比如說要給每一個點一個溫度的值，再用這個值來改變 shader 顏色，反而是在建模和動畫 Houdini 相對難用。Houdini 在程序化也很強大，要臨時改一個參數，像是 3D 樓房的窗戶形式，回去 node 源頭改就好了，不需要整個打掉重做。

我剛剛花了3萬買了Houdini Indie 2年的使用期限，所以要趕快學會。我之前已經用試用版完成了最基本的教學課程，結果我也需要辛苦掙扎。如果你對 Blender 的 Geometry Nodes 有恐懼，那想像一下 Houdini 全部都是連來連去的 Node ，就算是我也需要適應一陣子。