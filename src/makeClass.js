/**
 * Created by 27353 on 2017/7/5.
 */
define(['dojo/_base/declare'],function (declare) {
    if(!dojo){
        console.log("dojo不存在")
    }else if(!dojo.declare){
        console.log("declare undefine")
    }else {
        console.log("ok");
    }


   declare(
        "Shape",
         null,
        {
            color:0,
            setColor:function (color) {
                this.color = color;
            }
        });

    var myShape = new Shape();


    var check1 = myShape.color;
    myShape.setColor(0x0000FF);
    var check2 = myShape.color;
    console.log(check2);
    return myShape;

})