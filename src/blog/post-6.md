---
# layout: ../../layouts/MarkdownPostLayout.astro
title: '學 Substance Painter'
pubDate: 2025-06-01
description: '學 Substance Painter'
author: '蘇昱融'
image:
    url: '/predator/rocket-static.png'
    alt: 'video'
tags: ["3d"] 
draft: false
---
我第一次用 Adobe Substance 3d Painter，覺得上材質恨快很方便，反正多了一個工具。不然我平常對 Adobe 的產品很抗拒。但是有一些東西實在是沒有替代品。

說真的，如果要做動畫，有人給我 Maya 的權限，我也會從頭開始學 ，因為 Maya 有很多 Blender 沒有的動畫工具，用起來要方便很多，Blender用到後來會發現有很多limitation。營利的軟體就是比免費的還有更多資源和請更多軟體工程師，雖然其他方面 Maya 感覺已經過時了。

圖是我用 Blender 建模， Substance 3d Painter 上材質做的火箭噴射引擎。我再從 Blender 輸出 FBX 到 Houdini， 加入兩種火焰。在 Houdini 上材質真的很不直觀，需要注意UV和材質的 Attribute 不要丟失。而且每個材質都要重新輸入圖檔，再連連看 node tree，麻煩! 還好網路有看到有人有 Python script 可以自動轉換 UDIM 到 MaterialX。我一開始是用 File node 去抓 FBX 檔，後來發現 Houdini 可以直接Import FBX scene，然後再 Copy material library 到我的模型，這樣快超多! 最後在 Solaris 用 Karma 渲染約2小時。最後回到 Blender 和 Davinci Resolve 後製加上炫光效果和調色。