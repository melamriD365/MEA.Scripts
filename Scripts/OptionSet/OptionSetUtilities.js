if(typeof(MEA)=="undefined"){MEA={}};
if(typeof(MEA.OptionSet)=="undefined"){MEA.OptionSet={}};
if(typeof(MEA.OptionSet.Utilities)=="undefined"){MEA.OptionSet.Utilities={}};

MEA.OptionSet.Utilities = {
    //Cascading Utility
    optionSetBValues : null,
    Cascade: function (executionContext, optionAName, optionBName, dependecies) {
        var formContext = executionContext.getFormContext();
        var selectedAValue = formContext.getAttribute(optionAName).getValue();
        var optionSetBControl = formContext.getControl(optionBName);

        if (optionSetBValues == null)
            optionSetBValues = optionSetBControl.getOptions();

        if (selectedAValue != null) {
            optionSetBControl.clearOptions();
            var dependeciesB = dependecies.find(d => d[0] == selectedAValue).slice(1);
            var filtredOptionB = optionSetBValues.filter(v => dependeciesB.includes(v.value));
            filtredOptionB.forEach(d => {
                optionSetBControl.addOption(d);
            })
        }
        else {
            optionSetBControl.clearOptions();
        }
    }
}

