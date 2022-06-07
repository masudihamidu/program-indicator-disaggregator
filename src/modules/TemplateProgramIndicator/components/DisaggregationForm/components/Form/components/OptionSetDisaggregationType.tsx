import React from "react";
import {useWatch} from "react-hook-form";
import {DISAGGREGATION_TYPES} from "../../../../../../../shared/constants";
import MultipleOptionsField from "../../../../../../../shared/components/InputFields/MultipleOptionsField";
import i18n from "@dhis2/d2-i18n";

export function OptionSetDisaggregationType({options}: { options: { label: string, value: any }[] }): React.ReactElement | null {
    const type = useWatch({name: "type"});
    return type === DISAGGREGATION_TYPES.OPTION_SET ? <div className="col-sm-12">
        <MultipleOptionsField
            name="values"
            label={i18n.t("Select options")}
            options={options}
        />
    </div> : null;
}
