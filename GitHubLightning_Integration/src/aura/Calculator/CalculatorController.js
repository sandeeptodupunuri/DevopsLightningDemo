({
	doAdd : function(component, event, helper) {
	var num1=component.find("input1").get("v.value");;	
	var num2=component.find("input2").get("v.value");;	
    alert(parseInt(num1)+parseInt(num2));
    component.set("v.Result",parseInt(num1)+parseInt(num2));


	},
    doSub : function(component, event, helper) {
	var num1=component.find("input1").get("v.value");;	
	var num2=component.find("input2").get("v.value");;	
    alert(parseInt(num1)-parseInt(num2));	
    component.set("v.Result",parseInt(num1)-parseInt(num2));

    },
 	doMul : function(component, event, helper) {
	var num1=component.find("input1").get("v.value");;	
	var num2=component.find("input2").get("v.value");;	
    alert(parseInt(num1)*parseInt(num2));		
    component.set("v.Result",parseInt(num1)*parseInt(num2));
	},
	doDiv : function(component, event, helper) {
	var num1=component.find("input1").get("v.value");;	
	var num2=component.find("input2").get("v.value");;	
    alert(parseInt(num1)/parseInt(num2));		
    component.set("v.Result",parseInt(num1)/parseInt(num2));
	},
})