/**
 * Created by 27353 on 2017/7/4.
 */

define(['dojo/dom'],function (dom) {
    var oldText = {};

    return{
        setText:function (id,text) {
            var node = dom.byId(id);
            oldText.id = node.innerHTML;
            console.log(oldText.id);
            node.innerHTML = text;
        },
        restoreText:function (id) {
            var node = dom.byId(id);
            node.innerHTML = oldText.id;
            delete  oldText.id;
        }
    }
})
