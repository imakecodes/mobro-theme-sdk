import {renderEdit} from "mobro/hooks/components-hooks";
import {useState} from "react";
import CollapseButton from "mobro/containers/edit/layout/CollapseButton";

function Fieldset(props) {
    const {
        path,
        layoutConfig,
        config,
        onChange
    } = props;

    const [show, setShow] = useState(!layoutConfig?.collapsed || !layoutConfig?.collapsible);

    return (
        <div className={`fieldset form-group`}>
            <div className={"fieldset-label d-flex align-items-center justify-content-between"}>
                <div>
                    {layoutConfig?.label}
                </div>

                <div className={"line-height-1"}>
                    <CollapseButton
                        collapsed={!show}
                        onClick={() => setShow(!show)}
                    />
                </div>
            </div>

            <div className={`fieldset-body form-group-container ${show ? "p-2" : "collapsed"}`}>
                {show && renderEdit({
                    fields: layoutConfig?.children,
                    path,
                    config,
                    onChange
                })}
            </div>
        </div>
    );
}

export default Fieldset;