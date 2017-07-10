/**
 * Created by liao on 2017/7/6.
 */
define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./template.html"
],function (declare, lang, _WidgetBase, _TemplateMixin, template) {
    return declare([_WidgetBase, _TemplateMixin],{
        _onClick:lang.hitch(this,function () {
            alert("click me");
        }),
        foo:"myFoo",
        people:{
            name:"tom",
            age:"2556"
        },
        _id:34
        ,
        templateString:template
    })

})