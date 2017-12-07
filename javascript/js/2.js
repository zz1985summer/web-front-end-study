function getChildren(parent){
    console.log(parent.noteType!=3?parent.nodeName:parent.nodeValue);
    var children=parent.childNodes;
    for(var i=0;i<children.length;i++){
        getChildren(children[i]);
    }
}

getChildren(document.body);


function getChildren2(parent){
    var it=document.createNodeIterator(
        //show_all,每个元素都遍历包括文本节点
        //show_element,只遍历元素节点
        parent,NodeFilter.SHOW_ALL,
        null,false
    );

    while(true){
        var node=it.nextNode();
        if(node!=null){
            console.log(node.nodeType!=3?node.nodeName:node.nodeValue);
        }else{
            break;
        }


    }
}

getChildren2(document.body);