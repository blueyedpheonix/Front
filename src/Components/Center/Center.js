import React from 'react'

export default function Center({children, }) {

        return (
            <div style={{
                display: 'inline',
            }}>
                <div style={{
                    textAlign: 'center',
                }}>

                    {this.props.children}
                </div>
            </div>
        )
}