/**
 * Created by 27353 on 2017/7/5.
 */
define(["dojo/_base/declare",
        "dojo/_base/fx",
        "dojo/_base/lang",
        "dojo/dom-style",
        "dojo/mouse",
        "dojo/on",
        "dijit/_WidgetBase",
        "dijit/_TemplateMixin"],
    function (declare, baseFx, lang, domStyle, mouse, on , _WidgetBase,_TemplateMixin,template) {
    return declare([_WidgetBase,_TemplateMixin],{

            name:"No Name",

            avator: require.toUrl("./widget/images/mfc.PNG"),

            bio:"",

            templateString: template,

            baseClass:"autherWidget",

            mouseAnim: null,

            baseBackgroundColor:"#fff",
            mouseBackgroundColor:"#def",

            postCreate:function () {
                var domNode = this.domNode;

                this.inherited(arguments);

                domStyle.set(domNode, "backgroundColor",this.baseBackgroundColor);

                this.own(
                    on(domNode, mouse.enter ,lang.hitch(this, "_changeBackground",this.mouseBackgroundColor)),
                    on(domNode, mouse.leave ,lang.hitch(this, "_changeBackground", this.baseBackgroundColor))
                )
            },

            _changeBackground:function (newColor) {
                if(this.mouseAnim){
                    this.mouseAnim.stop();
                }

                this.mouseAnim = baseFx.animateProperty({
                    node:this.domNode,
                    properties:{
                        backgroundColor: newColor
                    },
                    onEnd: lang.hitch(this,function () {
                        this.mouseAnim = null;
                    })
                }).play();
            },

            _setAvatorAttr:function (imagePath) {

                if(imagePath != ""){
                    this._set("avatar",imagePath);

                    this.avatarNode.src = imagePath;  //link to html
                }
            }

        });
    });