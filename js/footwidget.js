/**
 * Created by 27353 on 2017/7/11.
 */

define(['dojo/_base/declare',
        'dojo/_base/fx',
        'dojo/on',
        'dojo/dom-style',
        'dijit/_WidgetBase',
        'dijit/_TemplatedMixin',
        'dojo/text!../templates/footwidget.html'],
    function (declare,baseFx,on,domStyle,_WidgetBase,_TemplateMixin,_Template) {
        return declare([_WidgetBase,_TemplateMixin],{
            title:'default title',
            label:[],
            content:[],

            templateString:_Template,
            postCreate:function () {

            }
        })
    })