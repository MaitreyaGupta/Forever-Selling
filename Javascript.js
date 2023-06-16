var Purchase=[] 
var Displayer=document.getElementById("Displayer")
var button=document.getElementById("Purchase")
var button1=document.getElementById("Checkout")
var confirm=document.getElementById("Confirm")
var Address=document.getElementById("Address")
var Name=document.getElementById("name")
var LeftButton=document.getElementById("Right")
var RightButton=document.getElementById("Left")
var Img1=document.getElementById("Image1")
var Img2=document.getElementById("Image2")
var Img3=document.getElementById("Image3") 
var CarryOver=[]
RightButton.addEventListener("click",OnLeftDisplay)
Img1.style.visibility="visible";
Img2.style.visibility="hidden";
Img3.style.visibility="hidden";
function OnRightDisplay(){
if(Img1.style.visibility=="visible")
{
	Img1.style.visibility="hidden"
	Img2.style.visibility="visible"

}
else if(Img2.style.visibility=="visible")
{
	Img2.style.visibility="hidden"
	Img3.style.visibility="visible"
}
else if(Img3.style.visible==true)
{
	Img3.style.visibility="hidden"
	Img1.style.visibility="visible"
}
}
LeftButton.addEventListener("click",OnRightDisplay)
function OnLeftDisplay(){
	if(Img3.style.visibility=="visible")
	{
		Img3.style.visibility="hidden"
		Img2.style.visibility="visible"
	}
	else if(Img2.style.visibility=="visible")
	{
		Img2.style.visibility="hidden"
		Img1.style.visibility="visible"
	}
	else if(Img1.style.visible==true)
	{
		Img1.style.visibility="hidden"
		Img3.style.visibility="visible"
	}
}
button.addEventListener("click",OnPurchase)
function OnPurchase()
{
     if(Img1.style.visibility=="visible")
	 {
		Purchase+="Alow vera Shampoo"
	 }
    
     if(Img2.style.visibility=="visible")
	 {
		Purchase+="Alow vera Soap"
	 }
	 
     if(Img3.style.visibility=="visible")
	 {
		Purchase+="Alow vera Facewash"
	 }
}
button1.addEventListener("click",OnCheckOut)
button1.addEventListener("click",loadPurchase)
function OnCheckOut(){
    CarryOver=Purchase;
}
function loadPurchase(){
    document.getElementById("content").innerHTML='<object type="text/html" data="Checkout.html"></object>'
	Displayer.style.visibility="hidden";

}
confirm.addEventListener("click",OnBilling)
function OnBilling(){
    console.log("Sending Bill")
    sendEmail();
}
function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "maitreyaguptaa@gmail.com",
	Password : "killdill",
	To : "maitreyaguptaa@gmail.com",
	From : "maitreyaguptaa@gmail.com",
	Subject :  "Order",
	Body :"Order"+ String(CarryOver)+"By"+String(Name)+"Address"+String(Address),
	}).then(
		message => alert("mail sent successfully")
	);
}