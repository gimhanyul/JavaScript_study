//Hoist의 뜻은 무언가를 들어 올리거나 끌어올리는 동작
//JavaScript에서 호이스팅은 코드가 실행되기 전에 
//변수 및 함수 선언(이름)이 로컬 범위(위)의 맨 위로 들어올려지거나 끌어올려지는 경우'

console.log(happyham); //선언단계로 undefinde
var happyham = "super hamster"; //할당단계 값 할당됌

func(); //호이스팅
function func(){
 consolo.log("hoisting");
}