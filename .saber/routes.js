export default [
      {
              path: "/posts/my-example-post.html",
              meta: {
                __relative: '_posts/my-example-post.md',
                __pageId: '24a109e6'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-my-example-post-md" */ "/root/src/my-blog/pages/_posts/my-example-post.md?saberPage=24a109e6")
                
              }
            },
{
              path: "/posts/super-long-article.html",
              meta: {
                __relative: '_posts/super-long-article.md',
                __pageId: '164e056e'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-super-long-article-md" */ "/root/src/my-blog/pages/_posts/super-long-article.md?saberPage=164e056e")
                
              }
            },
{
              path: "/posts/super-short-article.html",
              meta: {
                __relative: '_posts/super-short-article.md',
                __pageId: 'b548fe52'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-super-short-article-md" */ "/root/src/my-blog/pages/_posts/super-short-article.md?saberPage=b548fe52")
                
              }
            },
{
              path: "/about.html",
              meta: {
                __relative: 'about.md',
                __pageId: '51ea64a4'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--about-md" */ "/root/src/my-blog/pages/about.md?saberPage=51ea64a4")
                
              }
            },
{
              path: "/",
              meta: {
                __relative: 'index.md',
                __pageId: '7d3a0649'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--index-md" */ "/root/src/my-blog/pages/index.md?saberPage=7d3a0649")
                
              }
            },
      // An addtional route to catch all other requests, i.e. 404 page
      {
        path: '*',
        name: 404,
        component: function () {
          return import(/* webpackChunkName: "404-page" */ "/root/src/my-blog/node_modules/saber/lib/renderer/app/404.vue")
        }
      }
    ]