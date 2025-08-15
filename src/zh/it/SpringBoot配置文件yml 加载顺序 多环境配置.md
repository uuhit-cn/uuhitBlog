---
icon: pen-to-square
date: 2025-08-13
order: 11
category:
  - Java,SpringBoot,application.yml
tag:
  - 红
  - 大
  - 圆
---

# SpringBoot配置文件yml 加载顺序 多环境配置

## 一、覆盖原则
&emsp;&emsp;后加载的配置优先级更高（<span style="color:red">覆盖先加载的同类配置</span>）

## 二、加载顺序
&emsp;&emsp;1、主配置 application.yml 先加载。

&emsp;&emsp;2、通过 spring.config.import 导入的加载。
&emsp;&emsp;&emsp;&ensp;当导入多个配置时，按照设置中从上到下、从左到右的顺序依次加载。

&emsp;&emsp;3、通过 yml配置文件中的 spring.profiles.active 激活的加载。
&emsp;&emsp;&emsp;&ensp;当激活多个配置时，按照设置中从上到下、从左到右的顺序依次加载。

&emsp;&emsp;4、docker run创建时参数 -e SPRING_PROFILES_ACTIVE将导致“不执行第3步”，注意不是覆盖参数，是没有了第3步。
&emsp;&emsp;&emsp;&ensp;如果参数中有多个配置，按照从前到后的顺序依次加载。

## 三、特别注意
&emsp;&emsp;docker run创建时参数 -e SPRING_PROFILES_ACTIVE 将导致 <span style="color:red">不执行yml文件中的 spring.profiles.active </span>。