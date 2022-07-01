import React from 'react'


export const CheckBox4 = () => {
    const AtribValues = ["Option", "Option", "Option", "Option"]
    return (
        <div>
            {AtribValues.map(value => {
                return (
                    <div className='py05'>
                        <input type="checkbox" />
                        <label>&nbsp;{value}</label>
                    </div>
                )
            })}
        </div>
    )
}
export const CheckBox6 = () => {
    const AtribValues = ["Option", "Option", "Option", "Option", "Option", "Option"]
    return (
        <div>
            {AtribValues.map(value => {
                return (
                    <div className='py05'>
                        <input type="checkbox" />
                        <label>&nbsp;{value}</label>
                    </div>
                )
            })}
        </div>
    )
}
export const CheckBox8 = () => {
    const AtribValues = ["Option", "Option", "Option", "Option","Option", "Option", "Option", "Option"]
    return (
        <div>
            {AtribValues.map(value => {
                return (
                    <div className='py05'>
                        <input type="checkbox" />
                        <label>&nbsp;{value}</label>
                    </div>
                )
            })}
        </div>
    )
}

