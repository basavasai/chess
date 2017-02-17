/**
 * Created by apple on 2/16/17.
 */

(function () {
    'use strict';

    var formEl = document.getElementById('formChecked');
    var knightPosition;
    var kingPosition;
    var checkMate;
    var output = document.getElementById('output');

    formEl.addEventListener('submit', function (e) {
          e.preventDefault();
          knightPosition = formEl.knight.value;
          kingPosition =  formEl.king.value;
          if(isChecked(knightPosition, kingPosition)){
              output.textContent ='Checked';
           }
           else {
              output.textContent ='Not a Check';
          }
    });


    function isChecked(knightPosition, kingPosition) {
        var x= ['A','B','C','D','E','F','G','H'],
            y =[1,2,3,4,5,6,7,8];

        var combinations = [];
        var startIndex = 0;
        var lastIndex = 1;
        var index_0 = 0;
        var index_1 = 1;

        // D5 - F4, F6, B4, B6, 7C, 3C etc....
        // All the possible combinations
        var compute = [[2,1],[2,-1],[-2, 1],[-2, -1] ,[1,2],[-1,2],[1,-2],[-1, -2]] ;


        var check = function(knight, king, com) {
            var  knightFirstIndex = x[x.indexOf(knight[startIndex].toUpperCase())  + com[index_0]];
            var  knightSecondIndex = y[y.indexOf(parseInt(knight[lastIndex]))  + com[index_1]];
            var position = knightFirstIndex.toString() + knightSecondIndex.toString();
            combinations.push(position);

        };

        for (var i=0, len = compute.length; i < len; i++){

            check(knightPosition, kingPosition, compute[i])

        }
        return combinations.indexOf(kingPosition.toUpperCase()) <0 ? false: true;
    }

}());













