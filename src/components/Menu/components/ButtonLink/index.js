import React from 'react';

function ButtonLink(props) {
    // prop => { className: "0 que alguém passar", href:"/" }
    console.log(props);
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    )

}

export default ButtonLink;