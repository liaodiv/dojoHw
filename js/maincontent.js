
define(['dojo/_base/declare',
        'dojo/_base/fx',
        'dojo/on',
        'dojo/dom-style',
        'dijit/_WidgetBase',
        'dijit/_TemplatedMixin',
        'dojo/text!../templates/maincontent.html'],
        function (declare,baseFx,on,domStyle,_WidgetBase,_TemplateMixin,_Template) {
            return declare([_WidgetBase,_TemplateMixin],{
                title:'default title',
                label:'default label',
                content:[],

                templateString:_Template,
                postCreate:function () {
                    var setfontNode = this.setfont;
                    var i=0;
                    while (i < 8){
                        var anode = setfontNode.children[i].children[1];    // 获取到A节点
                        domStyle.set(anode, "font-weight",200 + i * 100);   // 根据不同节点设置粗细
                        i++;
                    }
                }
            })
        })