'use strict';

function collectSameElements(collectionA, collectionB) {
  var result=[];
  for (var i=0;i<collectionA.length;i++){
    if (collectionB.indexOf(collectionA[i])!=-1&&result.indexOf(collectionA[i])==-1) {
      result.push(collectionA[i]);
    }
  }
  return result;
}
