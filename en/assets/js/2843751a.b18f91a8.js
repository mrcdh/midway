"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4693],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1827:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={},l="HTTP \u8bf7\u6c42",c={unversionedId:"extensions/axios",id:"extensions/axios",title:"HTTP \u8bf7\u6c42",description:"midway \u5305\u88f9\u4e86 axios \u5305\uff0c\u4f7f\u5f97\u5728\u4ee3\u7801\u4e2d\u53ef\u4ee5\u7b80\u5355\u7684\u4f7f\u7528 axios \u63a5\u53e3\u3002",source:"@site/docs/extensions/axios.md",sourceDirName:"extensions",slug:"/extensions/axios",permalink:"/en/docs/next/extensions/axios",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/docs/extensions/axios.md",tags:[],version:"current",frontMatter:{},sidebar:"component",next:{title:"\u7f13\u5b58",permalink:"/en/docs/next/extensions/cache"}},p=[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",children:[],level:2},{value:"\u5f15\u5165\u7ec4\u4ef6",id:"\u5f15\u5165\u7ec4\u4ef6",children:[],level:2},{value:"\u4f7f\u7528\u670d\u52a1",id:"\u4f7f\u7528\u670d\u52a1",children:[],level:2},{value:"\u914d\u7f6e Axios",id:"\u914d\u7f6e-axios",children:[],level:2},{value:"\u914d\u7f6e\u5168\u5c40\u62e6\u622a\u5668",id:"\u914d\u7f6e\u5168\u5c40\u62e6\u622a\u5668",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"http-\u8bf7\u6c42"},"HTTP \u8bf7\u6c42"),(0,i.kt)("p",null,"midway \u5305\u88f9\u4e86 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/axios/axios"},"axios")," \u5305\uff0c\u4f7f\u5f97\u5728\u4ee3\u7801\u4e2d\u53ef\u4ee5\u7b80\u5355\u7684\u4f7f\u7528 axios \u63a5\u53e3\u3002"),(0,i.kt)("p",null,"\u548c axios \u7684\u4e00\u4e9b\u5173\u7cfb\u5982\u4e0b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u5b8c\u5168\u4e00\u81f4"),(0,i.kt)("li",{parentName:"ul"},"\u9002\u914d\u4f9d\u8d56\u6ce8\u5165\u5199\u6cd5\uff0c\u5b8c\u6574\u7684\u7c7b\u578b\u5b9a\u4e49"),(0,i.kt)("li",{parentName:"ul"},"\u65b9\u4fbf\u6846\u67b6\u4e32\u8054\u4f9d\u8d56\u94fe\u8def\uff0c\u6392\u67e5\u95ee\u9898")),(0,i.kt)("p",null,"\u76f8\u5173\u4fe1\u606f\uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e\u6807\u51c6\u9879\u76ee"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e Serverless"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e\u4e00\u4f53\u5316"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,i.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/axios@beta --save\n")),(0,i.kt)("h2",{id:"\u5f15\u5165\u7ec4\u4ef6"},"\u5f15\u5165\u7ec4\u4ef6"),(0,i.kt)("p",null,"\u9996\u5148\uff0c\u5f15\u5165 \u7ec4\u4ef6\uff0c\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"configuration.ts")," \u4e2d\u5bfc\u5165\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/decorator';\nimport * as axios from '@midwayjs/axios';   \nimport { join } from 'path'\n\n@Configuration({\n  imports: [\n    axios       // \u5bfc\u5165 axios \u7ec4\u4ef6\n  ],\n  importConfigs: [\n    join(__dirname, 'config')\n  ]\n})\nexport class ContainerLifeCycle {\n}\n")),(0,i.kt)("p",null,"\u7136\u540e\u5728\u4e1a\u52a1\u4ee3\u7801\u4e2d\u5373\u53ef\u6ce8\u5165\u4f7f\u7528\u3002"),(0,i.kt)("h2",{id:"\u4f7f\u7528\u670d\u52a1"},"\u4f7f\u7528\u670d\u52a1"),(0,i.kt)("p",null,"\u63a5\u53e3\u548c ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/axios/axios"},"axios")," \u4e00\u81f4\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"axios.request(config)\naxios.get(url[, config])\naxios.delete(url[, config])\naxios.head(url[, config])\naxios.options(url[, config])\naxios.post(url[, data[, config]])\naxios.put(url[, data[, config]])\naxios.patch(url[, data[, config]])\n")),(0,i.kt)("p",null,"\u4f7f\u7528\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HttpService } from '@midwayjs/axios';\n\n@Provide()\nexport class UserService {\n    \n  @Inject()\n  httpService: HttpService;\n  \n  async invoke() {\n    const url = 'http://www.weather.com.cn/data/cityinfo/101010100.html';\n    const result = await this.httpService.get(url);\n    // TODO resut\n  }\n}\n")),(0,i.kt)("h2",{id:"\u914d\u7f6e-axios"},"\u914d\u7f6e Axios"),(0,i.kt)("p",null,"HttpService \u5b9e\u4f8b\u7b49\u4ef7\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"axios.create")," \uff0c\u6240\u4ee5\u53ef\u4ee5\u6709\u4e00\u4e9b\u914d\u7f6e\u53c2\u6570\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/config.default.ts")," \u4e2d\u914d\u7f6e\u5b83\uff0c\u914d\u7f6e\u5b8c\u4e4b\u540e\uff0c\u5168\u5c40\u7684 axios \u90fd\u4f1a\u751f\u6548\u3002"),(0,i.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export const axios = {\n    baseURL: 'https://api.example.com',\n  // `headers` are custom headers to be sent\n  headers: {\n    'X-Requested-With': 'XMLHttpRequest'\n  },\n  timeout: 1000, // default is `0` (no timeout)\n\n  // `withCredentials` indicates whether or not cross-site Access-Control requests\n  // should be made using credentials\n  withCredentials: false, // default\n};\n")),(0,i.kt)("p",null,"\u5177\u4f53\u7684\u53c2\u6570\u53ef\u4ee5\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/axios/axios#config-defaults"},"axios global config"),"\u3002"),(0,i.kt)("h2",{id:"\u914d\u7f6e\u5168\u5c40\u62e6\u622a\u5668"},"\u914d\u7f6e\u5168\u5c40\u62e6\u622a\u5668"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Configuration } from '@midwayjs/decorator';\nimport * as axios from '@midwayjs/axios';   \nimport { join } from 'path';\nimport { IMidwayContainer } from '@midwayjs/core';\n\n@Configuration({\n  imports: [\n    axios       // \u5bfc\u5165 axios \u7ec4\u4ef6\n  ],\n  importConfigs: [\n    join(__dirname, 'config')\n  ]\n})\nexport class ContainerLifeCycle {\n  \n  async onReady(container: IMidwayContainer) {\n    const httpService = await container.getAsync(axios.HttpService);\n    httpService.interceptors.request.use(\n      config => {\n        // Do something before request is sent\n        return config;\n      },\n      error => {\n        // Do something with request error\n        return Promise.reject(error);\n      }\n    );\n  }\n}\n")))}m.isMDXComponent=!0}}]);