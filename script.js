const block=document.querySelectorAll(".block");
const result=document.querySelector("h2");
let game=true;
block.forEach((e)=>{
    e.addEventListener("click",()=>fun(e));
});
let count=true;
let no_of_turns=0;
let win="";
let arr=[[1,2,3],
[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[5,7,3],
]
let pre=["0","1","2","3","4","5","6","7","8"]
function fun(e){
    if(!game)return;
    
    let index=e.querySelector(".hide").textContent;
    if(count){
        
        if(pre[index]!='O' && pre[index]!='X'){
            e.querySelector(".content").textContent="O";
            pre[index]='O'
            if(checkWin()){
            result.textContent=`Player O Won`;
            game=false;
            alert("Player O Won");

        }   no_of_turns++;
            count=!count;
            result.textContent="Player X turn";
            
        }else{
            alert("Already taken.");
        }
        
    }
    else{
        
        if(pre[index]!='O' && pre[index]!='X'){
            e.querySelector(".content").textContent="X";
            pre[index]='X'
            if(checkWin()){
            result.textContent=`Player X Won`;
            game=false;
            alert("Player X Won");
        }
            no_of_turns++;
            count=!count;
            result.textContent="Player O turn";
            }else{
            alert("Already taken.");
        }
        
    }
    if(no_of_turns==9){
        alert("Draw!");
        result.textContent="The match is draw.";
        game=false;
    }

}
function checkWin(){
    for(let content of arr){
        let [a,b,c] = content
        if(pre[a-1]==pre[b-1] && pre[b-1]==pre[c-1])
        return true;
    }
    return false;
}