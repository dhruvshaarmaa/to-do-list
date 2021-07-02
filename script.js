let btnAdd=$("#btnAdd");
let btnReset=$("#btnReset");
let btnSort=$("#btnSort");
let btnClean=$("#btnClean");
let inpTask=$("#inpTask");
let ulList=$("#ulList");

function addTask(){
    let listItem=$("<li>",{
        'class':"list-group-item",
        text: inpTask.val()
    });

    ulList.append(listItem);
    
    listItem.click(()=>{
        listItem.toggleClass("done");
    });
    
    inpTask.val("");
    toggleInputButtons();
}

function clear(){
    $("#ulList .done").remove();
    //checking length
    toggleInputButtons();
}

function toggleInputButtons(){
    btnReset.prop("disabled",inpTask.val()=="");
    btnAdd.prop("disabled",inpTask.val()=="");
    btnSort.prop("disabled",ulList.children().length==0);
    btnClean.prop("disabled",ulList.children().length==0);
}

//clicking enter button
inpTask.keypress((e)=>{
    if(e.which==13){
        addTask();
    }
});

//typing new task
inpTask.on("input",toggleInputButtons);

btnAdd.click(addTask);

btnReset.click(()=> {
    inpTask.val("");
    toggleInputButtons(true);
});

btnClean.click(clear);

btnSort.click(()=>{
    $("#ulList .done").appendTo("#ulList");
});