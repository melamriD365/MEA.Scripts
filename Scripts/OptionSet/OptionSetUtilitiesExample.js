if(typeof(MEA)=="undefined"){MEA={}};
if(typeof(MEA.Case)=="undefined"){MEA.Case={}};
if(typeof(MEA.Case.Form)=="undefined"){MEA.Case.Form={}};

MEA.Case.Form={
    CascadeOptionAOptionB:function(executionContext, optionAName, optionBName, dependecies){
        MEA.OptionSet.Utilities.Cascade(executionContext, optionAName, optionBName, dependecies); 
        //formContext.getAttribute(optionAName).addOnChange(MEA.Case.Form.CascadeOptionAOptionB(executionContext, optionAName, optionBName, dependecies));
    }
}