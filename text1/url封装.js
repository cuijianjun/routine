/**
 * Created by PPLU on 2016/12/19.
 */
/**
 *
 * @param Obj  {
 *      name :["checking.html", "assessment.html", "taskProcessing.html"]
 * }
 */

var minUrl={
    splitUrl :function(Obj){

        var arrpro_url = [];
        var arrpro = Obj.name||[];
        var index = [];
        var Min;
        for(var i = 0; i < data.page.length; i++) {
            arrpro_url.push(data.page[i].key);
        }
        for(var j = 0; j < arrpro.length; j++) {
            temp = arrpro_url.indexOf(arrpro[j]);
            if(temp >= 0) {
                index.push(temp);
            }
        }
        Min = Math.min.apply([], index);
        data.page.splice(Min);
    }
}

