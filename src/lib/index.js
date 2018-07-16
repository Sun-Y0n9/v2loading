import Loading from "./components/loading.vue";
export default {
	install(Vue, options){
        var proto = {
        	show(showOtps){
                var $lg = 'ld' + new Date().getTime() + Math.ceil(Math.random() * 10);
                var LoadingPlugin = Vue.extend(Loading);
                $lg = new LoadingPlugin({
                    el: document.createElement('div'),
                    data:{
                        onlyCls : showOtps.cls + new Date().getTime()
                    }
                });
                // 使用图片还是css
                $lg.type = Number(showOtps.type) || 1;
                // 存在pid, 在pid中loading, 不存在直接在body中
                if(showOtps.pId){
                    var parentCss = window.getComputedStyle(document.getElementById(showOtps.pId));
                    var border = parseInt(parentCss.border);
                    $lg.$el.style.width = parentCss.width;
                    $lg.$el.style.height = parentCss.height;
                    $lg.$el.style.top = document.getElementById(showOtps.pId).offsetTop + border + "px";
                    $lg.$el.style.left = document.getElementById(showOtps.pId).offsetLeft + border + "px";
                    document.getElementById(showOtps.pId).appendChild($lg.$el);
                }else{
                    document.body.appendChild($lg.$el);
                }
                // 存在文字样式, 则应用
                if(showOtps.msgStyles){
                    for(var k in showOtps.msgStyles){
                        $lg.$el.getElementsByClassName('text')[0].style[k] = showOtps.msgStyles[k];
                    }
                }
                // 提示文字存在, 传递给组件
        		if(showOtps.msg){
        			$lg.text = showOtps.msg.trim();
        		}
                // 自定义类存在, 增加上去
                if(showOtps.cls){
                    $lg.$el.setAttribute("class", showOtps.cls + " loading_ " + $lg.$data.onlyCls);
                }
                // 传递来的持续时间存在, 则持续时间后调用隐藏方法
        		if(typeof showOtps.duration === 'number'){
        			setTimeout(() => {
        				this.hide($lg.$data.onlyCls);
        			},showOtps.duration)
        		}
                // 自定义图片
                if(showOtps.img && showOtps.type === -1){
                    $lg.loadingGif = showOtps.img;
                }
                // 自定义颜色
                if(showOtps.color){
                    $lg.color = showOtps.color;    
                }
        	},
        	hide(cls){
                if(document.getElementsByClassName(cls)[0]){
                    document.getElementsByClassName(cls)[0]
                    .parentNode
                    .removeChild(document.getElementsByClassName(cls)[0])                    
                }
        	},
            hideAll(){
                var loadings = document.getElementsByClassName('loading_');
                var length = loadings.length;
                for(var i=0;i<length;i++){
                    loadings[0]
                    .parentNode
                    .removeChild(loadings[0])
                }
            }
        }
        if(!Vue.$vloading){
			Vue.$vloading = proto;
        }
        Vue.mixin({
            created() {
                this.$vloading = Vue.$vloading;
            }
        });
	}
}