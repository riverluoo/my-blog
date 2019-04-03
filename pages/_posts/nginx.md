---
title: nginx
date: 2019-04-03
layout: post
---

# 一 location 的匹配规则

先匹配普通 再匹配正则

- [参考文档](https://www.cnblogs.com/lidabo/p/4169396.html)

```
# a
location /manage/ {
            proxy_pass http://127.0.0.1:8001;
            proxy_redirect             off;
        }

# b
location ~/manage/(log|organizationy)\b {
            proxy_pass http://127.0.0.1:8002;
            proxy_redirect  off;
        }
```

## location 的执行逻辑和编辑顺序的关系

普 location 和编辑顺序无关 正则 location 和编辑顺序有关
正则 location 匹配让步普通 location 的严格精确匹配结果；但覆盖普通 location 的最大前缀匹配结果

## 分类

- 正则
  “~ ”和“~_ ”前缀表示正则 location ，“~ ”区分大小写，“~_ ”不区分大小写
- 普通
  “=”，“^~ ”和“@ ”和无任何前缀的都属于普通 location

## “@” 前缀

这种“Named Location ”不是用来处理普通的 HTTP 请求的，用来处理“内部重定向（internally redirected ）”请求的

# 二 转发 tcp 请求

业务场景需要 nginx 转发自定义的 tcp 请求到内网的 ip 和端口

- [官方文档](http://nginx.org/en/docs/stream/ngx_stream_core_module.html#stream)
  从 1.9 版本开始 nginx 对转发 tcp 和 udp 进行了支持

```
stream {
    upstream ia{
        server 00.00.00.00:20000 max_fails = 3 fail_timeout = 30s;
    }
    server {
        proxy_connect_timeout 1s;
        proxy_timeout 3s;
        listen 18091;
        proxy_pass ia;
    }

}
```

## 遇到的问题

- [使用 Nginx 转发 TCP/UDP](https://www.jianshu.com/p/244386221cc5)
- [./configure: error: C compiler cc is not found](https://blog.csdn.net/testcs_dn/article/details/51461750)
- [No rule to make target build, needed by default. Stop.](https://blog.csdn.net/cailongbiaoyuli/article/details/84348866)
- [关闭防火墙](https://blog.csdn.net/ytangdigl/article/details/79796961)
- [替换安装方式](https://www.cnblogs.com/juanjuankaikai/p/9598976.html)
- [动态模块](http://www.sohu.com/a/59138683_354963)
