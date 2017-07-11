define(['dojo/_base/declare',
        'dojo/_base/fx',
        'dojo/on',
        'dijit/_WidgetBase',
        'dijit/_TemplatedMixin',
        'dojo/text!../templates/navleft.html'],
        function (declare,baseFx,on,_WidgetBase,_TemplateMixin,_Template) {
            return declare([_WidgetBase,_TemplateMixin],{
                label1:'nodata',
                label2:'nodata',
                label3:'nodata',

                data1:[],
                data2:[],
                data3:[],

                templateString:_Template,
                postCreate:function () {
                    console.log(this.label)
                    
                }

            })
        })