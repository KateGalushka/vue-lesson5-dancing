(function(){"use strict";var e={9264:function(e,t,n){var i=n(9242),r=n(3396);const s=e=>((0,r.dD)("data-v-87ed67b2"),e=e(),(0,r.Cn)(),e),l={class:"main-container"},a={class:"container"},c=s((()=>(0,r._)("h3",null,"Хлопці:",-1))),d=s((()=>(0,r._)("h3",null,"Дівчата:",-1))),o=["disabled"];function u(e,t,n,i,s,u){const f=(0,r.up)("dancer-list"),h=(0,r.up)("selected-pairs");return(0,r.wg)(),(0,r.iD)("div",l,[(0,r._)("div",a,[(0,r._)("div",null,[c,(0,r.Wm)(f,{"dancer-list-data":s.boys,onSelect:u.onSelectBoy},null,8,["dancer-list-data","onSelect"])]),(0,r._)("div",null,[d,(0,r.Wm)(f,{"dancer-list-data":s.girls,onSelect:u.onSelectGirl},null,8,["dancer-list-data","onSelect"])])]),(0,r._)("button",{class:"addBtn",onClick:t[0]||(t[0]=(...e)=>u.onAddPair&&u.onAddPair(...e)),disabled:!u.isBtnEnabled()}," Додати ",8,o),0!=s.selectedPairs.length?((0,r.wg)(),(0,r.j4)(h,{key:0,selectedPairsList:s.selectedPairs,onDeletePair:u.onDeletePair},null,8,["selectedPairsList","onDeletePair"])):(0,r.kq)("",!0)])}n(560);const f=[{id:1,name:"Іван"},{id:2,name:"Юрій"},{id:3,name:"Андрій"},{id:4,name:"Ігор"},{id:5,name:"Влад"},{id:6,name:"Роман"}],h=[{id:111,name:"Настя"},{id:222,name:"Катя"},{id:333,name:"Тетяна"},{id:444,name:"Марина"},{id:555,name:"Леся"},{id:666,name:"Інна"},{id:777,name:"Наталія"}];var p=n(7139);const v={class:"dancer__list"};function m(e,t,n,i,s,l){const a=(0,r.up)("dancer-card");return(0,r.wg)(),(0,r.iD)("div",v,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.dancerListData,(e=>((0,r.wg)(),(0,r.j4)(a,{key:e.id,"dancer-data":e,onClick:t=>l.onSelect(e.id),class:(0,p.C_)({selected:e.id==this.selectedDancer.id})},null,8,["dancer-data","onClick","class"])))),128))])}const y={class:"dancer"};function b(e,t,n,i,s,l){return(0,r.wg)(),(0,r.iD)("div",y,(0,p.zw)(n.dancerData.name),1)}var g={name:"DancerCard",props:{dancerData:{type:Object,default:()=>({})}}},D=n(89);const _=(0,D.Z)(g,[["render",b],["__scopeId","data-v-9060ea14"]]);var P=_,w={name:"DancerList",components:{DancerCard:P},props:{dancerListData:{type:Array,default:()=>[]}},data(){return{selectedDancer:{}}},methods:{onSelect(e){this.selectedDancer.id=e,this.$emit("select",e)}}};const k=(0,D.Z)(w,[["render",m],["__scopeId","data-v-3c908039"]]);var S=k;const B={class:"pairs"},C=(0,r._)("h3",null,"Обрані пари",-1),L=["onClick"];function O(e,t,n,i,s,l){return(0,r.wg)(),(0,r.iD)("div",B,[C,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.selectedPairsList,((t,n)=>((0,r.wg)(),(0,r.iD)("ul",{key:n},[(0,r._)("li",null,[(0,r.Uk)((0,p.zw)(t)+" ",1),(0,r._)("button",{onClick:t=>e.$emit("deletePair",n)}," Видалити пару ",8,L)])])))),128))])}var j={name:"SelectedPairs",props:{selectedPairsList:{type:Array,default:()=>[]}}};const G=(0,D.Z)(j,[["render",O]]);var A=G,$={name:"App",components:{DancerList:S,SelectedPairs:A},data(){return{boys:f,girls:h,selectedBoy:null,selectedGirl:null,selectedPairs:[],idArr:[]}},methods:{onSelectBoy(e){this.selectedBoy=this.boys.find((t=>t.id==e))},onSelectGirl(e){this.selectedGirl=this.girls.find((t=>t.id==e))},filterBoysList(){return this.boys.filter((e=>e.id!==this.selectedBoy.id))},filterGirlsList(){return this.girls.filter((e=>e.id!==this.selectedGirl.id))},isBtnEnabled(){return this.selectedBoy&&this.selectedGirl},onClearSelection(){this.selectedBoy=null,this.selectedGirl=null},onAddPair(){this.selectedPairs.push(`${this.selectedBoy.name} - ${this.selectedGirl.name}`),this.idArr.push(`${this.selectedBoy.id} : ${this.selectedGirl.id}`),this.boys=this.filterBoysList(),this.girls=this.filterGirlsList(),this.onClearSelection()},onDeletePair(e){let t,n;t=this.selectedPairs.splice(e,1),console.log(t);let[i,r]=t[0].split(" - ");n=this.idArr.splice(e,1),console.log(n);let[s,l]=n[0].split(" : "),a={name:i,id:s},c={name:r,id:l};this.boys.push(a),this.girls.push(c),this.onClearSelection()}}};const x=(0,D.Z)($,[["render",u],["__scopeId","data-v-87ed67b2"]]);var Z=x;(0,i.ri)(Z).mount("#app")}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var s=t[i]={exports:{}};return e[i].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,i,r,s){if(!i){var l=1/0;for(o=0;o<e.length;o++){i=e[o][0],r=e[o][1],s=e[o][2];for(var a=!0,c=0;c<i.length;c++)(!1&s||l>=s)&&Object.keys(n.O).every((function(e){return n.O[e](i[c])}))?i.splice(c--,1):(a=!1,s<l&&(l=s));if(a){e.splice(o--,1);var d=r();void 0!==d&&(t=d)}}return t}s=s||0;for(var o=e.length;o>0&&e[o-1][2]>s;o--)e[o]=e[o-1];e[o]=[i,r,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,s,l=i[0],a=i[1],c=i[2],d=0;if(l.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(c)var o=c(n)}for(t&&t(i);d<l.length;d++)s=l[d],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(o)},i=self["webpackChunkdancing_proj"]=self["webpackChunkdancing_proj"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(9264)}));i=n.O(i)})();
//# sourceMappingURL=app.5e4414f2.js.map