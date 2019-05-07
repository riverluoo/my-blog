---
title: 开发中遇到的问题
date: 2019-04-26
layout: post
---

## 1: dubbo注册服务很慢
- [记一次本机 InetAddress.getLocalHost()引起的项目启动变慢及解决过程](https://blog.csdn.net/puma_dong/article/details/53096149)

## 2: 无法创建进程

![](https://riverluooo.oss-cn-beijing.aliyuncs.com/img/20190506143633.png)

- 有最大进程数限制

 ![](https://riverluooo.oss-cn-beijing.aliyuncs.com/img/20190507105938.png)

解决方式

- 临时解决

- [一次受限于操作系统进程数的 OOM](https://www.cnblogs.com/alipayhutu/p/3298360.html)

```
 ulimit -u 10000
```

- 永久解决

- [linux 修改 max user processes limits](https://blog.csdn.net/bbaiggey/article/details/51004817)

```
/etc/security/limits.d/90-nproc.conf
```

