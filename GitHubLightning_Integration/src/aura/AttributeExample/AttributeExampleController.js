({
	doClick : function(component, event, helper) {
        alert(component.isValid());
		alert(component.getName());		
        alert(component.get('v.whom'));
        component.set('v.whom','sandeep');
        alert(component.get('v.whom'));
        var ageCom=component.find('testInput');
		alert(ageCom.get('v.value'));
        ageCom.set('v.value',11);
	}
})